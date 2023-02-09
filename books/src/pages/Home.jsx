import { useState, useId } from "react";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import LaunchIcon from "@mui/icons-material/Launch";
import { v4 as uuidv4 } from "uuid";
import "./home.scss";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const handleAdd = (newBook) => {
    /**
     *  const newId = uuidv4(); // Unique Id
     */
    const newId = Math.round(Math.random() * 999);
    newBook = { id: newId, ...newBook };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };
  const handleEdit = (id, modifiedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...modifiedBook };
      }
      return book;
    });

    setBooks(updatedBooks);
  };
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const handleOpenClose = (flag) => {
    setOpen(flag);
    setShowText(false);
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
          <BookList books={books} />
        </div>
      </div>
      {open && (
        <div className='addBook'>
          <BookCreate
            onCreate={handleAdd}
            handleOpenClose={handleOpenClose}
            onUpdate={handleEdit}
          />
        </div>
      )}
    </div>
  );
};
export default Home;
