import React from "react";
import logo from "../../images/logo.png";
import banner from '../../images/banner.jpg'
import "./Header.css";

const Header = () => {
  return (
    <div className="main-body">
      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo-area">
                <a href="">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="main-menu">
                <ul>
                  <li>
                    <a href="">top chart</a>
                  </li>
                  <li>
                    <a href="">this week</a>
                  </li>
                  <li>
                    <a href="">last week</a>
                  </li>
                  <li>
                    <a href="">Newsletters</a>
                  </li>
                  <li className="subscribe-btn">
                    <a href="">subscribe</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-banner" style={{backgroundImage:`url(${banner})`}}>
        <div className="banner-text">
          <h1> best singer in the world</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
