import Zombie from './../classes/Zombie';

test('arguments Zombie', () => {
  const result = new Zombie('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Zombie',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});
