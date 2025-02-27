import React, { useState } from "react";

const Services = () => {
  return (
    <section>
      <div
        style={{ backgroundColor: "#FAFAFA", height: "100%", margin: "50px" }}
      >
        <div style={{ textAlign: "center", color: "#EB8D15" }}>
          WELCOME TO REGISTERKARO.IN
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "30px" }}>Explore Our Services</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",

            flexWrap: "wrap",
          }}
        >
          <div className="div-content">
            <i
              class="fa-solid fa-gear"
              style={{
                position: "relative",
                top: "40px",
                fontSize: "20px",
                color: "#FFA229",
              }}
            ></i>
            <div>
              <i
                class="fa-solid fa-laptop-code"
                style={{
                  marginTop: "30px",
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Company Formation</h4>
            <p style={{ width: "250px" }}>
              Build web-based solutions that enhance customer experience.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
          <div className="div-content">
            <i
              class="fa-solid fa-chart-simple"
              style={{
                position: "relative",
                top: "49px",
                fontSize: "20px",
                color: "#FFA229",
              }}
            ></i>
            <i
              class="fa-solid fa-magnifying-glass"
              style={{
                position: "relative",
                top: "40px",
                left: "30px",
                fontSize: "20px",
                color: "#FFA229",
              }}
            ></i>
            <div>
              <i
                class="fa-solid fa-laptop"
                style={{
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Company Secretarial Services</h4>
            <p style={{ width: "250px" }}>
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
          <div className="div-content">
            <div>
              <i
                class="fa-solid fa-users"
                style={{
                  marginTop: "40px",
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Virtual Office Address</h4>
            <p style={{ width: "250px" }}>
              Foster customer relationships by effectively serving your market.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
          <div className="div-content">
            <div>
              <i
                class="fa-solid fa-cubes"
                style={{
                  marginTop: "40px",
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Annual Compliance Services</h4>
            <p style={{ width: "250px" }}>
              Turn your ideas into modern products with our design experts.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
          <div className="div-content">
            <div>
              <i
                class="fa-solid fa-cart-shopping"
                style={{
                  marginTop: "40px",
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Company Formation</h4>
            <p style={{ width: "250px" }}>
              Build web-based solutions that enhance customer experience.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
          <div className="div-content">
            <i
              class="fa-solid fa-bullhorn"
              style={{
                position: "relative",
                top: "40px",
                fontSize: "20px",
                color: "#FFA229",
              }}
            ></i>
            <div>
              <i
                class="fa-solid fa-laptop"
                style={{
                  position: "relative",
                  top: "10px",
                  fontSize: "40px",
                  color: "#FFA229",
                }}
              ></i>
            </div>
            <h4>Bookkeeping Services</h4>
            <p style={{ width: "250px" }}>
              Steering user behaviours with creative design, data insights &
              technology.
            </p>
            <p>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
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
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
