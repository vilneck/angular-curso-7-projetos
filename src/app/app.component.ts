import { Component, OnInit } from '@angular/core';
import { TarefaService } from './tarefas/shared/tarefa.service';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Curso udemy';

  totalTarefas : number = 0;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  constructor(private tarefaService: TarefaService){
    tarefaService.recarregarMenu$.subscribe(item => this.loadMenu(item));
  }

  ngOnInit()
  {
    this.loadMenu()
  }

  loadMenu(item?)
  {
    let tarefas = this.tarefaService.listarTodos()
    this.totalTarefas = tarefas.length;
  }
}
