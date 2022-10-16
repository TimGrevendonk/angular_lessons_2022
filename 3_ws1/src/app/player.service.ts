import { Injectable } from '@angular/core';
import { Player } from './models/player';

@Injectable({
  // Root means it can be used over the whole app.
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = [
    // playerlist!: this.Player[];
    {id: 1, name: "kees", birthyear: 1999, tournaments_won: ["second"]},
    {id: 2, name: "sjakkie", birthyear: 1994, tournaments_won: ["first", "third"]}
  ];

  constructor() {
    this.players.push(
      {id: 3, name: "Sjorrie", birthyear: 1998, tournaments_won: []}
    )
    console.log(this.players);
  }

  getPlayers() : Player[]{
    return this.players;
  }

  playerNameSearch(name: string) :Player[] {
    return this.players.filter(p => p.name.toLowerCase().includes(name.toLowerCase()))
  }
}
