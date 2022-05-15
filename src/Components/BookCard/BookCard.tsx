import * as React from 'react';
import * as S from './BookCard.styles';
import { Book } from '../../types/book';

type BookCardProps = {
  book: Book;
  setShowBookModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedBookId: React.Dispatch<React.SetStateAction<string>>;
};

export function BookCard({
  book,
  setShowBookModal,
  setSelectedBookId,
}: BookCardProps) {
  const handleShowBookModal = () => {
    setShowBookModal((prevState) => !prevState), setSelectedBookId(book.id);
  };
  console.log(book);
  return (
    <S.Container onClick={() => handleShowBookModal}>
      <S.BookImage src={book.imageUrl} alt={book.title} />
      <S.BookInfosContainer>
        <S.BookTitle>{book.title}</S.BookTitle>
        <S.Authors>{book.authors}</S.Authors>
        <S.info>{book.pageCount} páginas</S.info>
        <S.info>{book.publisher}</S.info>
        <S.info>Publícado em {book.published}</S.info>
      </S.BookInfosContainer>
    </S.Container>
  );
}
