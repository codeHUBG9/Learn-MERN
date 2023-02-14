import BookShow from "./BookShow";
import "./bookList.scss";
import { useBooksContext } from "../hooks/use-books-context";
const BookList = () => {
	const { books } = useBooksContext();
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
