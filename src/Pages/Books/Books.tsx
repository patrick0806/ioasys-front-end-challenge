import * as React from 'react';
import { Book } from '../../types/Book';
import { BookCard } from '../../Components/BookCard/BookCard';

export function Books() {
  const [showBookModal, setShowBookModal] = React.useState(false);
  const [selectedBookId, setSelectedBookId] = React.useState('');
  const book: Book = {
    authors: ['Gúbio Moreira', 'Júlio César Macedo'],
    title: 'A veniam sint',
    description:
      'Sed nemo nihil voluptas. Ut et dolores et doloribus debitis nesciunt cumque voluptatem. Tempore doloribus placeat sit assumenda odit. Architecto distinctio qui cupiditate tempora et.\n \rTotam cumque voluptatum iusto tempore nihil repudiandae. Beatae quaerat ex illo natus voluptas et dignissimos. Vitae deleniti quas est sequi. Incidunt natus consequuntur tempora. Eum optio error repudiandae ab a porro iusto.',
    pageCount: 1538,
    category: 'Jornais',
    imageUrl: 'https://d2drtqy2ezsot0.cloudfront.net/Book-7.jpg',
    language: 'Português',
    isbn10: '3238924721',
    isbn13: '683-3238924721',
    publisher: 'Nogueira - Barros',
    published: 2010,
    id: '61c9c28fcc498b5c08845dd0',
  };

  return (
    <BookCard
      book={book}
      setShowBookModal={setShowBookModal}
      setSelectedBookId={setSelectedBookId}
    />
  );
}
