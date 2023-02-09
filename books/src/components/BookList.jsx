import BookShow from "./BookShow";
import "./bookList.scss";
const BookList = ({ books }) => {
  const rednderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return (
    <div className='bookList'>
      {books &&
        books.map((book) => (
          <div className='newBook' key={book.id}>
            <BookShow book={book} />
          </div>
        ))}
    </div>
  );
};
export default BookList;
