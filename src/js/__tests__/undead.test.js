import Undead from './../classes/Undead';

test('arguments Undead', () => {
  const result = new Undead('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Undead',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

