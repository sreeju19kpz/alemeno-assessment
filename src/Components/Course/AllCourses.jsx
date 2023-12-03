import React from "react";
import useFetchCourses from "../CustomHooks/FetchAllCourses";
import SingleCourse from "./SingleCourse";

const AllCourses = () => {
  const { loading, faliled, data } = useFetchCourses();
  
  if (loading) return <></>;
  if (faliled) return <></>;
  return (
    <div className="default wid-100-p  ali-ite-cnt gap-30-px">
      {data &&
        data.map((item) => {
          return <SingleCourse data={item} />;
        })}
    </div>
  );
};

export default AllCourses;
