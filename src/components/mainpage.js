import React from "react";
import { Link } from "react-router-dom";
import './mainpage.css';
import About from "./card";
function HomePage()
{
    return(
        <div className="ab" >
            <h1 align="center">Hotel Reservation</h1>
            <About/>
            <Link to="/Get">
            <button class="button button1">GET DETAILS</button>
            </Link>
            <Link to="/Post">
            <button class="button button2">CREATE DETAILS</button>
            </Link>
            <Link to="/Update">
            <button class="button button3">UPDATE DETAILS</button>
            </Link>
            <Link to="/HotelDel">
           <button class="button button4">DELETE DETAILS</button>
           </Link>
        </div>
    )
}
export default HomePage;