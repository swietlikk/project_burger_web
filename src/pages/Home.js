import React from 'react';
import { Link } from "react-router-dom";
import BannerImage from '../assets/burger-bgc.webp';
import '../styles/Home.scss';


function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1> Adam's Burger</h1>
                <p>BURGER TO FIT ANY TASTE</p>
                <Link to={"/menu"}>
                <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;