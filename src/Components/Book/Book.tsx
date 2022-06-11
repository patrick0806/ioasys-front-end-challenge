import * as React from 'react';
import { QuotationMarks } from '../../assets/icons';
import { getBook } from '../../services/books/bookService';
import { Book } from '../../types/Book';
import * as S from './Book.styles';
import ImageDefault from '../../assets/images/book-default.png';

type BookProps = {
  bookId: string;
  showBook: boolean;
  setShowBook: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BookDetails({ bookId, showBook, setShowBook }: BookProps) {
  const [book, setBook] = React.useState<Book>();
  const [isLoading, setIsLoading] = React.useState(true);

  async function loadBook() {
    const book = await getBook(bookId);
    setBook(book);
    setIsLoading(false);
  }

  React.useEffect(() => {
    loadBook();
  }, [showBook === true]);

  const bookImage = book?.imageUrl ? book.imageUrl : ImageDefault;
  return (
    <S.Container
      showModal={showBook}
      onClick={() => {
        setShowBook(false);
      }}
    >
      {isLoading && <p>Carregando...</p>}
      {!isLoading && book && (
        <>
          <S.CloseModalButtonContainer>
            <S.CloseModalButton>X</S.CloseModalButton>
          </S.CloseModalButtonContainer>
          <S.Modal>
            <S.BookImage src={bookImage} alt={book.title} />
            <S.BookDetails>
              <S.Title>{book.title}</S.Title>
              <S.Authors>
                {book.authors?.toString().replace(',', ', ')}
              </S.Authors>
              <S.Details>
                <S.InfoTitle>Informações</S.InfoTitle>
                <div />

                <S.InfoLabel>Páginas</S.InfoLabel>
                <S.Info>{book.pageCount} páginas</S.Info>

                <S.InfoLabel>Editora</S.InfoLabel>
                <S.Info>{book.publisher}</S.Info>

                <S.InfoLabel>Publicação</S.InfoLabel>
                <S.Info>{book.published}</S.Info>

                <S.InfoLabel>Idioma</S.InfoLabel>
                <S.Info>{book.language}</S.Info>

                <S.InfoLabel>Título Original</S.InfoLabel>
                <S.Info>{book.title}</S.Info>

                <S.InfoLabel>ISBN-10</S.InfoLabel>
                <S.Info>{book.isbn10}</S.Info>

                <S.InfoLabel>ISBN-13</S.InfoLabel>
                <S.Info>{book.isbn13}</S.Info>
              </S.Details>
              <S.ResumeContainer>
                <S.InfoTitle>Resenha da Editora</S.InfoTitle>
                <S.Resume>
                  <QuotationMarks />
                  {book.description}
                </S.Resume>
              </S.ResumeContainer>
            </S.BookDetails>
          </S.Modal>
        </>
      )}
    </S.Container>
  );
}
