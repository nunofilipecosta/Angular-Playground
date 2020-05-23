import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let booksService: BooksService;

  beforeEach(() => {
    booksService = new BooksService();
  });
  // beforeEach(() =>
  //   TestBed.configureTestingModule({ providers: [BooksService] })
  // );

  // it('should be created', () => {
  //   const service: BooksService = TestBed.get(BooksService);
  //   expect(service).toBeTruthy();
  // });

  it('should return 6 harcoded books', () => {
    const result = booksService.getBooksHardcoded();

    expect(result.length).toBe(6);
  });
});
