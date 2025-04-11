import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id).subscribe(updatedBook => {
      const index = this.books.findIndex(b => b.id === updatedBook.id);
      if (index !== -1) {
        this.books[index] = updatedBook;
      }
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }

  goToBookDetails(id: string): void {
    this.router.navigate(['/books', id]);
  }
}