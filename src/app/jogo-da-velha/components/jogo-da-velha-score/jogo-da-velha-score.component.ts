import { Component, Input, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../../shared';

@Component({
  selector: 'jogo-da-velha-score',
  templateUrl: './jogo-da-velha-score.component.html',
  styleUrls: ['./jogo-da-velha-score.component.css']
})
export class JogoDaVelhaScoreComponent implements OnInit {


  constructor(public jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    
  }

}
