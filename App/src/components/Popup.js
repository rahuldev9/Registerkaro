import React from "react";
import { Link } from "react-scroll";
const Popup = ({ closePopup }) => {
  

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {/* Close Button */}
        
        <div style={{ display: "flex", flexDirection: 'column',alignItems:'baseline' }}>
          <h1 style={{ margin: "10px" }}><a href=" "><Link to="hero" smooth={true} duration={500} onClick={closePopup}>
            Home
          </Link></a></h1>
          <h1 style={{ margin: "10px" }}><a href=" "><Link to="services" smooth={true} duration={500} onClick={closePopup}>
                Our Services
          </Link></a></h1>
          <h1 style={{ margin: "10px" }}><a href=" "><Link to="clients" smooth={true} duration={500} onClick={closePopup}>
            Blog
          </Link></a></h1>
          <h1 style={{ margin: "10px" }}><a href=" "><Link to="contactus" smooth={true} duration={500} onClick={closePopup}>
            Contact Us
          </Link></a></h1>
          <h1 style={{ margin: "10px" }}><a href=" "><Link to="about" smooth={true} duration={500} onClick={closePopup}>
            About Us
          </Link></a></h1>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection:'row',
    justifyContent: 'flex-end',
    zIndex: 1000,
    top:'70px'
    
  },
  popup: {
    background: "#fff",
    padding: "20px",
    width: "300px",
    minHeight: "700px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
    
    
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "5px",
  },
};

export default Popup;
