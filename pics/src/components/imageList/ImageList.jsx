import React, { Fragment } from "react";
import ImageShow from "../imageShow/ImageShow";
const ImageList = ({ data }) => {
  const renderedImage = data.map((image) => {
    return <ImageShow image={image} />;
  });
  return <Fragment>{renderedImage}</Fragment>;
};
export default ImageList;
