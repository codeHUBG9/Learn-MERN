import { Fragment } from "react";

const ImageShow = ({ image }) => {
  const {
    id,
    created_at,
    alt_description,
    description,
    links,
    tags,
    urls,
    user,
  } = image;

  return (
    <Fragment>
      <div>
        <img src={urls.small} alt={alt_description} />
        <p>{alt_description}</p>
      </div>
    </Fragment>
  );
};
export default ImageShow;
