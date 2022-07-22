import React from "react";
import FooterBottemVideoCard from "./FooterBottemVideoCard";
import footerTop from "./footerTop.module.css";
import UpperFooterWedget from "./UpperFooterWedget";
import {FaArrowCircleRight} from "react-icons/fa";
function FooterTop() {
  return (
    <div className={footerTop.fot}>
      <div className={footerTop.TOP}>
        <div className="container" style={{borderBottom: "3px solid white"}}>
          <div className="row" style={{ alignItems: "center",marginBottom: "30px"}}>
            <div className="col-sm-2">
              <div className={footerTop.compnyInfo}>
                <h2>
                  <span>e</span> -shopper
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-sm-7 text-center" style={{ display: "flex" }}>
              <FooterBottemVideoCard
                img={require("./../../images/home/iframe1.png")}
                title="Circle of Hands"
                date="24 DEC 2014"
              />
              <FooterBottemVideoCard
                img={require("./../../images/home/iframe2.png")}
                title="Circle of Hands"
                date="24 DEC 2014"
              />
              <FooterBottemVideoCard
                img={require("./../../images/home/iframe3.png")}
                title="Circle of Hands"
                date="24 DEC 2014"
              />
              <FooterBottemVideoCard
                img={require("./../../images/home/iframe4.png")}
                title="Circle of Hands"
                date="24 DEC 2014"
              />
            </div>
            <div className="col-sm-3">
              <div className={footerTop.address}>
                <img src={require("./../../images/home/map.png")} alt="" />
                <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterWidget">
        <div className="container">
          <div className="row">
            <UpperFooterWedget
              Cla="col-sm-2"
              Title="Service"
              List={[
                "Online Help",
                "Contacr Us",
                "Order Status",
                "Change Location",
                "FAQ'S",
              ]}
            />
            <UpperFooterWedget
              Cla="col-sm-2"
              Title="Quick Shop"
              List={["T-Shirt", "Mens", "Women", "Gift Card", "Shoes"]}
            />
            <UpperFooterWedget
              Cla="col-sm-2"
              Title="Polices"
              List={[
                "Terms Of Use",
                "Privecy Policy",
                "Refund Policey",
                "Billing System",
                "Ticket System",
              ]}
            />
            <UpperFooterWedget
              Cla="col-sm-2"
              Title="About Shopper"
              List={[
                "Compney Information",
                "Careees",
                "Store Location",
                "Affillate Programe",
                "Copyright",
              ]}
            />
            <div className="col-sm-3 offset-sm-1">
              <div className="singleWidget">
                <h2 className={footerTop.h2}>About Shopper</h2>
                <form action="#" className={footerTop.searchForm}>
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default"><FaArrowCircleRight/></button>
					<p>Get the most recent updates from <br />our site and be updated your self...</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
