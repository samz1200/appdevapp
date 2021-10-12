import React from "react";
import Header from "../Home/Header/Header";
import "./Price.css";
const Price = () => {
  const style1 = {
    maxWidth: "400px",
    margin: "auto",
  };
  const style2 = {
    marginRight: "60px",
    color: "white",
  }
  return (
    <div>
      <Header></Header>

      <div class="container  h-30">
        <div class="row d-flex justify-content-center align-items-center h-30">
          <div className="qt">
            
            <p className="text-center text">
              {" "}
              Exceptional Customer Service | Flexible Financing Options{" "}
              <br></br> Out Team of Experts will help you Innovate and Market
              your app
            </p>
          </div>
          <div class="col-sm-6 col-md-8 col-lg-6 col-xl-5">
            <form className="form1">
            <h2 className="text-center" style={style2}>
              Request a Free Quote Now!
            </h2>
              <div className="Icon-inside name mt-5">
                <input type="text" placeholder="Name" />
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
              </div>
              <div className="Icon-inside email mt-3">
                <input type="text" placeholder="Email" />
                <i
                  className="fa fa-envelope fa-lg fa-fw"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="Icon-inside phone mt-3">
                <input type="text" placeholder="Phone " />
                <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
              </div>
              <textarea
                id="w3review"
                name="w3review"
                placeholder="Message"
                rows="4"
                cols="55"
              ></textarea>{" "}
              <br />
              <button type="submit " class="btn btn-danger bt1 my-1">
                SUBMIT
              </button>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
