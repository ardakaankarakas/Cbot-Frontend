import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookService],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class BookListComponent implements OnInit {
  bookName: string;
  bookAuthor: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookName = '';
    this.bookAuthor = '';
  }

  addBook(): void {
    if (this.bookName.trim().length === 0 || this.bookAuthor.trim().length === 0 ) {
      return;
    }

    this.bookService.addBook(this.bookName, this.bookAuthor);

    this.bookName = '';
    this.bookAuthor = '';
  }
}

