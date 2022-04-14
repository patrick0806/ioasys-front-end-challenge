import * as S from "./BookCard.styles";
import { BookType } from "../../types/book";

type BookCardProps = {
    book: BookType;
}

export function BookCard({book}: BookCardProps) {
  return (
      <S.Container>
      <S.BookImage src={book.imageUrl} />
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
