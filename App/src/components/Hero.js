import React, { useState } from "react";
import { motion } from "framer-motion";
const FadeInSection = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {children}
      </motion.div>
    );
  };

const Hero = () => {
  return (
    <>
    <FadeInSection>
    <div style={styles.gradientDiv}>
      <div style={{ marginLeft: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop:'100px'
          }}
        >
          <i
            class="fa-solid fa-star"
            style={{ fontSize: "20px", color: "#F2994A" }}
          ></i>
          <p style={{ color: "black", fontSize: "10px" }}>Google Rating</p>
          <button
            style={{
              backgroundColor: "#F2994A",
              border: "none",
              margin: "1px",
            }}
          >
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            ></i>
          </button>
          <button
            style={{
              backgroundColor: "#F2994A",
              border: "none",
              margin: "1px",
            }}
          >
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            ></i>
          </button>
          <button
            style={{
              backgroundColor: "#F2994A",
              border: "none",
              margin: "1px",
            }}
          >
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            ></i>
          </button>
          <button
            style={{
              backgroundColor: "#F2994A",
              border: "none",
              margin: "1px",
            }}
          >
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            ></i>
          </button>
          <button
            style={{
              backgroundColor: "#F2994A",
              border: "none",
              margin: "1px",
            }}
          >
            <i
              class="fa-solid fa-star"
              style={{ fontSize: "15px", color: "#FFFFFF" }}
            ></i>
          </button>
        </div>
        <div>
          <h1>Your trusted partner</h1>
          <h1>for compliance business needs</h1>
          <div style={{ maxWidth: "700px" }}>
            <p>
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, registrations, tax filings,
              and other legal matters.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            color: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "45px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                height: "40px",
                marginRight: "10px",
              }}
            >
              <i className="fa-regular fa-square" style={{ margin: "1px" }}></i>
              <i className="fa-regular fa-square" style={{ margin: "1px" }}></i>
              <i className="fa-regular fa-square" style={{ margin: "1px" }}></i>
              <i className="fa-regular fa-square" style={{ margin: "1px" }}></i>
            </div>

            {/* Customer Rating Box */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",

                padding: "5px 10px",
                borderRadius: "5px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "bold",
                  alignSelf: "start",
                }}
              >
                4.5+
              </h1>
              <p style={{ margin: 0, fontSize: "12px" }}>Customer Rating</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            {/* Star Icons */}
            <div
              style={{
                width: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                height: "40px",
                marginRight: "10px", // Adds spacing between stars and text
              }}
            >
              <i
                class="fa-solid fa-users"
                style={{ margin: "1px", fontSize: "30px" }}
              ></i>
            </div>

            {/* Customer Rating Box */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",

                padding: "5px 10px",
                borderRadius: "5px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                2000+
              </h3>
              <p style={{ margin: 0, fontSize: "12px" }}>Clients</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            {/* Star Icons */}
            <div
              style={{
                width: "40px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                height: "40px",
                marginRight: "10px", // Adds spacing between stars and text
              }}
            >
              <i class="fa-solid fa-handshake" style={{ fontSize: "30px" }}></i>
            </div>

            {/* Customer Rating Box */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",

                padding: "5px 10px",
                borderRadius: "5px",
                color: "white",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "black",
                  alignSelf: "start",
                }}
              >
                99.8%
              </h3>
              <p style={{ margin: 0, fontSize: "12px" }}>Financial Stability</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              backgroundColor: "#1C4670",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "4%",
              width: "204px",
              height: "54px",
            }}
          >
            Talk to an expert
          </button>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <i
                class="fa-solid fa-circle-play"
                style={{ fontSize: "30px", paddingLeft: "20px",color:'#FB432C' }}
              ></i>
              <p style={{ paddingLeft: "10px" }}>See how it works</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="homepage.png"
          alt="Homepage"
          style={{ maxWidth: "100%", height: "300px" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="shadow-box">
          <p>Annual Compliance</p>
        </div>
        <div className="shadow-box">
          <p>Payroll Services</p>
        </div>
        <div className="shadow-box">
          <p>Company Formation</p>
        </div>
        <div className="shadow-box">
          <p>Annual Compliance</p>
        </div>
      </div>

    </div>
    </FadeInSection>
    <FadeInSection>
    <div style={{height:'100%'}}>
        <div style={{textAlign:'center'}}>
            <h2>Trusted By Over 100+ Startups and freelance business</h2>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>
            <img className="companyimage" src="Oracle.png"></img>
            <img className="companyimage" src="morphoes.png"></img>
            
            <img className="companyimage" src="samsung.png" style={{height:'100px'}}></img>
            <img className="companyimage" src="monday.png"></img>
            <img className="companyimage" src="segment.png" style={{height:'100px'}}></img>
            
        </div>

    </div>
    </FadeInSection>
    </>
  );
};
const styles = {
  gradientDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
    borderRadius: "10px",
    color: "white",
    // fontSize: "24px",
    fontWeight: "bold",
    background:
      "linear-gradient(135deg, #d6bbd6, #d9cae4, #e4e3ea,#c4c6dc,#9ea9c1)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default Hero;
