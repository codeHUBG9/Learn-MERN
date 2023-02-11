import BookShow from "./BookShow";
import "./bookList.scss";
const BookList = ({ books, onDelete, onEditClick }) => {
	return (
		<div className='bookList'>
			{books &&
				books.map((book) => (
					<div className='newBook' key={book.id}>
						<BookShow
							book={book}
							onDelete={onDelete}
							onEditClick={onEditClick}
						/>
					</div>
				))}
		</div>
	);
};
export default BookList;
