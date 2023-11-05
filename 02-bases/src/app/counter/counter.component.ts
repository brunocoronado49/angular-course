import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="decrement()">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment()">+1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  public increment(): void {
    this.counter += 1;
  }

  public decrement(): void {
    if (this.counter <= 0) {
      alert('You are in the limit');
      return;
    }
    this.counter -= 1;

  }

  public reset(): void {
    this.counter = 0;
  }

}
