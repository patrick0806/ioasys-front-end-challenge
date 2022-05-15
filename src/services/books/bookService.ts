import { Book, BookList } from '../../types/Book';
import { HttpMethod, makeRequest } from '../../util/makeRequest';

async function getBook(bookId: string): Promise<Book> {
  const response = await makeRequest({
    path: `books/${bookId}`,
    method: HttpMethod.GET,
  });

  const book: Book = await response.json();
  return book;
}

async function getBooks(
  page = 1,
  amount = 12,
  title = '',
  category = '',
): Promise<BookList> {
  let path = `books?page=${page}&amount=${amount}`;

  if (title) {
    path += `&title=${title}`;
  }

  if (category) {
    path += `&category=${category}`;
  }
  const response = await makeRequest({ path, method: HttpMethod.GET });

  const books: BookList = await response.json();
  return books;
}

export { getBook, getBooks };
