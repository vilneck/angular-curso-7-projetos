import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;
  public calculo: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(){
    this.limpar()
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   *
   * @return void
   */
   limpar(): void {
  	this.calculo = '';
  	this.numero1 = '0';
  	this.numero2 = null;
  	this.resultado = null;
  	this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   *
   * @param string numero
   * @return void
   */
  adicionarNumero(numero: string): void {
  	if (this.operacao === null) {
  	  this.numero1 = this.concatenarNumero(this.numero1, numero);     
  	} else {
  	  this.numero2 = this.concatenarNumero(this.numero2, numero);
  	}
  }

  /**
   * Exibe o cálculo atual na tela   
   * @return string
   */

  exibirCalculo()
  {
    let string = '';
    if(this.numero1)
    {
      string = string + this.numero1;
    }
    if(this.operacao)
    {
      string = string + this.operacao;
    }
    if(this.numero2)
    {
      string = string + this.numero2;
    }
    if(this.numero1 == '0')
    {
      return '';
    }
    return string;
  }
  /**
   * Returna o valor concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
  	// caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
  	  numAtual = '';
  	}

    // primeiro dígito é '.', concatena '0' antes do ponto
  	if (numConcat === '.' && numAtual === '') {
  	  return '0.';
  	}

    // caso '.' digitado e já contenha um '.', apenas retorna
  	if (numConcat === '.' && numAtual.indexOf('.') > -1) {
  	  return numAtual;
  	}

  	return numAtual + numConcat;
  }

  /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a 
   * operação anterior, e define a nova operação.
   *
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void {
    // if (this.operacao === null) {
    // define a operação, se for raiz já executa o calculo
  	if (operacao) {
      this.operacao = operacao;
      if(this.operacao === CalculadoraService.RAIZ_QUADRADA)
      {
      this.calcular();
      }
      return;
  	}

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
  	if (this.numero2 !== null) {
  		this.resultado = this.calculadoraService.calcular(
  			parseFloat(this.numero1), 
  			parseFloat(this.numero2), 
  			this.operacao);
  		this.operacao = operacao;
  		this.numero1 = this.resultado.toString();
  		this.numero2 = null;
  		this.resultado = null;
  	}
  }

  /**
   * Efetua o cálculo de uma operação.
   *
   * @return void
   */
  calcular(): void {
    console.log(this.numero1 )
    console.log(this.operacao )
  	if (this.numero2 === null && this.operacao != CalculadoraService.RAIZ_QUADRADA) {
  		return;
  	}

  	this.resultado = this.calculadoraService.calcular(
  		parseFloat(this.numero1), 
  		parseFloat(this.numero2), 
  		this.operacao);

    this.numero1 = this.resultado.toString();
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @return string
   */
  get display(): string {
  	if (this.resultado !== null) {
  		return this.resultado.toString();
  	}
  	if (this.numero2 !== null) {
  		return this.numero2;
  	}
  	return this.numero1;
  }
}
