import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
	public numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	public painel: Array<number> = [];
	public num: number = 0;
	public numeral: string;
	public values: Array<any> = [];
	public calculo: number = 0;
	public element: string;
	public showResult: boolean = false;
	public result: number = 0;
	public operator: string = '';
	public resultTotal: number = 0;
	public btn: any;
	public indexBtn : any;
	

	constructor() { }
// subir no github com angular
//fazer calc pegar mais elemntos para - * e /
// comecar formbuilder com validacoes



	ngOnInit() {
	}

	getNumber(i) {
		this.num = i;
		this.painel.push(this.num)
	}

	putNumbersInArray(){
		this.numeral = this.painel.join('');
		this.painel = [];
		console.log('numero do painel em array', this.numeral);
		this.values.push(this.numeral);
		console.log('este sao n para ser calculados', this.values)
		for (const num in this.values) {
			if (this.values.hasOwnProperty(num)) {
				this.element = this.values[num];
				console.log('cada unidade', this.element)
			}
		}
		
	}
	disabledBtn(){
		this.btn = document.querySelectorAll(".operator-button");
		for ( this.indexBtn in this.btn ) {
			if (this.btn.hasOwnProperty(this.indexBtn)) {
				const element = this.btn[this.indexBtn];
				this.btn[this.indexBtn].disabled = true;
			}	
		}
		return
	}

	plus() {
		//estudar callback
		this.putNumbersInArray();
		//this.disabledBtn();
		this.calculo += parseInt(this.element);
	}

	subtraction(){
		this.putNumbersInArray();
	//	this.disabledBtn();
	
		console.log('calculo>> ',this.calculo,'element>> ', this.element);
		this.calculo -= parseInt(this.element) 
		
		console.log('calculo>> ', this.calculo, 'elemnet>> ',  this.element);
	}
	multiplication(){
		this.putNumbersInArray();
		this.disabledBtn();
		this.operator = "multiply"
		
		this.calculo = 1
		this.calculo *= parseInt(this.element) ;
		console.log('total? multiply', this.calculo);
		
	}

	division(){
		this.putNumbersInArray();
		this.disabledBtn();
		this.operator = "division"
		this.calculo = 1
		this.calculo = parseInt(this.element);
		console.log('total? division', this.calculo);
	}


	total() {
		this.showResult = true;
				
			console.log('este é o numeral', this.numeral);
			//pega o ultimo numero clicado antes de clicar em resultado
			this.numeral = this.painel.join('');
			//limpa o painel para mostrar o resultado
			this.painel = [];
			// transforma em inteiro o ultimo numero digitado
			 this.resultTotal = parseInt(this.numeral);
			 if (this.operator === "sub"){
				this.result = 1;
				this.result = this.calculo - this.resultTotal ;
				console.log(this.calculo, this.resultTotal);
				console.log('sub', this.result, typeof(this.result));
				return this.result;
			 }else if (this.operator === "multiply"){
				this.result = 1;
				this.result = this.calculo * this.resultTotal ;
				console.log(this.calculo, this.resultTotal);
				console.log('vezes', this.result, typeof(this.result));
				return this.result;
			} else if (this.operator === "division"){
				this.result = 1;
				this.result = this.calculo / this.resultTotal ;
				console.log(this.calculo, this.resultTotal);
				console.log('divisao', this.result, typeof(this.result));
			return this.result;
			}
		this.result = (this.resultTotal + this.calculo) * 1 ;
		console.log('mais', this.result, typeof(this.result));
		
		if(isNaN(this.result) ) {
		this.result = this.calculo;
		}
		
	}

	limpar() {
		this.painel = [];
		this.num = 0;
		this.values = [];
		this.calculo = 0;
		this.showResult = false;
	}
}
