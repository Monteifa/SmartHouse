import { Router } from 'express';
import HouseController from './controllers/HouseController';

const routes = Router();

//House
routes.get('/houses/:id', HouseController.find);
routes.post('/houses', HouseController.create);
routes.post('/houses/:id/rooms', HouseController.addRoom);
routes.post('/houses/:id/rooms/:id/devices', HouseController.addDevice);

export default routes;
