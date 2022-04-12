import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefas: Tarefa[];
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefa = new Tarefa;
  }

  listarTodos(): Tarefa[]
  {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa:Tarefa)
  {
    $event.preventDefault();
    if(confirm("Deseja remover a tarefa"+tarefa.nome+"?")){
      this.tarefaService.remover(tarefa.id)
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa):void
  {
    if(confirm("Deseja alterar o status da tarefa"+tarefa.nome+"?")){
      this.tarefaService.alterarStatus(tarefa.id)
      this.tarefas = this.listarTodos();
    }
  }


  cadastrar(): void {
    if(this.formTarefa.form.valid)
    {
      this.tarefaService.cadastrar(this.tarefa);
      this.tarefas = this.listarTodos();
    }
    this.tarefa = new Tarefa;
  }

}
