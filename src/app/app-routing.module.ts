import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/components';
import { CalendarioComponent } from './calendario/calendario.component';
import { ConversorMoedasComponent } from './conversor-moedas/conversor-moedas.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { TarefaRoutes } from './tarefas/tarefas-routing.module';

const routes: Routes = [
  {
    path:"calculadora", component: CalculadoraComponent
  },{
    path:"calendario", component: CalendarioComponent
  },{
    path:"jogo-da-velha", component: JogoDaVelhaComponent
  },{
    path:"conversor-moedas", component: ConversorMoedasComponent
  },
  ...TarefaRoutes,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
