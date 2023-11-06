import { Injectable } from '@angular/core';
import { v4 as uid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uid(),
      name: 'Kriliin',
      power: 1000
    },
    {
      id: uid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uid(),
      name: 'Vegetta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  onDeleteId(id: string): void {
    this.characters = this.characters.filter(char => char.id !== id);
  }

}
