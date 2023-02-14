import { useEffect, useState } from "react";
import "./bookShow.scss";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import { useBooksContext } from "../hooks/use-books-context";
const BookShow = ({ book }) => {
	const { onDelete, onEditClick } = useBooksContext();
	const [bgColor, setBgColor] = useState("#08c236");
	useEffect(() => {
		book.available ? setBgColor("#08c236") : setBgColor("#dd2c00");
	}, [book]);

	return (
		<div className='bookShow'>
			<div className='bookImage'>
				<div className='ImageDetail'>
					<div className='imgaeEdit'>
						<span onClick={() => onEditClick(book.id)}>
							<EditIcon className='icon' />
						</span>
						<span onClick={() => onDelete(book.id)}>
							<ClearIcon className='icon' />
						</span>
					</div>
					<div className='picture'>
						<img
							src={`https://picsum.photos/seed/${book.id}/300/200`}
							alt='book'
						/>
					</div>
				</div>
			</div>
			<div className='bookDetail'>
				<div className='bookTitle'>
					<div className='title'>
						<span>{book.title}</span>
					</div>
					<div className='price'>
						{book.price && <span>${book.price}</span>}
					</div>
				</div>
				<div className='bookAuthor'>
					<div className='available'>
						<div
							style={{
								width: "8px",
								height: "8px",
								background: `${bgColor}`,
								borderRadius: "50%",
								marginRight: "2px",
							}}></div>
						<span>{book.available ? "Available" : "Not Available"}</span>
					</div>
					<div className='author'>
						{book.author && <span>By-{book.author}</span>}
					</div>
				</div>
			</div>
		</div>
	);
};
export default BookShow;
