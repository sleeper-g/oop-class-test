export default class Character {
  constructor(name, type) {
    let types = [ 'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie' ]

    if ( typeof name === 'string' && name.length >= 2 && name.length <= 10){
      this.name = name
    }
    else {
      throw new Error('wrong name')
    }

    if ( types.includes(type)){
      this.type = type
    }
    else {
      throw new Error('wrong type')
    }

    this.health = 100
    this.level = 1
    this.attack = null
    this.defence = null
  }

}
