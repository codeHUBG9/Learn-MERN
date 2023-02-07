import { useState } from "react";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import LaunchIcon from "@mui/icons-material/Launch";
import "./home.scss";
import { color } from "@mui/system";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleAdd = (newBook) => {
    newBook = { id: 2213, ...newBook };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };
  const handleEdit = (id, modifiedBook) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, modifiedBook };
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
  const renderedColors = books.map((color, i) => {
    return <li key={i}>{color}</li>;
  });
  return (
    <div className='home'>
      <div className='main'>
        <div className='openForm' onClick={() => setOpen(true)}>
          {showText && !open && <span>Add Book</span>}
          <div onMouseEnter={() => setShowText(true)} className='openIcon'>
            <LaunchIcon className='icon' />
          </div>
        </div>
        <BookList books={books} />
      </div>
      {open && (
        <div className='addBook'>
          <BookCreate onCreate={handleAdd} handleOpenClose={handleOpenClose} />
        </div>
      )}
    </div>
  );
};
export default Home;
