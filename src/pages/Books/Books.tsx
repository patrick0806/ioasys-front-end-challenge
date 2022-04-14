import * as React from "react";
import * as S from "./Books.styles";
import { Book, BookList } from "../../types/Book";
import { BookCard } from "../../components/BookCard/BookCard";
import { getBooks } from "../../services/getBooks";

export function BooksPage() {
  const [bookList, setBookList] = React.useState<BookList>();

  React.useEffect(() => {
    async function loadBooks() {
      const response = await getBooks();
      setBookList(response);
    }

    loadBooks();
  }, []);

  return (
    <S.Container>
     {/*  <S.BooksContainer>
        {bookList &&
          bookList.data.map((book: Book,idx) => {
            if(idx ===0)
            return <BookCard key={book.id} book={book} />;
          })}
      </S.BooksContainer> */}
    </S.Container>
  );
}
