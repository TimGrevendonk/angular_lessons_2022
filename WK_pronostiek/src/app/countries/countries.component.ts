import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, Subscription, switchMap } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  getCountrySubscription : Subscription = new Subscription();
  countries! : Country[]
  searchBox! : HTMLInputElement;
  typeAhead!: Observable<Country[]>;


  constructor(private countryService: CountryService) { }

  ngOnDestroy(): void {
    this.getCountrySubscription.unsubscribe();
  }

  ngOnInit(): void {

    this.searchBox = document.getElementById("countrysearch") as HTMLInputElement;

    this.typeAhead =
    // Returns observable from event.
    fromEvent(this.searchBox, "input").pipe(
      // the event is the observable value, we map it to the value of HTML element = input.
    map(event => (event.target as HTMLInputElement).value),
    // only executes if minimum length >= 2
    filter(text => text.length >= 2),
    // wait for a break in the keystrokes to send requests.
    debounceTime(500),
    // don't send a request if the value stays the same (rapid type and delete of key).
    distinctUntilChanged(),
    switchMap(searchTerm => this.countryService.getCountries(searchTerm))
    )

    this.typeAhead.subscribe(r => {this.countries = r;})

    console.log("called");

  }

}
