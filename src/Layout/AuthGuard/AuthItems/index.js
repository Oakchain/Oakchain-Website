import React, { useState } from "react";
import NavItems from "./items";
import { Nav } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "../../../assets/images/searchIc.svg";
import { ThemeContext } from "../../../App";
import { useContext } from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

const AuthItems = () => {
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    // console.log("ASDa")
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };


  const location = useLocation();
  return (
    <div className="d-none d-md-block oak-container-fluid oak-nav-item_wrapper">
      <div className="d-flex align-items-center justify-content-between">
        <Nav className=" d-flex align-items-center">
          {NavItems.map((el) => (
            <div className="">
              <Link
                onMouseEnter={el.label.toLocaleLowerCase() === "academy" ? handleMouseEnter : undefined}
                onMouseLeave={el.label.toLocaleLowerCase() === "academy" ? handleMouseLeave : undefined}
                className={`mb-0 d-flex align-items-center nav-link ${location.pathname.includes(el?.label?.toLowerCase())
                  ? "active"
                  : ""
                  } ${el?.label.toLowerCase()}`}
                to={`/${el?.label.toLowerCase()}`}
              >
                <div className="pe-2 ">
                  <img
                    src={
                      location.pathname.includes(el?.label?.toLowerCase())
                        ? el.activeIcon
                        : theme === "dark"
                          ? el.darkIcon
                          : el.icon
                    }
                    alt="icon"
                  />
                </div>
                <p className="mb-0 nav-items">{el?.label}</p>
                {el.label.toLocaleLowerCase() === "academy" && isDropdownVisible && (

                  <div className="dropdown-menuu">
                    <ul>
                      <li onClick={() => {
                        console.log("Clicked on Courses");
                        navigate('/Courses')
                      }}><h3>Courses</h3></li>
                      <li onClick={() => {
                        navigate('/Cryptonaira')
                      }}><h3>Cryptonaire</h3></li>
                    </ul>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </Nav>
        <div className="d-flex align-items-center justify-content-between">
          <div className="oak-search__wrapper d-flex me-3">
            <input placeholder="Search" />
            <div>
              <img src={SearchIcon} alt={"icon"} />
            </div>
          </div>
          <div className="oak-search__wrapper select">
            <select className="oak-language__select">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthItems;
