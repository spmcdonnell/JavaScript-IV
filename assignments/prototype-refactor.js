/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

//   function GameObject(obj) {
//     this.createdAt = obj.createdAt;
//     this.name = obj.name;
//     this.dimensions = obj.dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   }

class GameObject {
  constructor(attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

//   function CharacterStats(obj) {
//     GameObject.call(this, obj);
//     this.healthPoints = obj.healthPoints;
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
//   };

class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);

    this.healthPoints = attr.healthPoints;
  }

  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

//   function Humanoid(obj) {
//     CharacterStats.call(this, obj);
//     this.team = obj.team;
//     this.weapons = obj.weapons;
//     this.language = obj.language;
//   }

//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);

    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }

  greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
}

/*
    === Villain (An evil son of a gun.) ===
    * powerLevel
    * powerUp() increase powerLevel property by 5 // 
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
    * should inherit greet() from Humanoid
  */

//   function Villain(obj) {
//     Humanoid.call(this, obj);
//     this.powerLevel = obj.powerLevel;
//   }

//   Villain.prototype = Object.create(Humanoid.prototype);
//   Villain.prototype.powerUp = function() {
//     this.powerLevel += 5;
//     return `${this.name} increased their power level by 5 points.`;
//   };

class Villain extends Humanoid {
  constructor(attr) {
    super(attr);

    this.powerLevel = attr.powerLevel;
  }

  powerUp() {
    this.powerLevel += 5;
    return `${this.name} increased their power level by 5 points.`;
  }
}

/*
    === Hero (A courageous crusader.) ===
    * attack() decrease a chosen opponent's healhtPoints by 5, killing them if their HP reaches 0 // 
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
    * should inherit greet() from Humanoid
  */

//   function Hero(obj) {
//     Humanoid.call(this, obj);
//     this.powerLevel = obj.powerLevel;
//   }

//   Hero.prototype = Object.create(Humanoid.prototype);
//   Hero.prototype.attack = function(victim) {
//     victim.healthPoints -= 5;
//     if (victim.healthPoints <= 0) {
//       return `Our hero attacked ${victim.name} and killed them!`;
//     } else {
//       return `Our hero attacked ${victim.name} and reduced their healthPoints by 5 points, bringing their remaining HP to ${victim.healthPoints}.`;
//     }
//   };

class Hero extends Humanoid {
  constructor(attr) {
    super(attr);

    this.powerLevel = attr.powerLevel;
  }

  attack(victim) {
    victim.healthPoints -= 5;
    if (victim.healthPoints <= 0) {
      return `Our hero attacked ${victim.name} and killed them!`;
    } else {
      return `Our hero attacked ${
        victim.name
      } and reduced their healthPoints by 5 points, bringing their remaining HP to ${
        victim.healthPoints
      }.`;
    }
  }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 6
  },
  healthPoints: 10,
  name: "Belic",
  team: "Alistain",
  weapons: ["Bow", "Dagger"],
  language: "Grunts and whistles",
  powerLevel: 10
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 4,
    width: 9,
    height: 2
  },
  healthPoints: 10,
  name: "Bob",
  team: "Jones",
  weapons: ["Buster Sword", "Bolt Materia"],
  language: "mute"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(villain.powerLevel); // Belic shows off his power level.
console.log(villain.powerUp()); // Belic powers up.
console.log(villain.powerLevel); // Belic shows off his raised power level.
console.log(hero.attack(villain)); // Belic shows off his raised power level.
console.log(hero.attack(villain)); // Belic shows off his raised power level.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

// */
