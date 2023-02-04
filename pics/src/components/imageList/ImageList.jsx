import React, { useState } from "react";
import ImageShow from "../imageShow/ImageShow";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import Pagination from "react-js-pagination";
import "./imageList.scss";
import "../pagination/pagination.scss";
const ImageList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, results, total, total_pages, per_page } = useSelector(
    (state) => state.images
  );
  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className='imageContainer'>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <section id='products' className='container mt-5'>
              <div className='row'>
                {results &&
                  results.map((image) => (
                    <ImageShow key={image.id} image={image} />
                  ))}
              </div>
            </section>
            {per_page <= total_pages && (
              <div className='d-flex justify-content-center mt-5 ddd'>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={per_page}
                  totalItemsCount={total_pages}
                  onChange={setCurrentPageNo}
                  nextPageText={"Next"}
                  prevPageText={"Prev"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass='page-item'
                  linkClass='page-link'
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default ImageList;
