import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="nav">
                <i class="uil uil-bars navOpenBtn"></i>
                <a href="#" class="logo"> <img src="/images/logo.jpeg" alt="" /></a>
                <ul class="nav-links">
                    <i class="uil uil-times navCloseBtn"></i>
                    <Link to={'/LatestNews'}><a href="#">ख़बरों की ख़बर</a></Link>

                    <Link to={'/Home'}><a href="#">$$$</a></Link>
                    <li><a href="#">मंथन</a></li>
                    <Link to={'/News'}><a href="#">खबरे</a></Link>
                    <li><a href="#">साहित्य</a></li>
                    <li><a href="#">संपदकी</a></li>
                    <li><a href="#">पहाड़ रैबार</a></li>
                    <Link to={'/Science&Tech'}><a href="#">विज्ञान और तकनीक</a></Link>
                    <li><a href="#">वीडियो</a></li>
                    <Link to={'/Health'}><a href="#">स्वस्थ्य</a></Link>
                    <li><a href="#">शहरनामा</a></li>
                    <li><a href="#">हमारे बारे में</a></li>
                    <Link to={'/Contact-us'}><a href="#">संपर्क</a></Link>
                </ul>
                <i class="uil uil-search search-icon" id="searchIcon"></i>
                <div class="search-box">
                    <i class="uil uil-search search-icon"></i>
                    <input type="text" placeholder="Search here..." />
                </div>
            </nav>

        </>
    )
}

export default Navbar