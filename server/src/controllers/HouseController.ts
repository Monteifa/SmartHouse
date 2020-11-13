import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';
import House from '../models/House';

interface RoomRouteParams {
  name: string;
  dimensions: {
    depth: number;
    width: number;
    height: number;
  };
}

interface DeviceRouteParams {
  name: string;
  status: boolean;
}

export default {
  /**
   * Find the User's house, by default there's only one house
   */
  async find(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id } = request.params;

    try {
      const house = await housesRepository.findOneOrFail(parseInt(id));

      return response.json(house);
    } catch (error) {
      return response.status(404).json({
        error: 'Casa não encontrada!',
      });
    }
  },

  /**
   * Create a the User's house, by default there's only one house with default values
   */
  async create(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const house = new House();
    house._id = 1;
    house.name = 'Casa Do Fabinho';
    house.rooms = [
      {
        name: 'Sala',
        dimensions: {
          width: 5,
          height: 3,
          depth: 6,
        },
      },
    ];

    await housesRepository.save(house);

    return response.json(house);
  },

  /**
   * Adds a Room to the House
   */
  async addRoom(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);
    const { id } = request.params;

    const { name, dimensions }: RoomRouteParams = request.body;

    const { depth, height, width } = dimensions;

    let { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const newRoom = {
      name,
      dimensions: {
        depth,
        height,
        width,
      },
    };

    rooms ? rooms.push(newRoom) : (rooms = [newRoom]);

    const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
      { _id: parseInt(id) },
      { $set: { rooms } },
      { returnOriginal: false }
    );

    return response.json({
      message: 'Room Added!',
      name,
      rooms: updatedHouse.rooms,
    });
  },

  /**
   * Removes a Room from the House
   */
  async removeRoom(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName } = request.params;

    let { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    let roomIndex = -1;
    rooms.map((room, index) => room.name === roomName && (roomIndex = index));

    if (roomIndex >= 0) {
      rooms.splice(roomIndex, 1);

      const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
        { _id: parseInt(id) },
        { $set: { rooms } },
        { returnOriginal: false }
      );

      return response.json({
        message: 'Room Removed',
        room: roomName,
        rooms_in_the_house: updatedHouse.rooms,
      });
    }

    return response
      .status(404)
      .json({ error: 'Error 404', message: 'Room not found' });
  },

  /**
   * Adds a Device to a Room
   */
  async addDevice(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id, room: roomName } = request.params;

    const { name: deviceName, status }: DeviceRouteParams = request.body;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    let roomIndex = -1;
    rooms.map((room, index) => room.name === roomName && (roomIndex = index));

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

    let roomIndex = -1;
    rooms.map((room, index) => room.name === roomName && (roomIndex = index));

    if (roomIndex >= 0) {
      let { devices } = rooms[roomIndex];

      let deviceIndex: any;
      devices.map(
        (device, index) => device.name === deviceName && (deviceIndex = index)
      );

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
