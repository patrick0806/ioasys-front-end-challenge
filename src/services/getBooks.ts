import { BookList } from "../types/Book";
import { issueRequest } from "../util/issusRequest";

export async function getBooks(
  page = 1,
  amount = 12,
  title = "",
  category = ""
): Promise<BookList> {
  let path = `/books?page=${page}&amount=${amount}`;

  if (title) {
    path += `&title=${title}`;
  }

  if (category) {
    path += `&category=${category}`;
  }
  const response = await issueRequest({ path, method: "GET" });

  const books: BookList = await response.json();
  return books;
}
