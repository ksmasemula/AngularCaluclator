import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgCalculator';

 public display: string = '';
 public errMessageMode: boolean = false;
 public errMsg: string = '';

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

    this.display += operator;
  }
}
