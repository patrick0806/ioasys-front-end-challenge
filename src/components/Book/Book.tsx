import * as React from "react";
import { QuotationMarks } from "../../assets/icons";
import { getBook } from "../../services/getBook";
import { Book } from "../../types/book";
import * as S from "./Book.styles";

type BookProps = {
  bookId: string;
  showBook: boolean;
};

export function BookDetails({ bookId, showBook }: BookProps) {
  const [book, setBook] = React.useState<Book>();
  const [isLoading, setIsLoading] = React.useState(true);
  console.log(bookId);

  React.useEffect(() => {
    async function loadBook() {
      const book = await getBook(bookId);
      setBook(book);
      setIsLoading(false);
    }

    loadBook();
  }, [showBook === true]);
  
  return (
    <S.Container showModal={showBook}>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && book && (
        <S.Modal>
          <S.BookCover>
            <img
              src={book.imageUrl}
              alt={book.title}
              width={240}
              height={351}
            />
          </S.BookCover>
          <S.FlexCollumn>
             <S.Title>{book.title}</S.Title>
            <S.Authors>{book.authors?.toString().replace(",", ", ")}</S.Authors>
            <S.InfoContainer>
              <S.InfoTitle>Informações</S.InfoTitle>

              <S.InfoLabelContainer>
                <S.InfoLabel>Páginas</S.InfoLabel>
                <S.Info>{book.pageCount} páginas</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>Editora</S.InfoLabel>
                <S.Info>{book.publisher}</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>Publicação</S.InfoLabel>
                <S.Info>{book.published}</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>Idioma</S.InfoLabel>
                <S.Info>{book.language}</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>Título Original</S.InfoLabel>
                <S.Info>{book.title}</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>ISBN-10</S.InfoLabel>
                <S.Info>{book.isbn10}</S.Info>
              </S.InfoLabelContainer>

              <S.InfoLabelContainer>
                <S.InfoLabel>ISBN-13</S.InfoLabel>
                <S.Info>{book.isbn13}</S.Info>
              </S.InfoLabelContainer>
            </S.InfoContainer>
            <S.ResumeContainer>
              <S.InfoTitle>Resenha da Editora</S.InfoTitle>
              <S.Resume>
                <QuotationMarks />
                {book.description}
              </S.Resume>
            </S.ResumeContainer>
          </S.FlexCollumn>
        </S.Modal>
      )}
    </S.Container>
  );
}
