import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  // Aqui se hace la inyeccion de dependencias del service
  constructor(private dbzServcie: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzServcie.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzServcie.onDeleteId(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzServcie.addCharacter(character);
  }
}
