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
	ngOnInit() {
		console.log('Why are you so curious?');
	}

	getNumber(i) {
		this.num = i;
		this.painel.push(this.num)
	}

	putNumbersInArray(){
		this.numeral = this.painel.join('');
		this.painel = [];
		this.values.push(this.numeral);
		for (const num in this.values) {
			if (this.values.hasOwnProperty(num)) {
				this.element = this.values[num];
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
		this.putNumbersInArray();
		this.calculo += parseInt(this.element);
	}

	subtraction(){
		this.putNumbersInArray();
		this.operator = "sub";
		this.calculo -= parseInt(this.element); 
	   	if ( this.calculo < 0){
			this.calculo *= -1;
		}
	}
	multiplication(){
		this.putNumbersInArray();
		this.disabledBtn();
		this.operator = "multiply";
		this.calculo = 1;
		this.calculo *= parseInt(this.element);
	}

	division(){
		this.putNumbersInArray();
		this.disabledBtn();
		this.operator = "division";
		this.calculo = 1;
		this.calculo = parseInt(this.element);
	}


	total() {
		this.showResult = true;
		//pega o ultimo numero clicado antes de clicar em resultado
		this.numeral = this.painel.join('');
		//limpa o painel para mostrar o resultado
		this.painel = [];
		// transforma em inteiro o ultimo numero digitado
		this.resultTotal = parseInt(this.numeral);

		if (this.operator === "sub"){
			this.result = (this.calculo  - this.resultTotal) * 1 ;
			return this.result;
		}else if (this.operator === "multiply"){
			this.result = this.calculo * this.resultTotal ;
			return this.result;
		} else if (this.operator === "division"){
			this.result = 1;
			this.result = this.calculo / this.resultTotal ;
			return this.result;
		}
		this.result = (this.resultTotal + this.calculo) * 1 ;
		
		if(isNaN(this.result) ) {
			this.result = this.calculo;
		}
		return this.result;
	}

	limpar() {
		this.painel = [];
		this.num = 0;
		this.values = [];
		this.calculo = 0;
		this.showResult = false;
	}
}
