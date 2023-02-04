import React, { useState } from "react";
import "./searchBar.scss";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='left'>
          <div className='company-name'>
            <div className='company-name-logo'>
              <img src='/images/company1.svg' alt='' />
            </div>
            <span className='company-name-text'>PICS-HUB</span>
          </div>
        </div>
        <div className='center'>
          <form onSubmit={submitHandler} className='search'>
            <input
              type='text'
              placeholder='Search...'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </form>
        </div>
        <div className='right'>
          <div className='items'>
            <div className='item'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU'
                alt=''
                className='avatar'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
