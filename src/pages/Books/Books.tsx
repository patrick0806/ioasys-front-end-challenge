import * as React from "react";
import * as S from "./Books.styles";
import { Book, BookList } from "../../types/Book";
import { BookCard } from "../../components/BookCard/BookCard";
import { getBooks } from "../../services/getBooks";
import { Exit, Logo } from "../../assets/icons";

const user = "Patrick";

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
      <S.Menu>
        <S.PageTitle>
          <Logo color={"#333333"} /> &nbsp; Books
        </S.PageTitle>
        <S.UserMenu>
          <S.User>Bem vindo, {user}</S.User>
          <Exit onClick={()=>console.log('cliquei')}/>
        </S.UserMenu>
      </S.Menu>
      <S.BooksContainer>
        {bookList &&
          bookList.data.map((book: Book) => {
            return <BookCard key={book.id} book={book} />;
          })}
      </S.BooksContainer>
    </S.Container>
  );
}
