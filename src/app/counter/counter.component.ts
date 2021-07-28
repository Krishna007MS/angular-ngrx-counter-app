import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = store.select('count');
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(increment());
  }

  reset() {
    this.store.dispatch(reset());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
