import { Fragment } from "react";
import "./imageShow.scss";
const ImageShow = ({ image }) => {
  const { id, alt_description, description, urls } = image;

  return (
    <Fragment>
      <div className='imageShow'>
        <div className='image'>
          <img
            src={urls.small}
            alt={alt_description}
            className='currentImage'
          />
          <span>{alt_description}</span>
        </div>
      </div>
    </Fragment>
  );
};
export default ImageShow;
