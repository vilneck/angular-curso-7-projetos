import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { JogoDaVelhaScoreComponent } from './components/jogo-da-velha-score/jogo-da-velha-score.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	JogoDaVelhaComponent,
    JogoDaVelhaScoreComponent,
  ],
  exports: [
  	JogoDaVelhaComponent
  ],
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
