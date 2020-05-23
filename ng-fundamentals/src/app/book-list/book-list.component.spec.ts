import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BooksService } from '../services/books.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Book } from '../Models/book';

describe('BooksList', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let element: HTMLElement;
  let debugElement: DebugElement;
  let mockBooksService;

  mockBooksService = jasmine.createSpyObj('mockBooksService', [
    'getBooksHardcoded'
  ]);
  mockBooksService.getBooksHardcoded.and.returnValue(new Array<Book>());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookListComponent],
      providers: [{ provide: BooksService, useValue: mockBooksService }],
      schemas: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  describe('Initial display', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show message "This is awsome"', () => {
      expect(mockBooksService.getBooksHardcoded).toHaveBeenCalled();
      expect(component.hardCodedBooks).toBeDefined();
      expect(component.hardCodedBooks.length).toBe(0);
      expect(element.querySelector('.row').textContent).toBe('This is awsome');
    });
  });
});
