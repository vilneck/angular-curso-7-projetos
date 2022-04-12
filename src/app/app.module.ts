import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';
import { CalendarioModule } from './calendario/calendario.module';
import { ConversorMoedasModule } from './conversor-moedas/conversor-moedas.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule,
    CalendarioModule,
    TarefasModule,
    JogoDaVelhaModule,
    ConversorMoedasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
