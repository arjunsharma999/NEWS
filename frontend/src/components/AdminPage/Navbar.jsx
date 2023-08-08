import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  //   console.log(showMenu);

  return (
    <>
      <div className="position-relative">
        <nav className="nav position-fixed fixed-top">
          <i className="uil uil-bars navOpenBtn"></i>
          <Link to ={"/Home"}>
          <a href="#" className="logo">
            {" "}
            <img src="/images/logo.jpeg" width="15px" alt="" />
          </a></Link>
          <ul className="nav-links">
            <i className="uil uil-times navCloseBtn"></i>
            <Link to={"/News/Sports"}>
              <a href="#">ख़बरों की ख़बर</a>
            </Link>

            <Link to={"/Home"}>
              <a href="#">होम</a>
            </Link>
            <Link to={"/News/मंथन"}>
              <a href="#">मंथन</a>
            </Link>

            <Link to={"/News/खबरे"}>
              <a href="#">खबरे</a>
            </Link>
            <Link to={"/News/साहित्य"}>
              <a href="#">साहित्य</a>
            </Link>
            <Link to={"/News/संपदकी"}>
              <a href="#">संपदकी</a>
              </Link>
              <Link to={"/News/पहाड़ रैबार"}>
              <a href="#">पहाड़ रैबार</a>
            </Link>
            <Link to={"/News/विज्ञान और तकनीक"}>
              <a href="#">विज्ञान और तकनीक</a>
            </Link>
            <Link to={"/Video"}>
              <a href="#">वीडियो</a>
              </Link>
              <Link to={"/News/स्वस्थ्य"}>
              <a href="#">स्वस्थ्य</a>
            </Link>
            <Link to={"/News/स्वस्थ्य"}>
              <a href="#">आरम्भिक अंक</a>
            </Link>
            <Link to={"/News/स्वस्थ्य"}>
              <a href="#">क्लासिफाइड गढ़वाल</a>
            </Link>
            <Link to={"/News/शहरनामा"}>
              <a href="#">शहरनामा</a>
            </Link>
            <Link to ={"/About"}>
              <a href="#">हमारे बारे में</a>
            </Link>
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
            <h1 className="px-5">X</h1>
          </div>
        </nav>

        <div className={`${showMenu ? "d-flex d-none" : "d-flex"} position-fixed znavbar`}>
          <ul className="nav-links d-lg-none my-5">
            <div className="d-flex flex-column gap-3 my-5 listnone">
              <i className="uil uil-times navCloseBtn"></i>
              <Link to={"/LatestNews"}>
                <a className="linkcolour" href="#">ख़बरों की ख़बर</a>
              </Link>
              <Link to={"/Home"}>
                <a className="linkcolour" href="#">$$$</a>
              </Link>
              <a className="linkcolour" href="#">मंथन</a>
              <Link to={"/News"}>
                <a className="linkcolour" href="#">खबरे</a>
              </Link>
              <a className="linkcolour" href="#">साहित्य</a>
              <a className="linkcolour" href="#">संपदकी</a>
              <Link to={"/Science&Tech"}>
                <a className="linkcolour" href="#">विज्ञान और तकनीक</a>
              </Link>
              <a className="linkcolour" href="#">वीडियो</a>
              <Link to={"/Health"}>
                <a className="linkcolour" href="#">स्वस्थ्य</a>
              </Link>
              <a className="linkcolour" href="#">शहरनामा</a>
              <a className="linkcolour" href="#">हमारे बारे में</a>
              <Link to={"/Contact-us"}>
                <a className="linkcolour" href="#">संपर्क</a>
              </Link>
            </div>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Navbar;
