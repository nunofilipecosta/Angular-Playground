import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log('***** constructor *****');
  }

  ngOnInit() {
    console.log('***** ngOnInit *****');
  }

  ngOnDestroy(): void {
    console.log('***** ngOnDestroy *****');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('***** ngOnChanges *****');
    console.log(changes);
  }
}
