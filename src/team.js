// src/team.js
class Character {
  constructor(id, name, level) {
    this.id = id;
    this.name = name;
    this.level = level;
  }

  equals(other) {
    return this.id === other.id;
  }
}

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character already exists in the team');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}

export { Team, Character };
