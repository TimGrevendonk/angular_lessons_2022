import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, timer } from 'rxjs';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient) { }

  // We want to specifically return observable matches from the api.
  getMatches() : Observable<Match[]> {
    // pipe connects objects together (the observable that loops every 3 sec together the observable to get the matches)
    return timer(1, 3000)
    // switchmap lets us switch from observables.
    .pipe(switchMap(
      // after the timer has triggered switch through pipe and switchmap to a different observable.
      () => this.httpClient.get<Match[]>("http://localhost:3000/matches")
      // returns the last piped object.
    ))
  }
}
