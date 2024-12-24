import React, { useEffect, useState } from "react";
import { details } from "../assets/data/Testimonial";
import { TestimonialCards } from "../components/Atoms";
import ReactPaginate from "react-paginate";

const Testimonials = () => {
  return (
    <div className=" pb-5 mx-7 my-10 lg:px-16">
      <div
        className="mx-auto text-center flex flex-col items-center 
            w-full 
            md:w-8/12
            lg:px-16
            "
      >
        <span
          className="block font-medium my-3
              text-2xl md:text-3xl"
        >
          We Care About Our Customers Experience Too
        </span>
      </div>
      <PaginatedItems itemsPerPage={12} />
    </div>
  );
};

const DetailsComponent = ({ detailsData }) => (
  <div className="detail w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
    {detailsData &&
      detailsData.map((detail, index) => (
        <div key={index} className="detail">
          {/* <img src={detail.img} alt={detail.title} className="person-image" />
        <h3>{detail.title}</h3>
        <p>{detail.about}</p>
        <p>{detail.content}</p> */}
          <TestimonialCards
            src={detail.img}
            title={detail.title}
            about={detail.about}
            content={detail.content}
            flag={detail.flag}
          />
        </div>
      ))}
  </div>
);

export const PaginatedItems = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(details.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(details?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % details?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <DetailsComponent detailsData={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Testimonials;
