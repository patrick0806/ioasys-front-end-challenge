import * as React from 'react';
import { Book, BookList } from '../../types/Book';
import { BookCard } from '../../Components/BookCard/BookCard';
import * as S from './Books.styles';
import { getBooks } from '../../services/books/bookService';
import { Exit, Logo } from '../../assets/icons';
import { useUserContext } from '../../context/UserContext';

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
            <Logo color={'#333333'} /> &nbsp; Books
          </S.PageTitle>
          <S.UserMenu>
            <S.User>Bem vindo, {user.name}</S.User>
            <Exit onClick={() => console.log('cliquei')} />
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
          <S.ButtonBackPage
            isDisabled={bookList?.page === 1}
            onClick={toBackPage}
          >
            {'<'}
          </S.ButtonBackPage>
          <S.PagesInfo>
            Página {bookList?.page} de {bookList?.totalPages.toFixed(0)}
          </S.PagesInfo>
          <S.ButtonNextPage
            isDisabled={bookList?.totalPages.toFixed(0) === bookList?.page}
            onClick={toNextPage}
          >
            {'>'}
          </S.ButtonNextPage>
        </S.PaginationContainer>
      </S.Container>
    </S.Background>
  );
}
