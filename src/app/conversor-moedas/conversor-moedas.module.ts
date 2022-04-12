import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorMoedasComponent } from './conversor-moedas.component';
import { ConversorMoedasService } from './services/conversor-moedas.service';



@NgModule({
  declarations: [
    ConversorMoedasComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ConversorMoedasService
  ]
})
export class ConversorMoedasModule { }
