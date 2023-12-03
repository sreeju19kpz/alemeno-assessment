import React from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const controllInput = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("course");
    if (!name) return;
    navigate({
      pathname: "/search",
      search: `course=${name}`,
    });
  };
  return (
    <>
      <div className="default fle-gro-1 max-wid-400-px ">
        <div className="default wid-100-p fle-dir-row hei-50-px ali-ite-cnt">
          <form
            onSubmit={controllInput}
            className="default bor-wid-1px wid-100-p pad-10-px"
          >
            <label className="default fle-gro-1 flex fle-dir-row gap-10-px">
              <div className="default flex hei-33-px wid-33-px jus-con-cnt ali-ite-cnt pad-rig-20px pad-lef-20px ">
                <span className="default hei-22-px wid-22-px ">
                  <svg viewBox="-0.48 -0.48 24.96 24.96" fill="none">
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>
              <div className="default flex fle-gro-1 mar-rig-10px mar-lef-10px hei-100-p hei-22-px">
                <input
                  type="text"
                  placeholder="course"
                  className="default flex fle-gro-1 wid-100-p bor-sty-non bac-col-non out-lin-non   hei-100-p "
                  name="course"
                />
              </div>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
