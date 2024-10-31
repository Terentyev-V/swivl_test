import React from "react";
import avatar from "../media/Avatar.png";
import {
    Section1Wrap
} from "../styles";

export default function Section1 () {
    return(
        <Section1Wrap>
        <section>
            <img src={avatar} alt="User Avatar"></img>

            <div className="userDetails">
                <h1>Benjamin Clementine</h1>
                <h3>@benclementine</h3>
                <a href="editProfile"><i class="fa-solid fa-pen"></i> Edit Profile</a>
            </div>

            <div className="userData">
                <p>45</p>
                <p>110</p>
                <p>332</p>
                <p>synths</p>
                <p>followers</p>
                <p>following</p>
            </div>

            <div className="dropdown">
                <button className="menuDots"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                <div class="dropdown-content">
                    <a href="report"><i class="fa-regular fa-pen-to-square"></i> Report User</a>
                    <a href="block"><i class="fa-regular fa-circle-xmark"></i> Block User</a>
                </div>
            </div>

            <div className="userDescript">
                <p>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and live updates on XRP, bitcoin and Ethereum.</p>
            </div>   
        </section>
        </Section1Wrap>
    )
}