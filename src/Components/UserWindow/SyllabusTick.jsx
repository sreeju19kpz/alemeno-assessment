import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "../Icons/Icons";
import CheckBox from "./CheckBox";

const SyllabusTick = ({ item, add, red }) => {
  console.log(item);
  const [state, setState] = useState(false);
  return (
    <div className="default pad-lef-20-px pad-rig-20-px max-wid-600-px wid-100-p bor-1-px-sol-bla ">
      <div className="default fle-dir-row pad-20-px bor-bot-1-px-sol-bla jus-con-spc-btw">
        <div className="default gap-10-px ">
          <div className="default gap-5-px fle-dir-row">
            <span className="tex-wra-no-wra fon-siz-17-px fon-wei-500">
              week
            </span>
            <span className="fon-siz-17-px fon-wei-500">{item.week}</span>
          </div>
          <div className="default fle-dir-row gap-5-px">
            <span className="fon-col-bla-lig">{item.topic.length}</span>
            <span className="fon-col-bla-lig">topic</span>
          </div>
        </div>
        <div
          onClick={() => setState(!state)}
          className="default wid-30-px hei-30-px"
        >
          <span className="wid-22-px hei-22-px cur-poi">
            {state ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </span>
        </div>
      </div>
      {state && (
        <div className="default pad-20-px gap-20-px">
          <div className="default fle-dir-row gap-10-px">
            <span className="tex-wra-no-wra">topic :</span>
            <span>{item.topic}</span>
          </div>
          <div className="default   fle-dir-row gap-10-px">
            <div>
              {item.content.map((item) => {
                return (
                  <div>
                    <CheckBox ele={item} add={add} reduce={red} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SyllabusTick;
