import BookShow from "./BookShow";
import "./bookList.scss";
const BookList = ({ books, onDelete }) => {
  return (
    <div className='bookList'>
      {books &&
        books.map((book) => (
          <div className='newBook' key={book.id}>
            <BookShow book={book} onDelete={onDelete} />
          </div>
        ))}
    </div>
  );
};
export default BookList;
