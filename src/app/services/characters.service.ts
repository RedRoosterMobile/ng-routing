import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// https://www.youtube.com/watch?v=ei7FsoXKPl0
// https://www.youtube.com/watch?v=ZmEvKLYF0os
import { Observable } from 'rxjs/Observable';

import { Character } from '../classes/character';
import { CHARACTERS } from '../classes/data-characters';

@Injectable()
export class CharactersService {

  private _url: string ='apidata/characters.json';

  constructor(private _http:Http) { }

  getCharacters(): Observable<Character[]> {
    return this._http.get(this._url).map((response: Response) => response.json());
  }

}
