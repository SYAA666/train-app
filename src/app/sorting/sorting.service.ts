import { Injectable } from '@angular/core';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  unSortedCollection: User[];
  sortedUserCollection: User[];
  constructor() { }
  byName( userCollection ) {
    userCollection.sort(function (first, next) {
      if ( first.name > next.name ) { return 1; } else if (first.name < next.name) { return -1; } else { return 0; }
    });
    return userCollection;
  }
  byUserName( userCollection ) {
    userCollection.sort(function (first: User, next: User) {
      if ( first.login > next.login ) { return 1; } else if (first.login < next.login ) { return -1; } else { return 0; }
    });
    return userCollection;
  }
  byPhone( userCollection ) {
    userCollection.sort(function (first: User, next: User) {
      if ( first.phone > next.phone ) { return 1; } else if (first.phone < next.phone ) { return -1 } else { return 0; }
    });
  }
}
