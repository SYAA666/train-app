import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchReasult: User[];
  constructor() { }
  findIn(listToFind: User[], name: string ) {
    this.searchReasult = listToFind.filter((el) => {
      if (el.name.toLowerCase().includes(name.toLowerCase())) {
        return true;
      }
    });
  }
}
