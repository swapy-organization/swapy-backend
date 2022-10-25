const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );
jest.setTimeout( 60000 );


describe( 'check item endpoints ', () => {
  it('check create item', async () => {
    const res = await request.post('/items').send({
      "name": "test item",
      "description": "test description",
      "sellingPrice": 10,
      "sellingStatus": true,
      "category": "test category",
      "owner": 1,
      "cityOfSwap": "Amman",
      "countryOfSwap": "Jordan",
      "swapFor": "test swap",
    });
    expect(res.status).toEqual(200);
    expect(res.body.item.name).toEqual('test item');
    expect(res.body.item.description).toEqual('test description');
    expect(res.body.item.sellingPrice).toEqual(10);
    expect(res.body.item.sellingStatus).toEqual(true);
    expect(res.body.item.owner).toEqual(1);
    expect(res.body.item.cityOfSwap).toEqual('Amman');
    expect(res.body.item.countryOfSwap).toEqual('Jordan');
    expect(res.body.item.swapFor).toEqual('test swap');
  });

  it('check get all items', async () => {
    const res = await request.get('/items');
    expect(res.status).toEqual(200);
    expect(res.body.items[0].name).toEqual('test item');
    expect(res.body.items[0].description).toEqual('test description');
    expect(res.body.items[0].sellingPrice).toEqual(10);
    expect(res.body.items[0].sellingStatus).toEqual(true);
    expect(res.body.items[0].owner).toEqual(1);
    expect(res.body.items[0].cityOfSwap).toEqual('Amman');
    expect(res.body.items[0].countryOfSwap).toEqual('Jordan');
    expect(res.body.items[0].swapFor).toEqual('test swap');
  });

  it('check get item by id', async () => {
    const res = await request.get('/items/6');
    expect(res.status).toEqual(200);
    expect(res.body.item.name).toEqual('test item');
    expect(res.body.item.description).toEqual('test description');
    expect(res.body.item.sellingPrice).toEqual(10);
    expect(res.body.item.sellingStatus).toEqual(true);
    expect(res.body.item.owner).toEqual(1);
    expect(res.body.item.cityOfSwap).toEqual('Amman');
    expect(res.body.item.countryOfSwap).toEqual('Jordan');
    expect(res.body.item.swapFor).toEqual('test swap');
  });

  it('check update item', async () => {
    const res = await request.post('/items/4').send({
      "name": "test item",
      "description": "test description",
      "sellingPrice": 10,
      "sellingStatus": true,
      "owner": 1,
      "cityOfSwap": "Amman",
      "countryOfSwap": "Jordan",
      "swapFor": "test swap",
    });
    expect(res.status).toEqual(200);
    expect(res.body.item.name).toEqual('test item');
    expect(res.body.item.description).toEqual('test description');
    expect(res.body.item.sellingPrice).toEqual(10);
    expect(res.body.item.sellingStatus).toEqual(true);
    expect(res.body.item.owner).toEqual(1);
    expect(res.body.item.cityOfSwap).toEqual('Amman');
    expect(res.body.item.countryOfSwap).toEqual('Jordan');
    expect(res.body.item.swapFor).toEqual('test swap');
  });

  it('check delete item', async () => {
    const res = await request.delete('/items/6');
    expect(res.status).toEqual(200);
  });
});
