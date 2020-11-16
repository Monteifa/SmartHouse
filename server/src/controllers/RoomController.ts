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

export default {
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
};
