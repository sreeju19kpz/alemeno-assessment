import React, { useState } from "react";

import Rating from "@mui/material/Rating";

const PostReview = (props) => {
  const [tHeading, setTHeading] = useState("");
  const [tReview, setTReview] = useState("");
  const [value, setValue] = useState(0);
  const onPostReview = (e) => {
    e.preventDefault();
    if (!tHeading || !tReview) return;
    const uReview = {
      name: "sree",
      comment: tHeading,
      rating: value,
    };

    props.updateReview(uReview);
    setTHeading("");
    setTReview("");
    setValue(0);
    // const uComments = [...sComment, nComment];
  };

  return (
    <div className="default wid-100-p pad-20-px ali-ite-cnt">
      <div className="default max-wid-600-px wid-100-p pad-20-px bor-1-px-sol-bla">
        <form className="default gap-10-px" onSubmit={onPostReview}>
          <div className="default wid-115-px">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="default gap-10-px">
            <label htmlFor="heading">short comment</label>
            <textarea
              className="default wid-100-p hei-100-px bor-1-px-sol-bla pad-10-px out-lin-non tex-are-res-non"
              placeholder="type important headline"
              type="text"
              id="heading"
              value={tHeading}
              onChange={(e) => setTHeading(e.target.value)}
            />
          </div>
          <div className="default gap-10-px">
            <label htmlFor="heading">review</label>
            <textarea
              className="default wid-100-p hei-100-px bor-1-px-sol-bla pad-10-px out-lin-non tex-are-res-non"
              placeholder="type your review"
              type="text"
              id="heading"
              value={tReview}
              onChange={(e) => setTReview(e.target.value)}
            />
          </div>
          <div className="default wid-100-p ali-ite-fle-end">
            <div className="default wid-100-px pad-10-px bac-col-blu bor-rad-5-px">
              <button type="submit" className="default hei-100-p bac-col-non ">
                <div className="default cur-poi">
                  <span className="fon-col-whi">Post review</span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
