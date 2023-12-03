import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ data }) => {
  return (
    <div className="default pad-10-px max-wid-600-px wid-100-p ">
      <div className="default gap-30-px pad-20-px bor-1-px-sol-bla bor-rad-5-px">
        <div className="default wid-100-p gap-20-px">
          <div className="default wid-100-p hei-200-px ">
            {data.thumbnail && (
              <img
                src={data.thumbnail}
                alt=""
                className="wid-100-p hei-100-p bor-rad-top-lef-10-px  bor-rad-top-rig-10-px "
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
          <div className="default gap-20-px">
            <div className="default pad-rig-20-px pad-lef-20-px">
              <h1 className="default">{data.name}</h1>
            </div>
            <div className="default gap-10-px">
              <div className="default pad-rig-20-px pad-lef-20-px">
                <span className="fon-siz-13-px fon-col-bla-lig">
                  {data.duration}
                </span>
              </div>
              <div className="default pad-rig-20-px pad-lef-20-px">
                <span className="fon-siz-13-px fon-col-bla-lig">
                  {data.enrollmentStatus}
                </span>
              </div>
              <div className="default pad-rig-20-px pad-lef-20-px">
                <span className="fon-siz-13-px fon-col-bla-lig">
                  {data.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="default wid-100-p ali-ite-fle-end jus-con-cnt">
          <Link
            to={`/course/${data.id}`}
            className="default wid-80-px hei-30-px ali-ite-cnt jus-con-cnt pad-rig-20-px pad-lef-20-px bac-col-blu fon-col-whi bor-rad-5-px tex-dec-non "
          >
            <span className="default fon-siz-13-px lin-hei-2-px ">details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
