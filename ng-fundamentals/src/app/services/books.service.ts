import { Injectable } from '@angular/core';
import { Book } from '../Models/book';

@Injectable()
export class BooksService {
  constructor() { }


  getBooksHardcoded() {
    const book1 = new Book();
    book1.Isbn = '1';
    book1.Name = 'A game of thrones';

    const book2 = new Book();
    book2.Isbn = '2';
    book2.Name = 'A clash of kings';

    return [book1, book2, book1, book2, book1, book2];
  }
}
