import 'mocha';
import { expect } from 'chai';
import api from '../src/services/api';

interface House {
  _id: number;
  name: string;
}

// create house
describe('House Routes', () => {
  it('Should create a house', async () => {
    const { data } = await api.post('/houses');
    const house: House = data;

    expect(house)
      .to.be.an('object')
      .to.have.property('name')
      .to.equal('Casa Cinside');
  });

  // Find house by ID
  it('Should find a house by ID', async () => {
    const { data } = await api.get('/houses/1');
    const house: House = data;

    expect(house).to.be.an('object').to.have.property('_id').to.equal(1);
  });
});
