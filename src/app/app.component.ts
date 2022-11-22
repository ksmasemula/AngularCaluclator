import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KsCalculator';
  public calcForm!: FormGroup;
  public operandList: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  public operatorList: string[] = ['.', 'C', '+', '-', '/', '*', '='];
  operandFrmGrps: FormGroup[] = [];
  operatorFrmGrps: FormGroup[] = [];
  public errMessageMode: boolean = false;
  public errMsg: string = '';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildOperands();
    this.buildOperators();
    this.calcForm = this.fb.group({
      display: '',
      operands: this.fb.array(this.operandFrmGrps),
      operators: this.fb.array(this.operatorFrmGrps)
    });

    console.log(this.calcForm);
  }

  buildOperands() {
    this.operandList.forEach((operand) => {
      this.operandFrmGrps.push(this.fb.group({ value: operand }));
    });
  }

  buildOperators() {
    this.operatorList.forEach((operator) => {
      this.operatorFrmGrps.push(this.fb.group({ operator: operator }));
    });
  }

  get operands(): FormArray {
    return <FormArray>this.calcForm.get('operands');
  }

  get operators(): FormArray {
    return <FormArray>this.calcForm.get('operators');
  }

  public calculate(): void {
    try {
      let result = eval(this.calcForm.get('display')?.value);

      if (isNaN(result) || result.toString() === 'Infinity') {
        this.errMsg = 'Invalid operation occured';
        this.errMessageMode = true;
        return;
      }

      this.calcForm.patchValue({ display: result.toString() });
      return;
    } catch (error: any) {
      this.errMsg = error.message;
      this.errMessageMode = true;
      return;
    }
  }

  public getOperand(operand: number): void {
    this.calcForm.patchValue({ display: this.calcForm.get('display')?.value + operand.toString() });
  }

  public getOperator(operator: string): void {
    this.errMessageMode = false;

    if (operator === 'C') {
      this.calcForm.patchValue({ display: '' });
      return;
    }

    if (operator === '=') {
      this.calculate();
      return;
    }

    this.calcForm.patchValue({ display: this.calcForm.get('display')?.value + operator.toString() });
  }
}
