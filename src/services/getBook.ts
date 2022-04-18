import { Book } from "../types/book";
import { issueRequest } from "../util/issusRequest";

export async function getBook(bookId: string): Promise<Book> {
  const response = await issueRequest({ path:`books/${bookId}`, method: "GET" });

  const book: Book = await response.json();
  return book;
}
