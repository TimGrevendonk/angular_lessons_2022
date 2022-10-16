import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // // needed for obsevables, but async does not use it.
  matches! : Match[];

  getMatchesSubscription: Subscription = new Subscription();

  constructor(private matchService: MatchService) { }

  // // (Async pipe method) A dollar sign after a variable is an observable.
  // matches$ : Observable<Match[]> = new Observable<Match[]>();

  // Unsubscibe to a subscription if th
  ngOnDestroy(): void {
    this.getMatchesSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // // (Async pipe method) used if a subscription is not needed and data is not mutated.
    // this.matches$ = this.matchService.getMatches();

    // Subscibe on observables. always done with API's.
    // Put the subscription in the subsciption variable to unbind it later.
    this.getMatchesSubscription =
        // Subscibe is done when you want to manipulate the data (filter, uppercase...)
      this.matchService.getMatches().subscribe(
        apiMatches => {
          console.log("apiMatches:", apiMatches);
          this.matches = apiMatches;
        }
      )

  }
}

