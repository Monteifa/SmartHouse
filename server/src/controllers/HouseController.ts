import House from '../models/House';
import { Request, Response } from 'express';
import { getMongoRepository } from 'typeorm';

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
};
