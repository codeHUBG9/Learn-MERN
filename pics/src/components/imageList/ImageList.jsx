import React, { Fragment } from "react";
import ImageShow from "../imageShow/ImageShow";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
const ImageList = () => {
  const { loading, results } = useSelector((state) => state.images);

  const renderedImages =
    results.length > 0 && !loading ? (
      results.map((image) => {
        return <ImageShow image={image} key={image} />;
      })
    ) : (
      <Loader />
    );
  return (
    <Fragment>
      <div>{renderedImages}</div>
    </Fragment>
  );
};
export default ImageList;
