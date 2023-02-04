import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Pagi_nation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, results, total, total_pages, per_page } = useSelector(
    (state) => state.images
  );
  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div>
      {" "}
      {per_page <= total_pages && (
        <div className='d-flex justify-content-center mt-5'>
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
    </div>
  );
};

export default Pagi_nation;
