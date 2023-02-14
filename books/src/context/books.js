import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const bookContext = createContext();

function Provider({ children }) {
	const [books, setBooks] = useState([]);
	const [open, setOpen] = useState(false);
	const [showText, setShowText] = useState(false);
	const [editFlag, setEditFlag] = useState(false);
	const [editBook, setEditBook] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get("http://127.0.0.1:3350/books/");
		setBooks(response.data);
	};

	const handleAdd = async (newBook) => {
		const newId = uuidv4(); // Unique Id
		newBook = { id: newId, ...newBook };
		const response = await axios.post("http://127.0.0.1:3350/books", newBook);
		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
	};
	const handleEdit = async (id, modifiedBook) => {
		const response = await axios.put(
			`http://127.0.0.1:3350/books/${id}`,
			modifiedBook
		);
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...response.data };
			}
			return book;
		});
		setBooks(updatedBooks);
		setEditFlag(false);
	};
	const handleDelete = async (id) => {
		await axios.delete(`http://127.0.0.1:3350/books/${id}`);
		const updatedBooks = books.filter((book) => {
			return book.id !== id;
		});
		setBooks(updatedBooks);
	};
	const handleOpenClose = (flag) => {
		setOpen(flag);
		setShowText(false);
	};

	const onEditClick = async (id) => {
		const response = await axios.get(`http://127.0.0.1:3350/books/${id}`);
		setEditBook(response.data);
		setOpen(true);
		setEditFlag(true);
	};
	const valueToShare = {
		fetchBooks: fetchBooks,
		onCreate: handleAdd,
		onDelete: handleDelete,
		handleOpenClose: handleOpenClose,
		onEditClick: onEditClick,
		onUpdate: handleEdit,
		open: open,
		showText: showText,
		editFlag: editFlag,
		editBook: editBook,
		setOpen: setOpen,
		setShowText: setShowText,
		books: books,
	};

	return (
		<bookContext.Provider value={valueToShare}>{children}</bookContext.Provider>
	);
}
export { Provider };
export default bookContext;
