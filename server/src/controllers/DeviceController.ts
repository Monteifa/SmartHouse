import { Request, Response } from 'express';
import Device from 'src/models/Device';
import Room from 'src/models/Room';
import { getMongoRepository } from 'typeorm';
import House from '../models/House';

interface DeviceRouteParams {
  name: string;
  status: boolean;
}

function findRoomIndex(rooms: Room[], roomName: string): number | null {
  let roomIndex: number | null;
  rooms.map((room, index) => room.name === roomName && (roomIndex = index));

  return roomIndex;
}

function findDeviceIndex(devices: Device[], deviceName: string): number | null {
  let deviceIndex: number | null;
  devices.map(
    (device, index) => device.name === deviceName && (deviceIndex = index)
  );

  return deviceIndex;
}

export default {
  /**
   * Get all Devices from a Room
   */
  async getDevices(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName } = request.params;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const roomIndex = findRoomIndex(rooms, roomName);

    if (roomIndex >= 0) {
      const { devices } = rooms[roomIndex];

      return response.json(devices);
    }

    return response
      .status(404)
      .json({ error: 'Erro 404', message: 'Room not found!' });
  },

  /**
   * Get a Device from a Room
   */
  async getDevice(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName, device: deviceName } = request.params;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const roomIndex = findRoomIndex(rooms, roomName);

    if (roomIndex >= 0) {
      const { devices } = rooms[roomIndex];

      const deviceIndex = findDeviceIndex(devices, deviceName);

      if (deviceIndex >= 0) return response.json(devices[deviceIndex]);

      return response
        .status(404)
        .json({ error: 'Erro 404', message: 'Device not found!' });
    }

    return response
      .status(404)
      .json({ error: 'Erro 404', message: 'Room not found!' });
  },

  /**
   * Update a Device
   */
  async updateDevice(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName, device: deviceName } = request.params;

    const { status } = request.body;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    let roomIndex = findRoomIndex(rooms, roomName);

    if (roomIndex >= 0) {
      const { devices } = rooms[roomIndex];

      const deviceIndex = findDeviceIndex(devices, deviceName);

      if (deviceIndex >= 0) {
        const device = devices[deviceIndex];

        device.status = status;

        rooms[roomIndex].devices[deviceIndex] = device;

        const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
          { _id: parseInt(id) },
          { $set: { rooms } },
          { returnOriginal: false }
        );

        return response.json(
          updatedHouse.rooms[roomIndex].devices[deviceIndex]
        );
      }

      return response
        .status(404)
        .json({ error: 'Erro 404', message: 'Device not found!' });
    }

    return response
      .status(404)
      .json({ error: 'Erro 404', message: 'Room not found!' });
  },

  /**
   * Adds a Device to a Room
   */
  async addDevice(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName } = request.params;

    const { name: deviceName, status }: DeviceRouteParams = request.body;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const roomIndex = findRoomIndex(rooms, roomName);

    if (roomIndex >= 0) {
      let { devices } = rooms[roomIndex];

      const newDevice = {
        name: deviceName,
        status,
      };

      devices ? devices.push(newDevice) : (devices = [newDevice]);

      rooms[roomIndex].devices = devices;

      const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
        { _id: parseInt(id) },
        { $set: { rooms } },
        { returnOriginal: false }
      );

      return response.json(updatedHouse.rooms[roomIndex]);
    }

    return response
      .status(404)
      .json({ error: 'Error 404', message: 'Room not found' });
  },

  /**
   * Remove a Device from a Room
   */
  async removeDevice(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName, device: deviceName } = request.params;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const roomIndex = findRoomIndex(rooms, roomName);

    if (roomIndex >= 0) {
      let { devices } = rooms[roomIndex];

      const deviceIndex = findDeviceIndex(devices, deviceName);

      if (deviceIndex >= 0) {
        devices.splice(deviceIndex, 1);

        rooms[roomIndex].devices = devices;

        const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
          { _id: parseInt(id) },
          { $set: { rooms } },
          { returnOriginal: false }
        );

        return response.json({
          message: 'Device Removed',
          room: roomName,
          devices: updatedHouse.rooms[roomIndex],
        });
      }

      return response
        .status(404)
        .json({ error: 'Error 404', message: 'Device not found' });
    }

    return response
      .status(404)
      .json({ error: 'Error 404', message: 'Room not found' });
  },
};
