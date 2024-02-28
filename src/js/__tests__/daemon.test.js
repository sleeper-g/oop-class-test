import Daemon from './../classes/Daemon';

test('arguments Daemon', () => {
  const result = new Daemon('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Daemon',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});

