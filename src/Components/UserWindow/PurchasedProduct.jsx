import React, { useEffect, useState } from "react";
import useFetchSingleCourse from "../CustomHooks/FetchSingleCourse";
import ProgerssBarF from "./ProgerssBar";
import SyllabusTick from "./SyllabusTick";

const PurchasedProduct = ({ item }) => {
  const { loading, faliled, data } = useFetchSingleCourse({ id: item });
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [inc, setInc] = useState(0);
  useEffect(() => {
    data &&
      data.syllabus.forEach((element) => {
        setTotal((prev) => prev + element.content.length);
      });
  }, [data]);
  useEffect(() => {
    total && setInc(Math.floor((1 / total) * 100) + 1);
  }, [total]);
  if (loading) return <></>;
  if (faliled) return <></>;
  return (
    <div className="default wid-100-p pad-20-px">
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
              {data.syllabus.map((item) => {
                return (
                  <SyllabusTick
                    item={item}
                    add={() => setCount((prev) => prev + 1)}
                    red={() => setCount((prev) => prev - 1)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="default wid-100-p ali-ite-fle-end jus-con-cnt">
          <ProgerssBarF inc={inc * count} />
        </div>
      </div>
    </div>
  );
};

export default PurchasedProduct;
