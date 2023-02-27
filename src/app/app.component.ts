import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  input: any = '';
  history: string = '';
  proccess: any = '';
  first: number = 0;
  second: number = 0;
  keyInput(input: any) {
    this.input += input
  }
  setProccess(proc: string) {
    if (!this.first) {
      this.first = parseFloat(this.input)
      console.log('this.first', this.first)
    }
    else
      this.second = parseFloat(this.input)

    this.input = '';
    if (this.proccess && proc === '=')
      this.calculate()
    if (proc !== '=')
      this.proccess = proc
  }
  calculate() {
    let result = 0;
    switch (this.proccess) {
      case '+':
        result = this.first + this.second;
        break;
      case '*':
        result = this.first * this.second;
        break;
      case '-':
        result = this.first - this.second;
        break;
      case '/':
        result = this.first / this.second;
        break;
      default:
        break;
    }
    // this.history += `<p> ${this.first} ${this.proccess} ${this.second} = </p> <p>  ${result}</p> <hr/>`
    this.first = 0;
    this.second = 0;
    this.proccess = ''
    this.input = result;
  }

  clear() {
    //this.history = ''
    this.first = 0;
    this.second = 0;
    this.input = ''
  }
  delete() {
    let del = this.input.toString()
    this.input = del.substr(0, del.length - 1)
  }


}
