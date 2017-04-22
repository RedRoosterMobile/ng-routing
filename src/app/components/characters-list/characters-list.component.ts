import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Character} from '../../classes/character';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [CharactersService]
})
export class CharactersListComponent implements OnInit {
  characters: Character[];

  constructor(private charactersService:CharactersService) { }

  getCharacters(): Observable<Character[]> {
    return this.charactersService.getCharacters();
  }

  ngOnInit() {
    this.getCharacters().subscribe(res => this.characters = res);
  }

}
