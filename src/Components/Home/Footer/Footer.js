import React from "react";
import "./Footer.css";
import img1 from "../../../images/food.png";
import img2 from "../../../images/happy.png";
import img3 from "../../../images/fmsg.png";
const Footer = () => {
  return (
    <section>
      <div className="subscribe-area pt-2">
        <div className="container box mt-3">
          <div className="row">
            <div className="col-md-8 col-xl-8 col-lg-8 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-area-left">
                <h2>
                  <span>Learn More about our</span>Free Vacations & Free Trips
                </h2>
              </div>
              <div className="subscribe-box">
                <form action="">
                  <input type="text" placeholder="Email" />
                  <button type="button"> Submit</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-right">
                <ul>
                  <li>
                    <img src={img1} alt="" />
                    <span>Free Food</span>
                  </li>
                  <li>
                    <img src={img2} alt="" />
                    <span>Free Happy Hours</span>
                  </li>
                  <li>
                    <img src={img3} alt="" />
                    <span>Free Massages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container1 box1 mt-3">
          <div className="row bottom">
            <div class="container">
              <div class="row">
              <div class="col-md-2 affliate box2 mt-5 mr-5">
                  <a href="/affiliates"> </a>
                </div>
                <div class="col-md-2 affliate box2 mt-5 mr-5">
                  <a href="/affiliates"> Affiliates </a>
                </div>
                <div class="col-md-2 affliate box2 mt-5 mr-5">
                  <a href="/affiliates"> </a>
                </div>
                <div class="col-md-4 contact mt-5 ml-5">
                <a href="/affiliates">Contact Us </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
