import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../Models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnChanges {
  hardCodedBooks: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.hardCodedBooks = this.booksService.getBooksHardcoded();
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}
