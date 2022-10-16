import { Component, OnInit } from '@angular/core';
import { Player } from "../models/player";
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[]
  // Injects the service automatically, it must not be defined.
  constructor(private playerSerivce : PlayerService) {
    this.players = this.playerSerivce.getPlayers();
  }

  ngOnInit(): void {
    this.playerSerivce
  }

  showPlayer(player : Player) : string {
    return `${player.id} ${player.name} ${player.birthyear}`
  }

}
