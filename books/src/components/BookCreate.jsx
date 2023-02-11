import "./bookCreate.scss";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
const BookCreate = ({ onCreate, handleOpenClose, onUpdate }) => {
  const initialBook = {
    title: "",
    author: "",
    totalPage: "",
    price: "",
    description: "",
  };
  const [available, setAvailable] = useState(true);
  const [book, setBook] = useState(initialBook);
  const { title, author, totalPage, price, description } = book;

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      author: author,
      available: available,
      totalPage: totalPage,
      price: price,
      description: description,
    };
    onCreate(newBook);
    console.log(newBook);
    // onUpdate(123, newBook);
    setBook(initialBook);
    setAvailable(true);
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "available") {
      setAvailable(available ? false : true);
    } else {
      setBook({ ...book, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='bookCreate'>
      <div className='title'>
        <div className='left'>
          <span>Add New Book</span>
        </div>
        <div className='right' onClick={() => handleOpenClose(false)}>
          <ClearIcon className='icon' />
        </div>
      </div>
      <div className='detailForm'>
        <div>
          <div className='inputBox'>
            <TextField
              id='book-title'
              label='Book-Title'
              variant='filled'
              size='small'
              className='input'
              name='title'
              value={title}
              onChange={onChangeHandler}
              inputProps={{ style: styles.textField }}
              InputLabelProps={{ style: styles.textFieldLabel }}
            />
          </div>
          <div className='inputBox'>
            <TextField
              id='author-name'
              label='Author-Name'
              variant='filled'
              size='small'
              className='input'
              name='author'
              value={author}
              onChange={onChangeHandler}
              inputProps={{ style: styles.textField }}
              InputLabelProps={{ style: styles.textFieldLabel }}
            />
          </div>
          <div className='inputBox'>
            <div className='inputPagePrice'>
              <div className='box'>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={available}
                        name='available'
                        onChange={onChangeHandler}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label='Available'
                  />
                </FormGroup>
              </div>
              <div className='box'>
                <TextField
                  id='total-page'
                  label='Total-Page'
                  variant='filled'
                  size='small'
                  className='input'
                  type='number'
                  name='totalPage'
                  value={totalPage}
                  onChange={onChangeHandler}
                  inputProps={{ style: styles.textField }}
                  InputLabelProps={{ style: styles.textFieldLabel }}
                />
              </div>
              <div className='box'>
                <TextField
                  id='price'
                  label='Price'
                  variant='filled'
                  size='small'
                  className='input'
                  type='number'
                  name='price'
                  value={price}
                  onChange={onChangeHandler}
                  inputProps={{ style: styles.textField }}
                  InputLabelProps={{ style: styles.textFieldLabel }}
                />
              </div>
            </div>
          </div>
          <div className='inputBox'>
            <TextField
              id='comment'
              label='Addition Comments'
              placeholder='comment ...'
              multiline
              variant='filled'
              className='mulInput'
              rows='3'
              name='description'
              value={description}
              onChange={onChangeHandler}
              inputProps={{ style: styles.textField }}
              InputLabelProps={{ style: styles.textFieldLabel }}
            />
          </div>
        </div>
      </div>
      <div className='footerButton'>
        <Button
          variant='contained'
          style={{
            ...styles.styleButton,
            backgroundColor: "#dd2c00",
            color: "#fff",
          }}
          onClick={submitHandler}>
          Save
        </Button>
        <Button
          variant='outlined'
          style={styles.styleButton}
          onClick={() => {
            setBook(initialBook);
            handleOpenClose(false);
          }}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

/**
 * Style the MUI components line RN-App
 */
const styles = {
  textField: {
    fontSize: 15,
  },
  textFieldLabel: {
    fontSize: 15,
  },
  styleButton: {
    color: "#dd2c00",
    outlineColor: "#dd2c00",
    borderColor: "#dd2c00",
    marginRight: 10,
    borderRadius: 2,
  },
};
export default BookCreate;
