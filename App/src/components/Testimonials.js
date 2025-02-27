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
const Testimonials = () => {
    
  return (
    <FadeInSection>
    <section>
      <div style={{ height: "auto", backgroundColor: "#1C4670" }}>
        <div style={{ margin: "50px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ minWidth: "300px" }}>
              <h1 style={{ color: "#FFFFFF" }}>What peoples says about us</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <div className="div-cont">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "right",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <div>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star-half-stroke"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <p style={{ width: "250px" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident ea commodo
                    consequat aute irure sint amet occaecat cupidatat non
                    proident
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="image.png"
                      alt="image"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3
                        style={{
                          position: "relative",
                          right: "50px",
                          top: "20px",
                        }}
                      >
                        Chris
                      </h3>
                      <p
                        style={{
                          fontSize: "10px",
                          paddingBottom: "20px",
                          left: "20px",
                        }}
                      >
                        President and CEO, PrintReach, USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="div-cont">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "right",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <div>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star-half-stroke"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <p style={{ width: "250px" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident ea commodo
                    consequat aute irure sint amet occaecat cupidatat non
                    proident
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="image.png"
                      alt="image"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3
                        style={{
                          position: "relative",
                          right: "50px",
                          top: "20px",
                        }}
                      >
                        Chris
                      </h3>
                      <p
                        style={{
                          fontSize: "10px",
                          paddingBottom: "20px",
                          left: "20px",
                        }}
                      >
                        President and CEO, PrintReach, USA
                      </p>
                    </div>
                  </div>
                </div>
                <div className="div-cont">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "right",
                      flexWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    <div>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "none",
                          margin: "1px",
                        }}
                      >
                        <i
                          class="fa-solid fa-star-half-stroke"
                          style={{ fontSize: "15px", color: "#F2994A" }}
                        ></i>
                      </button>
                    </div>
                  </div>

                  <p style={{ width: "250px" }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat aute irure
                    sint amet occaecat cupidatat non proident ea commodo
                    consequat aute irure sint amet occaecat cupidatat non
                    proident
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="image.png"
                      alt="image"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3
                        style={{
                          position: "relative",
                          right: "50px",
                          top: "20px",
                        }}
                      >
                        Chris
                      </h3>
                      <p
                        style={{
                          fontSize: "10px",
                          paddingBottom: "20px",
                          left: "20px",
                        }}
                      >
                        President and CEO, PrintReach, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
};
export default Testimonials;
