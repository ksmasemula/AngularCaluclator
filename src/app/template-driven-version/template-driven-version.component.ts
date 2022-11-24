import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-version',
  templateUrl: './template-driven-version.component.html',
  styleUrls: ['./template-driven-version.component.scss']
})
export class TemplateDrivenVersionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public display: string = '';
  public errMessageMode: boolean = false;
  public errMsg: string = '';

  public calculate(): void {
    try {
      let result = eval(this.display);

      if (isNaN(result) || result.toString() === 'Infinity') {
        this.errMsg = 'Invalid operation occured';
        this.errMessageMode = true;
        return;
      }

      this.display = result.toString();
      return;
    } catch (error: any) {
      this.errMsg = error.message;
      this.errMessageMode = true;
      return;
    }
  }

  public getOperand(operand: number): void {
    this.display += operand.toString();
  }

  public getOperator(operator: string): void {
    this.errMessageMode = false;

    if (operator === 'C') {
      this.display = '';
      return;
    }

    if (operator === '=') {
      this.calculate();
      return;
    }

    this.display += operator;
  }
}
