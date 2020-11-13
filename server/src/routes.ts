import { Router } from 'express';
import HouseController from './controllers/HouseController';

const routes = Router();

//House
routes.get('/houses/:id', HouseController.find);
routes.post('/houses', HouseController.create);
routes.post('/houses/:id/rooms', HouseController.addRoom);
routes.delete('/houses/:id/rooms/:room', HouseController.removeRoom);
routes.post('/houses/:id/rooms/:room/devices', HouseController.addDevice);
routes.delete(
  '/houses/:id/rooms/:room/devices/:device',
  HouseController.removeDevice
);

export default routes;
