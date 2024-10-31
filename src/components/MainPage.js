import React from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import { 
    Main 
} 
from "../styles";

export default function MainPage () {
    return (
        <Main>
            <main>
                <Section1 />                
                <Section2 />
            </main>
            
        </Main>
    )
}

