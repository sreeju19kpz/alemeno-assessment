import React from "react";
import AllCourses from "../Components/Course/AllCourses";
import Searchbar from "../Components/Course/Searchbar";
import Searchbar2 from "../Components/Course/Searchbar2";

const Courses = () => {
  return (
    <div className="default wid-100-p hei-100-p mar-top-50-px">
      <div className="default wid-100-p ">
        <div className="default ali-ite-cnt wid-100-p">
          <div className="default max-wid-600-px wid-100-p fle-dir-row bor-rad-9999-px  bac-col-gre-lig">
            <Searchbar />
            <Searchbar2 />
          </div>
        </div>
        <AllCourses />
      </div>
    </div>
  );
};

export default Courses;
