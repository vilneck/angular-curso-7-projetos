import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorMoedasComponent } from './conversor-moedas.component';
import { ConversorMoedasService } from './services/conversor-moedas.service';
import { MoedaService } from './services/moeda.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './modal-cotacao/modal-cotacao.component';
import { DataBrPipe } from '../pipes/data-br.pipe';



@NgModule({
  declarations: [
    ConversorMoedasComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    ConversorMoedasService,
    MoedaService
  ]
})
export class ConversorMoedasModule { }
