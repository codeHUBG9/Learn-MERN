import React, { Fragment, useState } from "react";
import { searchImage } from "./utility/api";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";
const App = () => {
  const [imagesStore, setImagesStore] = useState([]);
  const handleSubmit = async (term) => {
    console.log("Do a search with :", term);
    const results = await searchImage(term);

    setImagesStore(results);
  };
  return (
    <Fragment>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList data={imagesStore} />
    </Fragment>
  );
};
export default App;
