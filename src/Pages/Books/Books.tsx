import * as React from 'react';
import { Book, BookList } from '../../types/Book';
import { BookCard } from '../../Components/BookCard/BookCard';
import * as S from './Books.styles';
import { getBooks } from '../../services/books/bookService';
import { Exit, Logo, NextPageButton, PrevPageButton } from '../../assets/icons';
import { useUserContext } from '../../context/UserContext';
import { SignOut } from '../../services/user/userService';
import { BookDetails } from '../../Components/Book/Book';

export function BooksPage() {
  const [bookList, setBookList] = React.useState<BookList>();
  const [showBookModal, setShowBookModal] = React.useState(false);
  const [selectedBookId, setSelectedBookId] = React.useState('');
  const { user } = useUserContext();

  React.useEffect(() => {
    async function loadBooks() {
      const response = await getBooks();
      setBookList(response);
    }

    loadBooks();
  }, []);

  async function toNextPage() {
    if (!bookList) {
      return;
    }
    if (bookList.page < bookList.totalPages) {
      const response = await getBooks(bookList.page + 1);
      setBookList(response);
    }
  }

  async function toBackPage() {
    if (!bookList) {
      return;
    }

    if (bookList.page > 1) {
      const response = await getBooks(bookList.page - 1);
      setBookList(response);
    }
  }

  return (
    <S.Background>
      <S.Container>
        <S.Menu>
          <S.PageTitle>
            <Logo color={'#333333'} /> Books
          </S.PageTitle>
          <S.UserMenu>
            <S.User>Bem vindo, {user?.name}</S.User>
            <div onClick={SignOut}>
              <Exit />
            </div>
          </S.UserMenu>
        </S.Menu>
        <S.BooksContainer>
          {bookList &&
            bookList.data.map((book: Book) => (
              <BookCard
                key={book.id}
                book={book}
                setShowBookModal={setShowBookModal}
                setSelectedBookId={setSelectedBookId}
              />
            ))}
        </S.BooksContainer>
        <S.PaginationContainer>
          <S.ButtonBackPage onClick={toBackPage}>
            <PrevPageButton
              opacity={
                bookList?.page === 1 ? 'rgba(51, 51, 51, 0.2)' : '#333333'
              }
            />
          </S.ButtonBackPage>
          <S.PagesInfo>
            Página {bookList?.page} de {bookList?.totalPages.toFixed(0)}
          </S.PagesInfo>
          <S.ButtonNextPage onClick={toNextPage}>
            <NextPageButton
              opacity={
                bookList?.page === Math.floor(bookList?.totalPages || 0)
                  ? 'rgba(51, 51, 51, 0.2)'
                  : '#333333'
              }
            />
          </S.ButtonNextPage>
        </S.PaginationContainer>
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
