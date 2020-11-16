import { Router } from 'express';
import HouseController from './controllers/HouseController';
import RoomController from './controllers/RoomController';
import DeviceController from './controllers/DeviceController';

const routes = Router();

//House
routes.get('/houses/:id', HouseController.find);
routes.post('/houses', HouseController.create);

//Room
routes.post('/houses/:id/rooms', RoomController.addRoom);
routes.delete('/houses/:id/rooms/:room', RoomController.removeRoom);

//Device
routes.get('/houses/:id/rooms/:room/devices', DeviceController.getDevices);
routes.post('/houses/:id/rooms/:room/devices', DeviceController.addDevice);
routes.get(
  '/houses/:id/rooms/:room/devices/:device',
  DeviceController.getDevice
);
routes.put(
  '/houses/:id/rooms/:room/devices/:device',
  DeviceController.updateDevice
);
routes.delete(
  '/houses/:id/rooms/:room/devices/:device',
  DeviceController.removeDevice
);

export default routes;
