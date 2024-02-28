import Swordsman from './../classes/Swordsman';

test('arguments Swordsman', () => {
  const result = new Swordsman('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Swordsman',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});

