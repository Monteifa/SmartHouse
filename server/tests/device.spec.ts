import 'mocha';
import { expect } from 'chai';
import api from '../src/services/api';

interface Device {
  name: string;
  status: boolean;
  icon: string;
}

// Create device
describe('Device Routes', () => {
  it('Should create a device', async () => {
    const x = await api.post('/houses/1/rooms', {
      name: 'Living Room',
      icon: 'weekend',
    });

    const { data } = await api.post('/houses/1/rooms/Living%20Room/devices', {
      name: 'Playstation 5',
      status: false,
      icon: 'keyboard',
    });

    const device: Device = data.devices;

    expect(device[0])
      .to.be.an('object')
      .to.have.property('name')
      .to.equal('Playstation 5');
  });

  // List all devices
  it('Should list all devices', async () => {
    const { data } = await api.get('/houses/1/rooms/Living Room/devices');

    const device: Device[] = data;

    expect(device).to.be.an('array').to.have.length.greaterThan(0);
  });

  // Find device by name
  it('Should find a device by the name', async () => {
    const { data } = await api.get(
      '/houses/1/rooms/Living Room/devices/Playstation 5'
    );

    const device: Device = data;

    expect(device)
      .to.be.an('object')
      .to.have.property('name')
      .to.equal('Playstation 5');
  });

  // Update device
  it('Should update a device', async () => {
    const { data } = await api.put(
      '/houses/1/rooms/Living Room/devices/Playstation 5',
      {
        status: true,
      }
    );

    const device: Device = data;

    expect(device).to.be.an('object').to.have.property('status').to.equal(true);
  });

  // Delete device
  it('Should delete a device', async () => {
    const { data } = await api.delete(
      '/houses/1/rooms/Living Room/devices/Playstation 5'
    );

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Device Removed');
  });
});
