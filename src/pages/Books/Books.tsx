import * as React from "react";
import * as S from "./Books.styles";
import { Book, BookList } from "../../types/Book";
import { BookCard } from "../../components/BookCard/BookCard";
import { getBooks } from "../../services/getBooks";
import { Logo } from "../../assets/icons";

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
      <S.Menu>menu</S.Menu>
      <S.BooksContainer>
        book
      </S.BooksContainer>
    </S.Container>
  );
}
/* <S.Container>
      <S.Content>
        <S.PageTitle>
          <Logo color={"#333333"}/> &nbsp; Books
        </S.PageTitle>
        <S.BooksContainer>
          {bookList &&
            bookList.data.map((book: Book) => {
              return <BookCard key={book.id} book={book} />;
            })}
        </S.BooksContainer>
      </S.Content>
    </S.Container> */