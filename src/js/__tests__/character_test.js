import Character from './../Character';
import Bowerman from '../Bowerman';
import Swordsman from './../Swordsman';
import Daemon from './../Daemon';
import Magician from './../Magician';
import Undead from './../Undead';
import Zombie from './../Zombie';

test('valid arguments', () => {
  const result = new Character('username', 'Bowerman');
  expect(result).toEqual({
    name: 'username',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  });
});

test('short name', () => {
  expect(() => new Character('A', 'Bowerman')).toThrowError('wrong name');
});

test('long name', () => {
  expect(() => new Character('QWERTYUIOPL', 'Swordsman')).toThrowError('wrong name');
});

test('invalid type', () => {
  expect(() => new Character('username', '')).toThrowError('wrong type');
});


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
