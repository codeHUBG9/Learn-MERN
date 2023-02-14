import BookShow from "./BookShow";
import "./bookList.scss";
import bookContext from "../context/books";
import { useContext } from "react";
const BookList = () => {
	const { books } = useContext(bookContext);
	return (
		<>
			<div className='bookList'>
				{books &&
					books.map((book) => (
						<div className='newBook' key={book.id}>
							<BookShow book={book} />
						</div>
					))}
			</div>
		</>
	);
};
export default BookList;
