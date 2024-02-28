import Magician from './../classes/Magician';

test('arguments Magician', () => {
  const result = new Magician('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Magician',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});

