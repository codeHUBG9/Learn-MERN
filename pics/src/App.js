import React, { Fragment, useEffect, useState } from "react";
// import searchImage from "./api";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";
import { useDispatch, useSelector } from "react-redux";
import { searchImage } from "./redux/actions/GetImages";
const App = () => {
  const [imagesStore, setImagesStore] = useState([]);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.images);

  /**
   * Code Implementation of API
   */
  /*
  const handleSubmit = async (term) => {
    console.log("Do a search with :", term);
    const results = await searchImage(term);

    setImagesStore(results);
  }; 
  */

  /**
   * Code Implementing logic with redux
   */
  const handleSubmit = (term) => {
    dispatch(searchImage(term));
  };
  useEffect(() => {
    setImagesStore(data);
  }, [dispatch, error]);
  return (
    <Fragment>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
      {/* <ImageList data={imagesStore} /> */}
    </Fragment>
  );
};
export default App;
