import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import LaunchIcon from "@mui/icons-material/Launch";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./home.scss";
const Home = () => {
	const [books, setBooks] = useState([]);
	const [open, setOpen] = useState(false);
	const [showText, setShowText] = useState(false);
	const [editFlag, setEditFlag] = useState(false);
	const [editBook, setEditBook] = useState([]);

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

	const fetchBooks = async () => {
		const response = await axios.get("http://127.0.0.1:3350/books/");
		setBooks(response.data);
	};
	useEffect(() => {
		fetchBooks();
	}, []);

	const onEditClick = async (id) => {
		const response = await axios.get(`http://127.0.0.1:3350/books/${id}`);
		setEditBook(response.data);
		setOpen(true);
		setEditFlag(true);
	};
	return (
		<div className='home'>
			<div className='main'>
				<div className='openForm' onClick={() => setOpen(true)}>
					{showText && !open && <span>Add Book</span>}
					<div onMouseEnter={() => setShowText(true)} className='openIcon'>
						<LaunchIcon className='icon' />
					</div>
				</div>
				<div className='bookListContainer'>
					<BookList
						books={books}
						onDelete={handleDelete}
						onEditClick={onEditClick}
					/>
				</div>
			</div>
			{open && (
				<div className='addBook'>
					<BookCreate
						onCreate={handleAdd}
						handleOpenClose={handleOpenClose}
						onUpdate={handleEdit}
						onEditingBook={{ editBook, editFlag }}
					/>
				</div>
			)}
		</div>
	);
};
export default Home;
