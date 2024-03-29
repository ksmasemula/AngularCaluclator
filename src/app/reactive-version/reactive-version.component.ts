import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-version',
  templateUrl: './reactive-version.component.html',
  styleUrls: ['./reactive-version.component.scss']
})
export class ReactiveVersionComponent implements OnInit {
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
    this.buildBtns(this.operandList, this.operandFrmGrps);
    this.buildBtns(this.operatorList, this.operatorFrmGrps);

    this.calcForm = this.fb.group({
      display: '',
      operands: this.fb.array(this.operandFrmGrps),
      operators: this.fb.array(this.operatorFrmGrps)
    });
  }

  setBtnStyle(value: number | string): string[] {
    if (value === 0 || value === '=') return ['col-12'];
    return typeof value == 'string' ? ['col-6'] : ['col-4'];
  }

  buildBtns(btnList: number[] | string[], btnFrmGrps: FormGroup[]) {
    btnList.forEach(btnVal => btnFrmGrps.push(this.fb.group({ button: btnVal })));
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
    }
  }

  public getOperand(operand: number): void {
    this.calcForm.patchValue({ display: this.calcForm.get('display')?.value + operand.toString() });
  }

  public getOperator(operator: string): void {
    this.errMessageMode = false;

    switch (operator) {
      case 'C':
        this.calcForm.patchValue({ display: '' });
        break;
      case '=':
        this.calculate();
        break;
      default:
        this.calcForm.patchValue({ display: this.calcForm.get('display')?.value + operator.toString() });
        break;
    }
  }
}
