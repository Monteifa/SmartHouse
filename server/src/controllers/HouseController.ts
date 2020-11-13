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
  async find(request: Request, response: Response) {
    const { id } = request.params;
    const housesRepository = getMongoRepository(House);

    try {
      const house = await housesRepository.findOneOrFail(parseInt(id));

      return response.json(house);
    } catch (error) {
      return response.status(404).json({
        error: 'Casa não encontrada!',
      });
    }
  },

  async create(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const house = new House();
    house._id = 1;
    house.name = 'Casa Do Fabinho';
    house.rooms = [
      {
        name: 'Quarto',
        dimensions: {
          width: 2,
          height: 3,
          depth: 5,
        },
      },
    ];

    await housesRepository.save(house);

    return response.json(house);
  },

  async addRoom(request: Request, response: Response) {
    const housesRepository = getMongoRepository(House);

    const { id } = request.params;

    const { name, dimensions }: RoomRouteParams = request.body;

    const { depth, height, width } = dimensions;

    const { rooms } = await housesRepository.findOneOrFail(parseInt(id));

    const newRoom = {
      name,
      dimensions: {
        depth,
        height,
        width,
      },
    };

    rooms.push(newRoom);

    const { value: updatedHouse } = await housesRepository.findOneAndUpdate(
      { _id: parseInt(id) },
      { $set: { rooms } },
      { returnOriginal: false }
    );

    return response.json(updatedHouse);
  },

  async addDevice(request: Request, response: Response) {},
};
