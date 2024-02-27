import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ pageCount, setPage, paginationData, setPageCount }) => {
  setPageCount(
    Math.ceil(paginationData?.meta?.total / paginationData?.meta?.limit)
  );
  const handlePageClick = (data) => {
    setPage(data?.selected + 1);
  };
  return (
    <div>
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="< previous"
          disabledClassName="pointer-events-none opacity-50"
          containerClassName="flex items-center justify-center gap-4 pt-4"
          pageClassName="w-10 h-10 font-medium rounded-full border-2 dark:border-gray-800 overflow-hidden"
          pageLinkClassName="w-full h-full flex items-center justify-center focus:outline-none"
          activeClassName="text-white !border-primary dark:text-blue-300"
          activeLinkClassName="bg-primary dark:bg-blue-950"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default Pagination;
