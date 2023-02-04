import React, { Fragment } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";
import { useDispatch } from "react-redux";
import { searchImage } from "./redux/actions/GetImages";
const App = () => {
  const dispatch = useDispatch();
  const handleSubmit = (term) => {
    dispatch(searchImage(term));
  };

  return (
    <Fragment>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </Fragment>
  );
};
export default App;
