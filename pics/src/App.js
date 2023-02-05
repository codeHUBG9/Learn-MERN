import React, { Fragment, useEffect, useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";
import { useDispatch } from "react-redux";
import { searchImage } from "./redux/actions/GetImages";
import "./app.scss";
import Footer from "./components/footer/Footer";
import { searchStore } from "./data/RandomImageSearch";
import Pagi_nation from "./components/pagination/Pagi_nation";

const App = () => {
  const randomSearch =
    searchStore[Math.floor(Math.random() * searchStore.length)];

  const [searchedTxt, setSearchedTxt] = useState(randomSearch);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const dispatch = useDispatch();
  const handleSubmit = (term) => {
    setSearchedTxt(term);
  };
  const handlePage = (currentPage = 1) => {
    setCurrentPageNo(currentPage);
  };

  useEffect(() => {
    dispatch(searchImage(searchedTxt, currentPageNo));
  }, [searchedTxt, currentPageNo, dispatch]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <div className='app'>
        <div className='main-page'>
          <ImageList onChangePageNo={handlePage} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
