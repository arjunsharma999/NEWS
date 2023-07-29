import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
//   console.log(showMenu);

  return (
    <>
      <nav className="nav">
        <i className="uil uil-bars navOpenBtn"></i>
        <a href="#" className="logo">
          {" "}
          <img src="/images/logo.jpeg" width="20px" alt="" />
        </a>
        <ul className="nav-links">
          <i className="uil uil-times navCloseBtn"></i>
          <Link to={"/LatestNews"}>
            <a href="#">ख़बरों की ख़बर</a>
          </Link>

          <Link to={"/Home"}>
            <a href="#">$$$</a>
          </Link>
          <li>
            <a href="#">मंथन</a>
          </li>
          <Link to={"/News"}>
            <a href="#">खबरे</a>
          </Link>
          <li>
            <a href="#">साहित्य</a>
          </li>
          <li>
            <a href="#">संपदकी</a>
          </li>
          <li>
            <a href="#">पहाड़ रैबार</a>
          </li>
          <Link to={"/Science&Tech"}>
            <a href="#">विज्ञान और तकनीक</a>
          </Link>
          <li>
            <a href="#">वीडियो</a>
          </li>
          <Link to={"/Health"}>
            <a href="#">स्वस्थ्य</a>
          </Link>
          <li>
            <a href="#">शहरनामा</a>
          </li>
          <li>
            <a href="#">हमारे बारे में</a>
          </li>
          <Link to={"/Contact-us"}>
            <a href="#">संपर्क</a>
          </Link>
        </ul>
        <i className="uil uil-search search-icon" id="searchIcon"></i>
        <div className="search-box">
          <i className="uil uil-search search-icon"></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <div
          className="d-block d-lg-none "
          onClick={() => {
            setShowMenu(showMenu === true ? false : true);
          }}
        >
          <h1>X</h1>
        </div>
      </nav>
      <div className={`${showMenu ? "d-flex d-none" : "d-flex"}`}>
        <ul className="nav-links d-lg-none">
          <div className="d-flex flex-column gap-3 ">
            <i className="uil uil-times navCloseBtn"></i>
            <Link to={"/LatestNews"}>
              <a href="#">ख़बरों की ख़बर</a>
            </Link>

            <Link to={"/Home"}>
              <a href="#">$$$</a>
            </Link>
            <li>
              <a href="#">मंथन</a>
            </li>
            <Link to={"/News"}>
              <a href="#">खबरे</a>
            </Link>
            <li>
              <a href="#">साहित्य</a>
            </li>
            <li>
              <a href="#">संपदकी</a>
            </li>
            <li>
              <a href="#">पहाड़ रैबार</a>
            </li>
            <Link to={"/Science&Tech"}>
              <a href="#">विज्ञान और तकनीक</a>
            </Link>
            <li>
              <a href="#">वीडियो</a>
            </li>
            <Link to={"/Health"}>
              <a href="#">स्वस्थ्य</a>
            </Link>
            <li>
              <a href="#">शहरनामा</a>
            </li>
            <li>
              <a href="#">हमारे बारे में</a>
            </li>
            <Link to={"/Contact-us"}>
              <a href="#">संपर्क</a>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
