import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1: number;
  public num2: number;
  public result: number;
  public resultString: string;

  constructor() {

  }

  cong() {
    this.result = this.num1 + this.num2;
    this.resultString = this.num1 + ' + ' + this.num2;
  }

  tru() {
    this.result = this.num1 - this.num2;
    this.resultString = this.num1 + ' - ' + this.num2;
}

  nhan() {
    this.result = this.num1 * this.num2;
    this.resultString = this.num1 + ' * ' + this.num2;
}

  chia() {
    this.result = this.num1 / this.num2;
    this.resultString = this.num1 + ' / ' + this.num2;
}
  ngOnInit() {
  }

}
