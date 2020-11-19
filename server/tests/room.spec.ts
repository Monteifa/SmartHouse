import 'mocha';
import { expect } from 'chai';
import api from '../src/services/api';

interface Room {
  name: string;
  devices?: [];
  icon: string;
}

// Create Room
describe('Room Routes', () => {
  it('Should create a room', async () => {
    const { data } = await api.post('/houses/1/rooms', {
      name: 'Bathroom',
      icon: 'weekend',
    });

    const room: Room = data.rooms;

    expect(room[0])
      .to.be.an('object')
      .to.have.property('name')
      .to.equal('Living Room');
  });

  // Delete Room
  it('Should delete a room', async () => {
    const { data } = await api.delete('/houses/1/rooms/Bathroom');

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Room Removed');
  });
});
