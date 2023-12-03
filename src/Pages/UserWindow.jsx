import React from "react";
import { useSelector } from "react-redux";
import PurchasedProduct from "../Components/UserWindow/PurchasedProduct";
import useShowPanels from "../Components/CustomHooks/useShowPanels";
const UserWindow = () => {
  const { purchasedItems } = useSelector((store) => store.purchase);
  const { currentState } = useShowPanels();
  return (
    <div className="default wid-100-p ali-ite-cnt hei-100-p">
      <div className="default mar-top-50-px wid-100-p fle-dir-row hei-100-p  max-wid-1280-px">
        {currentState !== "verylowWidth" && currentState !== "lowWidth" && (
          <div className="default hei-100-p ">
            <div
              className={`default ${
                currentState === "mediumWidth" ? "wid-150-px" : "wid-250-px"
              }  hei-100-p `}
            >
              <div className="default pos-fix hei-100-p  bor-1-px-sol-bla">
                <div
                  className={`default ${
                    currentState === "mediumWidth" ? "wid-150-px" : "wid-250-px"
                  }  hei-100-p`}
                >
                  <div className="default wid-100-p ali-ite-cnt pad-20-px mar-top-50-px">
                    <div className="default wid-50-px hei-50-px">
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256"
                        alt=""
                      />
                    </div>
                    <div>
                      <span>username</span>
                    </div>
                    <div>
                      <span>email.@email.com</span>
                    </div>
                  </div>
                  <div className="default wid-100-p pad-20-px gap-30-px mar-top-50-px">
                    <div className="default wid-100-p hei-50-px jus-con-cnt ali-ite=cnt pad-lef-20-px bor-top-1-px-sol-bla bor-bot-1-px-sol-bla cur-poi">
                      <span className="fon-siz-18-px fon-wei-500">profile</span>
                    </div>
                    <div className="default wid-100-p hei-50-px jus-con-cnt ali-ite=cnt pad-lef-20-px bor-top-1-px-sol-bla bor-bot-1-px-sol-bla cur-poi">
                      <span className="fon-siz-18-px fon-wei-500">
                        Dashboard
                      </span>
                    </div>
                    <div className="default wid-100-p hei-50-px jus-con-cnt ali-ite=cnt pad-lef-20-px bor-top-1-px-sol-bla bor-bot-1-px-sol-bla cur-poi">
                      <span className="fon-siz-18-px fon-wei-500">Courses</span>
                    </div>
                    <div className="default wid-100-p hei-50-px jus-con-cnt ali-ite=cnt pad-lef-20-px bor-top-1-px-sol-bla bor-bot-1-px-sol-bla cur-poi">
                      <span className="fon-siz-18-px fon-wei-500">
                        settings
                      </span>
                    </div>
                    <div className="default wid-100-p hei-50-px jus-con-cnt ali-ite=cnt pad-lef-20-px bor-top-1-px-sol-bla bor-bot-1-px-sol-bla cur-poi">
                      <span className="fon-siz-18-px fon-wei-500">
                        Certificates
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`default max-wid-900-px fle-gro-1 ${
            currentState === "verylowWidth" ? "wid-100-p" : "pad-20-px "
          }`}
        >
          <div className="default wid-100-p">
            {purchasedItems &&
              purchasedItems.map((item) => {
                return <PurchasedProduct item={item.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWindow;
