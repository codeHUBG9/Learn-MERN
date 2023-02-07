const BookList = ({ books }) => {
  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title},{book.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookList;
