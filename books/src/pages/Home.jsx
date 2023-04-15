import { useEffect } from "react";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import LaunchIcon from "@mui/icons-material/Launch";
import { useBooksContext } from "../hooks/use-books-context";
import "./home.scss";
const Home = () => {
	const { fetchBooks, open, showText, setOpen, setShowText } =
		useBooksContext();

	useEffect(() => {
		fetchBooks();
	}, []);

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
					<BookList />
				</div>
			</div>
			{open && (
				<div className='addBook'>
					<BookCreate />
				</div>
			)}
		</div>
	);
};
export default Home;
