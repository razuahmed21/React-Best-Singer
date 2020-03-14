import React from "react";
import { useState } from "react";
import "./Users.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Users = props => {
  const { name, img, website, salary } = props.user;
  const countIncrease = () => {
    console.log("Click Done")
};
  return (
    <div className="col-md-4 col-sm-6">
      <div className=" singleinformation">
        <div className="singerPic">
          <img src={img} alt="" />
        </div>
        <div className="singerInfo">
          <h3 className="singer-name">{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tempora.</p>
          <h4 className="singer-web"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> {website}</h4>
          <h4 className="singer-salary"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon> {salary}</h4>
          <button className="hirebtn" onClick={countIncrease}>
            hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
