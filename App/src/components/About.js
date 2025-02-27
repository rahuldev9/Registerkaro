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
const About = () => {
  return (
    <>
    <FadeInSection>
      <section>
        <div style={{ height: "100%", margin: "50px" }}>
          <div style={{ textAlign: "start", color: "#EB8D15" }}>
            <p style={{ color: "#EB8D15" }}> WELCOME TO REGISTERKARO.IN</p>
          </div>
          <h1 style={{ fontSize: "30px" }}>
            About <strong style={{ color: "#EB8D15" }}>Register Karo</strong>
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "700px" }}>
              <p>
                We have been using Intelegencia as our DevOps vendor for our
                field service applications over the last couple of years and I’m
                extremely pleased with their performance, ability to execute,
                and willingness to adapt in our ever changing environment. Perry
                is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently
                delivered on projects thereby exceeding everyone’s expectations.
                I would strongly recommend their services to any organization
                that is looking for solid, reliable, and predictable outcomes.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <img
                src="members.jpg"
                alt="Homepage"
                style={{ maxWidth: "100%", height: "300px", width: "500px" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
            <p style={{ color: "#FFFFFF" }}>
              Learn more <i class="fa-solid fa-circle-arrow-right"></i>
            </p>
          </button>
        </div>
      </section>
      <section>
        <div style={{ height: "100%", margin: "50px" }}>
          <div style={{ textAlign: "start", color: "#EB8D15" }}>
            <p style={{ color: "#EB8D15" }}> WHY REGISTERKARO.IN</p>
          </div>
          <h1 style={{ fontSize: "30px" }}>Why Choose Register Karo</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "700px" }}>
              <p>
                It is with consistent services and results that build trust with
                the people and that in turn help us to serve the business
                better.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",

                flexWrap: "wrap",
              }}
            >
              <div
                className="div-contents"
                style={{ backgroundColor: "#FEF3EF" }}
              >
                <div>
                  <i
                    class="fa-solid fa-shield-halved"
                    style={{
                      position: "relative",
                      top: "10px",
                      fontSize: "40px",
                      color: "#F45C20",
                    }}
                  ></i>
                </div>
                <h4>Confidential & Safe</h4>
                <p style={{ width: "250px" }}>
                  All your private information is safe with us
                </p>
              </div>
              <div
                className="div-contents"
                style={{ backgroundColor: "#F1FBF3" }}
              >
                <div>
                  <i
                    class="fa-solid fa-circle-check"
                    style={{
                      position: "relative",
                      top: "10px",
                      fontSize: "40px",
                      color: "#3DCD5C",
                    }}
                  ></i>
                </div>
                <h4>No Hidden Fee</h4>
                <p style={{ width: "250px" }}>
                  Everything is put before you with no hidden charges or
                  conditions
                </p>
              </div>
            </div>
            <FadeInSection>
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
                  justifyContent: "right",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <div
                  className="div-contents"
                  style={{ backgroundColor: "#EDF3FF" }}
                >
                  <div>
                    <i
                      class="fa-solid fa-face-smile"
                      style={{
                        position: "relative",
                        top: "10px",
                        fontSize: "40px",
                        color: "#2F6AE1",
                      }}
                    ></i>
                  </div>
                  <h4>Guaranteed Satisfaction</h4>
                  <p style={{ width: "250px" }}>
                    We ensure that you stay 100% satisfied with our offered
                    services
                  </p>
                </div>
                <div
                  className="div-contents"
                  style={{ backgroundColor: "#FBF1FB" }}
                >
                  <div>
                    <i
                      class="fa-solid fa-user-tie"
                      style={{
                        position: "relative",
                        top: "10px",
                        fontSize: "40px",
                        color: "#D5414F",
                      }}
                    ></i>
                  </div>
                  <h4>Expert CA/CS Assistance</h4>
                  <p style={{ width: "250px" }}>
                    Prompt support from our in-house expert professionals
                  </p>
                </div>
                <div
                  className="div-contents"
                  style={{ backgroundColor: "#27AE600A" }}
                >
                  <div>
                    <i
                      class="fa-solid fa-shield-halved"
                      style={{
                        position: "relative",
                        top: "10px",
                        fontSize: "40px",
                        color: "#F45C20",
                      }}
                    ></i>
                  </div>
                  <h4>Confidential & Safe</h4>
                  <p style={{ width: "250px" }}>
                    All your private information is safe with us
                  </p>
                </div>
              </div>
            </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      </FadeInSection>
      <FadeInSection>
      <section>
        <div style={{ height: "auto", backgroundColor: "#1C4670" }}>
          <div style={{ margin: "50px" }}>
            <h1 style={{ fontSize: "30px", color: "#FFFFFF" }}>
              Our Video Introductions
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <div style={{ minWidth: "300px" }}>
                <p style={{ color: "#FFFFFF" }}>
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                  magna vulputate pellentesque a diam tincidunt apis dui.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <i
                    class="fa-solid fa-lightbulb"
                    style={{
                      position: "relative",

                      left: "28px",
                      fontSize: "20px",
                      color: "#FFFFFF",
                    }}
                  ></i>
                  <div>
                    <i
                      class="fa-solid fa-circle"
                      style={{
                        fontSize: "40px",
                        color: "#FFA229",
                      }}
                    ></i>
                  </div>
                  <div style={{ paddingLeft: "20px" }}>
                    <h1 style={{ color: "#FFFFFF" }}>Explore ideas together</h1>
                    <p style={{ color: "#FFFFFF" }}>
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <i
                    class="fa-solid fa-laptop"
                    style={{
                      position: "relative",
                      left: "32px",
                      fontSize: "20px",
                      color: "#FFFFFF",
                    }}
                  ></i>
                  <div>
                    <i
                      class="fa-solid fa-circle"
                      style={{
                        fontSize: "40px",
                        color: "#FFA229",
                      }}
                    ></i>
                  </div>
                  <div style={{ paddingLeft: "20px" }}>
                    <h1 style={{ color: "#FFFFFF" }}>
                      Bring those ideas to life
                    </h1>
                    <p style={{ color: "#FFFFFF" }}>
                      Engage audience segments and finally create actionable
                      insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "500px",
                  height: "300px",
                }}
              >
                {/* Background Image */}
                <img
                  src="play.jpg"
                  alt="Homepage"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Overlay Image */}
                <img
                  src="youtube.png"
                  alt="Overlay"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "100px",
                    top: "50%", // Center vertically
                    left: "50%", // Center horizontally
                    transform: "translate(-50%, -50%)", // Perfect centering
                    cursor:'pointer'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInSection>
    </>
  );
};
export default About;
