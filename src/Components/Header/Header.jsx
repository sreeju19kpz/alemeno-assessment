import React from "react";
import { Link } from "react-router-dom";
import useShowPanels from "../CustomHooks/useShowPanels";

const Header = () => {
  const { currentState } = useShowPanels();
  return (
    <header className="default wid-100-p z-ind-1">
      <div className="default wid-100-p pos-fix hei-50-px  bac-col-whi">
        <div className="default wid-100-p ali-ite-cnt bor-bot-1-px-sol-bla ">
          <div className="default max-wid-1280-px wid-100-p fle-dir-row jus-con-spc-btw hei-100-p hei-50-px">
            <Link
              to="/"
              className="default max-wid-200-px wid-100-p hei-100-p ali-ite-cnt jus-con-cnt pad-lef-20-px ali-ite-fle-str tex-dec-non"
            >
              <span className="wid-50-px fon-siz-24-px">logo</span>
            </Link>
            <div className="default wid-100-px wid-100-p hei-100-p fle-dir-row jus-con-fle-end  pad-lef-20-px">
              <Link
                to="/profile/1"
                className="default wid-30-px ali-ite-cnt jus-con-cnt tex-dec-non"
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256"
                  alt=""
                  className="wid-100-p"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
