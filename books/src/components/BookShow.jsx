import { useEffect, useState } from "react";
import "./bookShow.scss";
const BookShow = ({ book, onDelete }) => {
  const [bgColor, setBgColor] = useState("#08c236");
  useEffect(() => {
    book.available ? setBgColor("#08c236") : setBgColor("#dd2c00");
  }, [book]);

  return (
    <div className='bookShow'>
      <div className='bookImage'>
        <div className='ImageDetail'>
          <div className='imgaeEdit'></div>
          <div className='picture' onClick={() => onDelete(book.id)}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEV9maJF3Jt_EixuSytfMc7Wen15HgEyg9qA&usqp=CAU'
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
            <span>${book.price}</span>
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
                marginRight: "1px",
                marginBottom: "5px",
              }}></div>
            <span>{book.available ? "Available" : "Not Available"}</span>
          </div>
          <div className='author'>
            <span>{book.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookShow;
