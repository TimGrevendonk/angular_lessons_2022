import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player!: Player;
  showTournaments: Boolean = false;
  buttonText: string = "More details"

  constructor() { }

  ngOnInit(): void {
  }

  showDetail() : void {
    console.log(this.player.id);

    this.showTournaments = !this.showTournaments
    this.showTournaments ? this.buttonText="less details" : this.buttonText="more details"
  }
}
