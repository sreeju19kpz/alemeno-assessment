import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { purchaseItem } from "../Components/Feature/PurchaseSlice";
import useShowPanels from "../Components/CustomHooks/useShowPanels";
import PostReview from "../Components/CourseDetails/PostReview";
import ProductReview from "../Components/CourseDetails/ProductReview";
import { getProd } from "../Components/CustomHooks/api";
import { Box, CircularProgress } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import SyllabusItem from "../Components/CourseDetails/SyllabusItem";
import { ClockIcon, MapIcon, NoneIcon } from "../Components/Icons/Icons";
export function loader(id) {
  return defer({ course: getProd(id) });
}
const CourseDetails = () => {
  const data = useLoaderData();
  const [isPurchased, setIsPurchased] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isUserPostedReview, setIsUserPostedReview] = useState(false);
  const { purchasedItems } = useSelector((store) => store.purchase);
  const dispatch = useDispatch();
  const { currentState } = useShowPanels();
  const updateReview = (review) => {
    const uReviews = [...reviews, review];
    setReviews(uReviews);
  };

  function setRev(data) {
    setReviews(data.reviews);
  }
  function checkIsPurchased(id) {
    if (purchasedItems.length < 1) return;
    if (purchasedItems.find((item) => item.id === id)) {
      setIsPurchased(true);
    } else setIsPurchased(false);
  }

  function ReturnElements(data) {
    useEffect(() => {
      if (
        reviews.find((item) => (item.name.toLowerCase() === "sree") === true)
      ) {
        setIsUserPostedReview(true);
      } else setIsUserPostedReview(false);
    }, [data, reviews]);
    useEffect(() => {
      checkIsPurchased(data.id);
    }, [data, purchasedItems]);
    useEffect(() => {
      setRev(data);
    }, [data]);
    return (
      <>
        <div className="default mar-top-50-px pad-top-5-px">
          <section className="default wid-100-p">
            <div className="default wid-100-p ali-ite-cnt">
              <div className="default max-wid-1280-px wid-100-p ali-ite-cnt">
                <div className="default max-wid-1280-px wid-100-p hei-500-px ">
                  <img
                    src={data.thumbnail}
                    alt=""
                    className="wid-100-p hei-100-p obj-fit-cov "
                  />
                  <div className="default pos-abs pad-20-px wid-100-p hei-100-p">
                    <div className="default gap-30-px ali-ite-fle-str">
                      <span className="tex-ali-cnt fon-col-whi fon-siz-35-px fon-wei-700">
                        {data.name}
                      </span>
                      <div className="default ali-ite-fle-str gap-30-px">
                        <div className="default pad-10-px pad-lef-20-px gap-10-px fle-dir-row bor-rad-9999-px bac-col-gre-lig ">
                          <span className="tex-wra-no-wra fon-col-whi">by</span>
                          <span className="fon-col-whi fon-wei-700">
                            {data.instructor}
                          </span>
                        </div>
                        <div className="default gap-10-px pad-10-px pad-lef-20-px gap-10-px bor-rad-9999-px bac-col-gre-lig ">
                          <span className="fon-col-whi">
                            {data.description}
                          </span>
                        </div>
                        <div className="default pad-10-px pad-lef-20-px gap-10-px bor-rad-9999-px bac-col-gre-lig ">
                          <span className="fon-col-whi">{data.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="default pos-abs ali-ite-fle-end wid-100-p hei-100-p jus-con-fle-end">
                    <div className="default hei-100-px wid-200-px jus-con-cnt ali-ite-fle-end mar-rig-20-px">
                      <div
                        onClick={() => dispatch(purchaseItem({ id: data.id }))}
                        className="default pad-10-px pad-lef-20-px gap-10-px wid-100-px bor-rad-5-px bac-col-blu bac-sha-1 cur-poi "
                      >
                        {isPurchased ? (
                          <span className="fon-col-whi">purchased</span>
                        ) : (
                          <span className="fon-col-whi">Buy Now</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="default wid-100-p ali-ite-cnt pad-20-px">
                  <h1>Highlights</h1>
                </div>
                <div className="default  max-wid-1280-px wid-100-p pad-20-px">
                  <div className="default wid-100-p gap-20-px">
                    <div
                      className={`default wid-100-p dis-gri gri-aut-flo-row ${
                        currentState === "verylowWidth"
                          ? "gri-tem-col-rep-1"
                          : currentState === "lowWidth"
                          ? "gri-tem-col-rep-2"
                          : "gri-tem-col-rep-3"
                      } gap-50-px`}
                    >
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px  fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <ClockIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              {data.duration}
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <MapIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              {data.location}
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px  fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <NoneIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              Lorem ipsum
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px  fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <NoneIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              Lorem ipsum
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px  fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <NoneIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              Lorem ipsum
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="default ali-ite-cnt jus-con-cnt">
                        <div className="default fle-dir-row gap-30-px  fle-dir-row ali-ite-cnt">
                          <div className="default wid-22-px hei-22-px">
                            <NoneIcon />
                          </div>
                          <div className="default gap-5-px">
                            <span className="fon-siz-17-px fon-col-bla-lig-2 fon-wei-500">
                              Lorem ipsum
                            </span>
                            <span className="fon-col-bla-lig">
                              Lorem ipsum dolor sit amet
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="default wid-100-p ali-ite-cnt gap-10-px">
                      <div className="default fle-dir-row gap-10-px mar-top-50-px">
                        <span className="tex-wra-no-wra fon-siz-17-px">
                          schedule :
                        </span>
                        <span className="fon-siz-17-px">{data.schedule}</span>
                      </div>
                      <div className="default fle-dir-row gap-10-px">
                        <span className="tex-wra-no-wra fon-siz-17-px">
                          prerequisites :
                        </span>
                        <span className="fon-siz-17-px">
                          {data.prerequisites}
                        </span>
                      </div>
                    </div>
                    <div className="default wid-100-p ali-ite-cnt">
                      <h1>syllabus</h1>
                    </div>
                    <div className="default gap-20-px wid-100-p ali-ite-cnt">
                      {data.syllabus.map((item) => {
                        return <SyllabusItem item={item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="default wid-100-p ali-ite-cnt">
            <div className="default max-wid-1280-px wid-100-p">
              <div className="default wid-100-p ali-ite-cnt pad-20-px">
                <h1>Reviews</h1>
              </div>
              <>
                {isPurchased && !isUserPostedReview ? (
                  <div className="default wid-100-p">
                    <div className="default wid-100-p">
                      {<PostReview updateReview={updateReview} />}
                    </div>
                  </div>
                ) : isPurchased && isUserPostedReview ? (
                  <></>
                ) : (
                  <div className="default wid-100-p ali-ite-cnt pad-20-px">
                    <div className="default max-wid-600-px wid-100-p ali-ite-cnt hei-100-px jus-con-cnt bor-1-px-sol-bla ">
                      <span>buy this item to post a review</span>
                    </div>
                  </div>
                )}
                <div className="default">
                  {reviews.length > 0 ? (
                    reviews.map((item) => {
                      return <ProductReview key={uuidv4()} {...item} />;
                    })
                  ) : (
                    <>
                      <div className="default wid-100-p ali-ite-cnt pad-20-px">
                        <div className="default max-wid-600-px wid-100-p ali-ite-cnt hei-100-px jus-con-cnt bor-1-px-sol-bla">
                          <span className="">No reviews yet</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <Suspense
        fallback={
          <div className="">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        }
      >
        <Await resolve={data.course}>{ReturnElements}</Await>
      </Suspense>
    </div>
  );
};

export default CourseDetails;
