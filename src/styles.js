import styled from "styled-components";

export const theme = {
    colors: {
        primary: "#ECF1F8",
        secondary: "#ED5267",
        tertiary: "#B2B3BB",
        quaternary: "#fff",
        linear: "linear-gradient(135deg, #FF974F, #E32C75)",
        active: "#000",
        text: "#3E3F58",
    },
    fonts: {
        primary: "Open sans",
    },
    fontSize: {
        primary: "20px",
        secondary: "16px",
        big: "24px",
        cards: "36px",
        navbarText: '14px',
    },
};


export const NavBar = styled.header`
    background: ${(props) => props.theme.colors.quaternary};
    width: 100vw;
    height: 112px;
`;

export const FirstLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 135px 0px 135px;
    align-content: center;
    @media (max-width: 600px) {
    margin: 0px 35px 0px 35px;
  }

  h1{
  margin: 24px 0px 0px 0px;
  padding-bottom: 24px;
  font-size: ${(props) => props.theme.fontSize.primary};
  }
`;

export const SecondLine = styled.nav`
    display: flex;
    flex-wrap: wrap;
    font-size: ${(props) => props.theme.fontSize.navbarText};
    margin-left: 135px;
    gap: 36px;
    padding-bottom: 23px;
    @media (max-width: 600px) {
    margin: 0px 35px 0px 35px;
  }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.tertiary};
        position: relative; /* For the colored underline */
        
        &.active {
            color: ${(props) => props.theme.colors.active}; /* Active color */
        }

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 4px; /* Adjusted thickness of the underline */
            background: ${(props) => props.theme.colors.linear}; /* Underline color */
            position: absolute;
            left: 0;
            bottom: -19px; /* Distance from the text */
            transform: scaleX(0); /* Initially hidden */
            transition: transform 0.3s ease; /* Animation effect */
        }

        &.active::after {
            transform: scaleX(1); /* Show underline when active */
        }
    }
`;

export const AccountWrapper = styled.aside`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.secondary};
    gap: 7px;

  button {
  border: none;
  background: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.secondary};  
  }

  button:hover{
  background: ${(props) => props.theme.colors.secondary};
  }
`;

export const Button = styled.button`
    position: absolute;
    z-index: 1;
    right: 135px;
    top: 80px;
    width: 64px;
    height: 64px;
    color: ${(props) => props.theme.colors.quaternary};
    background: ${(props) => props.theme.colors.linear};
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSize.primary};
  @media (max-width: 900px) and (min-width: 600px) {
    width: 32px;
    height: 32px;
    top: 97px;
  }
  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    top: 99px;
    right: 35px;
  }
    
`;

export const Main = styled.main`
    background: ${(props) => props.theme.colors.primary};
    width: 100vw;
    height: 1440px;
    
    main {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-column-gap: 47px;
    grid-row-gap: 0px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 0.2fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
    }
    
`;

export const Section1Wrap = styled.section`
  display: grid;
  grid-area: 1 / 1 / 2 / 2; 
  grid-template-columns: 0.95fr;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media (max-width: 600px) {
    grid-area: 1 / 1 / 2 / 2;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr;
  }


  section {
  display: grid;
  margin-left: 135px;
  margin-top: 40px;
  @media (max-width: 900px) and (min-width: 600px) {
    margin-left: 75px;
  }
  @media (max-width: 600px) {
    margin-left: 35px;
  }
}
  
  img {
  grid-area: 1 / 1 / 4 / 2;
  }

  .userDetails {
  grid-area: 1 / 2 / 4 / 3;
  }

  .userDetails h1{
    font-size: ${(props) => props.theme.fontSize.big};
    color: ${(props) => props.theme.colors.text};
    margin: 0px;
  }

  .userDetails h3{
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.secondary};
    font-weight: normal;
  }

  .userDetails a{
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.secondary};
    font-weight: normal;
  }


  .userData {
    display: flex;
    grid-area: 4 / 1 / 5 / 3;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    margin: 32px 0px 0px 0px;
  }
  
  .userData p{
    flex: 1 calc(33.33% - 10px);
    text-align: center; 
    box-sizing: border-box;
    margin: 0px;
    color: ${(props) => props.theme.colors.text};
  }

  .userData p:nth-child(-n+3) {
  font-weight: bold;
  }

  .menuDots {
  position: relative;
  border: none;
  top: 5px;
  font-size: ${(props) => props.theme.fontSize.primary};
  padding: 16px; 
  background: transparent;
  }

  .dropdown {
  display: grid;
  grid-area: 1 / 3 / 2 / 4; 
  position: relative;
  width: 10px;
}


