import React from "react";
import Header from "../Home/Header/Header";
import "./Affiliates.css";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic1.png";
import img1 from "../../images/download.png";

import img2 from "../../images/40e2.png";
import img3 from "../../images/174855.png";

import { NavLink } from "react-bootstrap";
const Affiliates = () => {
  const style1 = {
    textAlign: "center",
    color: "black",
    fontSize: "50px",
  };
  const style2 = {
    textAlign: "center",
    color: "green",
  };
  return (
    <div>
      <Header></Header>
      <div className="gym">
        <div className="">
          <div className="row">
            {/* card 1 */}
            <div className="col-md-6 col-sm-12 col-12 ">
              <div className="cards cards1 box">
                <img class="card-img-top" src={pic1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    Great Health and Wellness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>Houston, Texas </span>{" "}
                    <br /> <span style={{ color: "gray" }}> Wellness </span>
                    <br />{" "}
                  </p>

                  <div className="social-icon-wrap">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img1} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img2} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img3} alt="social1" className="ins" />
                          </NavLink>
                        </div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                      </div>
                    </div>
                  </div>
                  <p style={style2}>
                    Do you feel like you are not getting the results you want
                    from your medical care? Are you looking to keep yourself
                    healthy and prevent chronic disease? Are you looking to
                    address the root cause of your health? Great Health and
                    Wellness is here to do just that. Our mission at GHW is to
                    empower you to take control of your health through lifestyle
                    medicine and the health mindset. We do so by helping you
                    discover the value in health via our award-winning podcast,
                    The Strive for Great Health Podcast, a comprehensive 5-week
                    lifestyle medicine course and testing focused on metabolic
                    health and gut health. An investment in your health always
                    pays dividends!"
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12 ">
              <div className="cards cards1 box">
                <img class="card-img-top" src={pic1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    Great Health and Wellness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>Houston, Texas </span>{" "}
                    <br /> <span style={{ color: "gray" }}> Wellness </span>
                    <br />{" "}
                  </p>

                  <div className="social-icon-wrap">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img1} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img2} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img3} alt="social1" className="ins" />
                          </NavLink>
                        </div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                      </div>
                    </div>
                  </div>
                  <p style={style2}>
                    Do you feel like you are not getting the results you want
                    from your medical care? Are you looking to keep yourself
                    healthy and prevent chronic disease? Are you looking to
                    address the root cause of your health? Great Health and
                    Wellness is here to do just that. Our mission at GHW is to
                    empower you to take control of your health through lifestyle
                    medicine and the health mindset. We do so by helping you
                    discover the value in health via our award-winning podcast,
                    The Strive for Great Health Podcast, a comprehensive 5-week
                    lifestyle medicine course and testing focused on metabolic
                    health and gut health. An investment in your health always
                    pays dividends!"
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-12 ">
              <div className="cards cards1 box">
                <img class="card-img-top" src={pic1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    Great Health and Wellness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>Houston, Texas </span>{" "}
                    <br /> <span style={{ color: "gray" }}> Wellness </span>
                    <br />{" "}
                  </p>

                  <div className="social-icon-wrap">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img1} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img2} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img3} alt="social1" className="ins" />
                          </NavLink>
                        </div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                      </div>
                    </div>
                  </div>
                  <p style={style2}>
                    Do you feel like you are not getting the results you want
                    from your medical care? Are you looking to keep yourself
                    healthy and prevent chronic disease? Are you looking to
                    address the root cause of your health? Great Health and
                    Wellness is here to do just that. Our mission at GHW is to
                    empower you to take control of your health through lifestyle
                    medicine and the health mindset. We do so by helping you
                    discover the value in health via our award-winning podcast,
                    The Strive for Great Health Podcast, a comprehensive 5-week
                    lifestyle medicine course and testing focused on metabolic
                    health and gut health. An investment in your health always
                    pays dividends!"
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 ">
              <div className="cards cards1 box">
                <img class="card-img-top" src={pic1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title" style={style1}>
                    Great Health and Wellness{" "}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {" "}
                    <span style={{ color: "blue" }}>Houston, Texas </span>{" "}
                    <br /> <span style={{ color: "gray" }}> Wellness </span>
                    <br />{" "}
                  </p>

                  <div className="social-icon-wrap">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img1} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img2} alt="social1" className="" />
                          </NavLink>
                        </div>
                        <div class="col-md-1 sm-1">
                          <NavLink to="">
                            <img src={img3} alt="social1" className="ins" />
                          </NavLink>
                        </div>
                        <div class="col-md-2 sm-2"></div>
                        <div class="col-md-2 sm-2"></div>
                      </div>
                    </div>
                  </div>
                  <p style={style2}>
                    Do you feel like you are not getting the results you want
                    from your medical care? Are you looking to keep yourself
                    healthy and prevent chronic disease? Are you looking to
                    address the root cause of your health? Great Health and
                    Wellness is here to do just that. Our mission at GHW is to
                    empower you to take control of your health through lifestyle
                    medicine and the health mindset. We do so by helping you
                    discover the value in health via our award-winning podcast,
                    The Strive for Great Health Podcast, a comprehensive 5-week
                    lifestyle medicine course and testing focused on metabolic
                    health and gut health. An investment in your health always
                    pays dividends!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;
