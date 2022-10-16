import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: "", component: MatchesComponent },
  { path: "countries", component: CountriesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