.dropdown-content {
  display: none;
  position: absolute;
  background: ${(props) => props.theme.colors.quaternary};
  opacity: 0.94;
  min-width: 174px;
  z-index: 1;
  padding: 10px 0px;
  border-radius: 8px;
  height: 100px;
  top: 52px;
}


.dropdown-content a {
  color: ${(props) => props.theme.colors.active};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  
}

.dropdown-content a:hover {
background: ${(props) => props.theme.colors.primary};
};


.dropdown:hover .dropdown-content {
display: block;
};


.dropdown:hover .dropbtn {
background: ${(props) => props.theme.colors.active};
};



  .userDescript {
  grid-area: 5 / 1 / 6 / 3; 
  font-size: ${(props) => props.theme.fontSize.secondary};
  color: ${(props) => props.theme.colors.text};
  }

`;

export const Section2Wrap = styled.section`
  grid-area: 1 / 2 / 2 / 3; 
  display: grid;
  margin-right: 135px;
  margin-top: 40px;

  @media (max-width: 600px) {
    margin: 20px auto;
    grid-area: 2 / 1 / 3 / 2; 
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr;
  }
  

.btn1_container
 {
  width: 50px;
  height: 26px;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  position: relative;
  border: none;
  border-radius: 30px;
}

.one {
  position: absolute;
  height: 20px;
  width: 20px;
  display: block;
  border: none;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.quaternary};
  transition: all 0.3s ease;
}

.one {
  left: 02px;
  top: 03px;
}

.inactive1 {
  transform: translateX(calc(30px - 6px));
  border: none;
  background: ${(props) => props.theme.colors.quaternary};
}

.buttonSwitch {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 24px;
  @media (max-width: 600px) {
    margin: 15px auto;
    justify-content: center;
  }

}

.cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 80px;

    @media (max-width: 900px) and (min-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
    @media (max-width: 600px) {
    grid-template-columns: 0.5fr;
    margin-top: 10px;
  }

  }

  .card {
    background: ${(props) => props.theme.colors.quaternary};
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 240px;
    width: 324px;
    @media (max-width: 900px) and (min-width: 600px) {
    width: 274px;
    height: 180px;
    }
    @media (max-width: 600px) {
    width: 224px;
    height: 130px;
  }
  }

  .card h3 {
    font-size: ${(props) => props.theme.fontSize.cards};
    color: ${(props) => props.theme.colors.text};
    font-weight: normal;
    margin: 0;
    margin-bottom: 20px;
  @media (max-width: 900px) and (min-width: 600px) {
    font-size: ${(props) => props.theme.fontSize.primary};
  }
  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fontSize.secondary};
    font-weight: bold;
  }
}

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author {
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.tertiary};
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fontSize.navbarText};
    
  }
  }

  .author img {
  padding-right: 8px;
  }

  .share {
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  
  .special-card {
    padding-top: 10px;
  }

  .shared-label {
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.first};
    margin-bottom: 10px;
  }

  .interaction-stats {
    display: flex;
    gap: 10px;
    font-size: ${(props) => props.theme.fontSize.secondary};
    color: ${(props) => props.theme.colors.text};
}

  .liked i {
    color: ${(props) => props.theme.colors.secondary};
}

  .played, .liked {
    display: flex;
    align-items: center;
    gap: 4px; 
  }

  i {
    font-size: ${(props) => props.theme.fontSize.secondary};
    }
  }
`;

