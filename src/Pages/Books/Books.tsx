import * as React from 'react';
import { Book, BookList } from '../../types/Book';
import { BookCard } from '../../Components/BookCard/BookCard';
import * as S from './Books.styles';
import { getBooks } from '../../services/books/bookService';
import { Exit, Logo } from '../../assets/icons';

export function BooksPage() {
  const [bookList, setBookList] = React.useState<BookList>();
  const [showBookModal, setShowBookModal] = React.useState(false);
  const [selectedBookId, setSelectedBookId] = React.useState('');

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
            <Logo color={'#333333'} /> &nbsp; Books
          </S.PageTitle>
          <S.UserMenu>
            <S.User>Bem vindo, user.name</S.User>
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
      </S.Container>
    </S.Background>
  );
}
