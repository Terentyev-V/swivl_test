import React, { useState } from "react";
import Rectangle from '../media/Rectangle.png';

import {
    NavBar,
    FirstLine,
    SecondLine,
    AccountWrapper,
    Button
} from "../styles";



export default function Header () {

    const [activeLink, setActiveLink] = useState('feed'); // Default active link

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
 return (
        <NavBar>
            <FirstLine>
                <h1>Synth</h1>
                <AccountWrapper>
                    <p>Arthur Wood</p>
                    <img src={Rectangle} width="32px" height="32px" alt="Avatar of users account"/>
                    <button><i class="fa-duotone fa-solid fa-angle-down"></i></button>
                    <button><i class="fa-regular fa-bell"></i></button>
                    <button><i class="fa-solid fa-gift"></i></button>
                    <button><i class="fa-solid fa-m"></i></button>
                </AccountWrapper>
            </FirstLine>
            <SecondLine>
                <a
                    href="#feed"
                    className={activeLink === 'feed' ? 'active' : ''}
                    onClick={() => handleLinkClick('feed')}
                >
                    FEED
                </a>
                <a
                    href="#explore"
                    className={activeLink === 'explore' ? 'active' : ''}
                    onClick={() => handleLinkClick('explore')}
                >
                    EXPLORE
                </a>
                <a
                    href="#discuss"
                    className={activeLink === 'discuss' ? 'active' : ''}
                    onClick={() => handleLinkClick('discuss')}
                >
                    DISCUSSIONS
                </a>
            </SecondLine>
            <Button>+</Button>
        </NavBar>
        


    
   


 )
}