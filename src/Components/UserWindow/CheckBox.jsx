import React, { useEffect, useState } from "react";

const CheckBox = ({ ele, add, reduce }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {}, []);
  const Check = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      reduce();
    } else add();
  };
  return (
    <div className="wid-100-p ">
      <form className="wid-100-p">
        <label
          htmlFor={ele}
          className="default fle-dir-row wid-100-p gap-10-px"
        >
          <div>
            <input
              type="checkbox"
              name={ele}
              id={ele}
              checked={isChecked}
              onClick={Check}
            />
          </div>
          <div>
            <span> {ele}</span>
          </div>
        </label>
      </form>
    </div>
  );
};

export default CheckBox;
