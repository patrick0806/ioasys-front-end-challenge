import * as React from "react";
import * as S from "./Books.styles";
import { Book, BookList } from "../../types/book";
import { BookCard } from "../../components/BookCard/BookCard";
import { getBooks } from "../../services/getBooks";
import { Exit, Logo } from "../../assets/icons";
import { BookDetails } from "../../components/Book/Book";
import { useUserContext } from "../../context/UserContext";

export function BooksPage() {
  const [bookList, setBookList] = React.useState<BookList>();
  const [showBookModal, setShowBookModal] = React.useState(false);
  const [selectedBookId, setSelectedBookId] = React.useState("");
  const {user} = useUserContext();

  React.useEffect(() => {
    async function loadBooks() {
      const response = await getBooks();
      setBookList(response);
    }

    loadBooks();
  }, []);

  return (
    <S.Background>
      <S.Container>
        <S.Menu>
          <S.PageTitle>
            <Logo color={"#333333"} /> &nbsp; Books
          </S.PageTitle>
          <S.UserMenu>
            <S.User>Bem vindo, {user.name}</S.User>
            <Exit onClick={() => console.log("cliquei")} />
          </S.UserMenu>
        </S.Menu>
        <S.BooksContainer>
          {bookList &&
            bookList.data.map((book: Book) => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  setShowBookModal={setShowBookModal}
                  setSelectedBookId={setSelectedBookId}
                />
              );
            })}
        </S.BooksContainer>
        {selectedBookId && (
          <BookDetails
            bookId={selectedBookId}
            showBook={showBookModal}
            setShowBook={setShowBookModal}
          />
        )}
      </S.Container>
    </S.Background>
  );
}
