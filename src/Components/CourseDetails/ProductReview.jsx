import React from "react";
import { SingleRating } from "./SingleRatingComponent";

const ProductReview = ({ name, comment, rating }) => {
  return (
    <div className="default wid-100-p ali-ite-cnt  pad-20-px ">
      <div className="default wid-100-p max-wid-600-px  pad-20-px  ali-ite-fle-str bor-1-px-sol-bla ">
        <div className="default">
          <SingleRating ratings={rating} />
        </div>
        <div className="default">
          <strong className="">{name.toUpperCase()}</strong>
        </div>
        <div className="default">
          <span className="">{comment}</span>
        </div>
        <div className="default">
          <span className="default">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
