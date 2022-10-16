import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playersearchform',
  templateUrl: './playersearchform.component.html',
  styleUrls: ['./playersearchform.component.css']
})
export class PlayersearchformComponent implements OnInit {
  players: Player[];
  searchName: string = "";
  // Injects the service automatically, it must not be defined.
  constructor(private playerSerivce : PlayerService) {
    this.players = this.playerSerivce.getPlayers();
  }

  // no injection here!!
  // https://angular.io/guide/inputs-outputs
  ngOnInit(): void {
    this.playerSerivce
  }


  submitPlayerSearch(){
    this.players = this.playerSerivce.playerNameSearch(this.searchName);
  }

}
