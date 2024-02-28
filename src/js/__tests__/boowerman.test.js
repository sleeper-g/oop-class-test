import Bowerman from './../classes/Bowerman';

test('arguments Bowerman', () => {
  const result = new Bowerman('username');
  expect(result).toEqual({
    name: 'username',
    type: 'Bowerman',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

