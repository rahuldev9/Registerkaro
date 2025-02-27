import React, { useState } from "react";
import { Link } from "react-scroll";
import Popup from "./Popup";

const Header = () => {
  const [chathist, setChathist] = useState(false);
  const phoneNumber = "+918447746183"; // Your phone number

  const handleClick = () => {
    console.log("Calling:", phoneNumber);
  };

  return (
    <header style={{ position: "sticky", top: "0px",backgroundColor:"#FFFFFF",zIndex:1000}}>
      
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {/* Logo */}
        <div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <img
            src="christmas-hat.png"
            alt="image"
            style={{ 
                width: "30px", 
                height: "30px", 
                margin: "10px", 
                position: "fixed", 
                transform: "scaleX(-1)" ,// Flip the image horizontally
                rotate:"-12deg",
                top:'-2px',
                left:'-4px'
              }}
          />
          <img
            src="Registerkaro_logotext.png"
            alt="image"
            style={{ width: "200px", height: "38.6px", margin: "10px" }}
          />
            </div>
          {chathist && <Popup closePopup={() => setChathist(false)} />}
        </div>

        {/* Navigation Links */}
        <div className="desktop-nav">
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <p><a href="" ><Link to="hero" smooth={true} duration={500}>
            Home
          </Link></a></p>
            <select style={{border:'none'}}>
                <option><a href=""><Link to="services" smooth={true} duration={500}>
                Our Services
          </Link></a></option>
            </select>
            <p><a href=""><Link to="contactus" smooth={true} duration={500}>
            Contact Us
          </Link></a></p>
            <p><a href="" ><Link to="clients" smooth={true} duration={500}>
            Blog
          </Link></a></p>
            <p><a href="" ><Link to="about" smooth={true} duration={500}>
            About Us
          </Link></a></p>
            <i class="fa-solid fa-magnifying-glass" style={{alignSelf:'center'}}></i>
            <button style={{backgroundColor:'#FFA229',color:'#FFFFFF',border:'none',borderRadius:'4%',width:'142px',cursor:'pointer'}}>Talk to an expert</button>
          </div>
        </div>

        {/* Toggle Button (Visible Only on Small Screens) */}
        <button
          className="toggle-button"
          onClick={() => setChathist((prev) => !prev)}
          style={{width:'70px'}}
        >
         <i
        className={chathist ? "fa-solid fa-times" : "fa-solid fa-bars"}
        style={{ fontSize: "20px" }}
      ></i>
        </button>
      </nav>

      {/* CSS Styles */}
      <style>
        {`
          @media (max-width: 1000px) {
            .desktop-nav {
              display: none;
            }
            .toggle-button {
              display: block;
              background: white;
              padding: 10px;
              border-radius: 5px;
              cursor: pointer;
              margin-right: 10px;
            }
          }

          @media (min-width: 1001px) {
            .toggle-button {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
