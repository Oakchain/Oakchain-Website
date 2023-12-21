import React, { useState, useEffect, useRef } from "react";
import Admin from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import './index.css'

const AdminPage = () => {
  
  return (
    <Admin>
      <div className="homeeeee">
        <header className="homeeeheader">
          <div className="homeeetop">
            <div className="homeeeplatformvisit">
              <h1>Platform Visit</h1>
              <div className="homeeeper">
                <h2>20,000</h2>
                <span>30%</span>
              </div>
              <h3>from 17,500</h3>
            </div>
            <div className="homeeeconnectedwallet">
            <h1>Connected Wallet</h1>
              <div className="homeeeper">
                <h2>200,000</h2>
                <span>30%</span>
              </div>
              <h3>from 190,000</h3>
            </div>
            <div className="homeeenestholders">
            <h1>Verified Nest Holders</h1>
              <div className="homeeeper">
                <h2>3333</h2>
                
              </div>
              <h3>.</h3>
            </div>
          </div>
          <div className="homeeebottom">
            <div className="homeeepost"><h1>65 Posts</h1></div>
            <div><h1>1M impressions</h1></div>
          </div>
        </header>
        <section className="secttt">
          <div className="homeeecommon homeeeplatformDiv"> 
          <div className="homeeetop">
            <h1>Platform Visit</h1>
          </div>
          <div className="graph" >
          
          </div>
          </div>
        <div className="homeeecommon homeeepostDiv">
          <div className="homeeetop">
            <h1>All Post</h1>
            <h2>Most Recent</h2>
          </div>
          <ul className="homeeemiddle">
            <li>
              <h1>What is Smart Contracts, and how to read it and detect scams</h1>
              <h2>Learn what smart contracts are and how to read them to detect scams.</h2>
            </li>
            <li>
              <h1>What is Smart Contracts, and how to read it and detect scams</h1>
              <h2>Learn what smart contracts are and how to read them to detect scams.</h2>
            </li>
            <li>
              <h1>What is Smart Contracts, and how to read it and detect scams</h1>
              <h2>Learn what smart contracts are and how to read them to detect scams.</h2>
            </li>
            <li>
              <h1>What is Smart Contracts, and how to read it and detect scams</h1>
              <h2>Learn what smart contracts are and how to read them to detect scams.</h2>
            </li>
          </ul>
          <div className="homeeebottom">
            <button>
              <h1>View All</h1>
            </button>
          </div>
        </div>
        <div className="homeeecommon homeeeconnectedDiv">
        <div className="homeeetop">
            <h1>Connected Wallet</h1>
          </div>
          <div className="graph"></div>
        </div>
        <div className="homeeecommon homeeeodd">
          <div className="homeeecommon homeeefirst">
          <div className="homeeetop">
            <h1>Official Project Link</h1>
          </div>
          <div className="homeeebottom">
            <label>Official website URL</label>
            <li><input></input><button><FontAwesomeIcon icon={faCopy} ></FontAwesomeIcon></button></li>
            <label>Official Discord</label>
            <li><input></input><button><FontAwesomeIcon icon={faCopy} ></FontAwesomeIcon></button></li>
            <label>Official X </label>
            <li><input></input><button>
              <FontAwesomeIcon icon={faCopy} ></FontAwesomeIcon>
              </button></li>
          </div>
          </div>
          <div className="homeeecommon second">
          <div className="homeeetop">
            <h1>Team</h1>
            <h2>+</h2>
          </div>
          <div className="homeeebottom">
            <li>
              <div className="names">
                <h1>Nansel Rimsah</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
            <li>
              <div className="names">
                <h1>homeeePeri Nwolisa</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
            <li>
              <div className="names">
                <h1>Femi Adeniyi</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
            <li>
              <div className="names">
                <h1>Peace Okafor</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
            <li>
              <div className="names">
                <h1>Don</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
            <li>
              <div className="names">
                <h1>Samson</h1>
                <h2>Admin, Oakchain</h2>
              </div>
              <button className="view">
                <h1>View</h1>
              </button>
            </li>
          </div>
          </div>
          </div></section>
      </div>
    </Admin >
  );
};

export default AdminPage;
