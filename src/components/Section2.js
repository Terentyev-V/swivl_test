import React, { useState } from "react";
import { Section2Wrap } from "../styles";
import Oval from "../media/Oval.png";

export default function Section2() {
    const [isInactive, setIsInactive] = useState(false);

    const handleToggle = () => {
        setIsInactive(!isInactive);
    };

    return (
        <Section2Wrap>
            <section>
                <div className="buttonSwitch">
                    <p>Public</p>
                    <div className="btn1_container" onClick={handleToggle}>
                        <span className={`one ${isInactive ? "inactive1" : ""}`}></span>
                    </div> 
                    <p>Private</p>
                </div>
                
                <div className="cards">
                    {Array(2).fill().map((_, index) => (
                        <div className="card" key={index}>
                            <br></br>
                            <h3>New air routes that promise cheap flights in</h3>
                            <div className="card-footer">
                                <span className="author">
                                    <img src={Oval} alt="Author_Photo"></img>
                                    Gregory Watkins
                                </span>
                                <span className="share">Share</span>
                            </div>
                        </div>
                    ))}

        
                    <div className="card special-card" key="3">
                        <div className="shared-label">Shared to #discussionaboutanimgttdds...</div>
                        <h3>New air routes that promise cheap flights in</h3>
                        <div className="card-footer">
                            <span className="author">
                                <img src={Oval} alt="Author_Photo"></img>
                                Gregory Watkins
                            </span>
                            <div className="interaction-stats">
                                <span className="played">
                                    <i className="fa-solid fa-play"></i> 88
                                </span>
                                <span className="liked">
                                    <i className="fa-solid fa-heart"></i> 24
                                </span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="card special-card" key="4">
                        <div className="shared-label">🔗 Shared via weblink</div>
                        <h3>New air routes that promise cheap flights in</h3>
                        <div className="card-footer">
                            <span className="author">
                                <img src={Oval} alt="Author_Photo"></img>
                                Gregory Watkins
                            </span>
                            <div className="interaction-stats">
                                <span className="played">
                                    <i className="fa-solid fa-play"></i> 88
                                </span>
                                <span className="liked">
                                    <i className="fa-solid fa-heart"></i> 24
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Section2Wrap>
    );
}
