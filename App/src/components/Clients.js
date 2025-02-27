import React from "react";
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
const getRandomPosition = (existingPositions, size) => {
  let newPosition;
  let attempts = 0;
  do {
    newPosition = {
      left: Math.random() * (90 - 10) + 10,
      top: Math.random() * (90 - 10) + 10,
    };
    attempts++;
    if (attempts > 50) break; // Avoid infinite loops
  } while (
    existingPositions.some(
      (pos) =>
        Math.abs(pos.left - newPosition.left) < size &&
        Math.abs(pos.top - newPosition.top) < size
    )
  );
  existingPositions.push(newPosition);
  return newPosition;
};

const Clients = () => {
  const clientLogos = [
    "/images/airtable.png",
    "/images/asana.png",
    "/images/clickup.png",
    "/images/dropbox.png",
    "/images/gitlab.png",
    "/images/heroku.png",
    "/images/intercom.png",
    "/images/notion.png",
    "/images/pinterest.png",
    "/images/shopify.png",
    "/images/trello.png",
    "/images/zendesk.png",
  ];

  const placedPositions = [];
  const size = 15; // Approximate space each image takes to avoid overlap

  return (
    <>
    <FadeInSection>
    <section>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          padding: "50px 20px",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Happy Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state-of-the-art customer service.
          </motion.p>
        </div>
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "500px",
            margin: "0 auto",
            border: "1px solid #ccc",
            overflow: "hidden",
          }}
        >
          {clientLogos.map((logo, index) => {
            const position = getRandomPosition(placedPositions, size);
            return (
              <motion.img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "auto",
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#1C4670",
              border: "none",
              borderRadius: "4%",
            }}
          >
            see more <i class="fa-solid fa-circle-arrow-right"></i>
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFA229",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            
          }}
        >
          <i class="fa-solid fa-scroll" style={{ fontSize: "30px" }}></i>
          <p style={{ paddingLeft: "5px" }}>Fill up Application Form</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <i
            class="fa-solid fa-money-check-dollar"
            style={{ fontSize: "30px" }}
          ></i>
          <p style={{ paddingLeft: "5px" }}>Make Online Payment</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <i class="fa-solid fa-user" style={{ fontSize: "30px" }}></i>
          <p style={{ paddingLeft: "5px" }}>
            Executive will Process Application
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <i class="fa-solid fa-envelope" style={{ fontSize: "30px" }}></i>
          <p style={{ paddingLeft: "5px" }}>Get Confirm Mail</p>
        </div>
      </div>
      <section>
        <div
          style={{ backgroundColor: "#FAFAFA", height: "100%", margin: "50px" }}
        >
          <div style={{ textAlign: "center", color: "#EB8D15"}}>
            EXPLORE OUR BLOGS
          </div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "30px" }}>
              Accelerate Digital Transformation
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              flexWrap: "wrap",
            }}
          >
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image1.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
                Prabhash Mishra • 1 Jan 2023 • Today
              </p>
              <h1>Small business & Startup</h1>
              <p style={{ width: "250px" }}>
                Like to know the secrets of transforming a 2-14 team into a 3x
                Super Bowl winning Dynasty?
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#6941C6" }}>Tax & Audit</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#363F72" }}>Management</p>
                </div>
              </div>
            </div>
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image2.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
              Mahesh Kumar • 1 Jan 2023
              </p>
              <h1>Scale-Up Company Offer</h1>
              <p style={{ width: "250px" }}>
              Mental models are simple expressions of complex processes or relationships.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#6941C6" }}>Tax</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#363F72" }}>Research</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#C4320A" }}>Complience</p>
                </div>
              </div>
            </div>
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image1.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
              Rakhi Verma • 1 Jan 2023
              </p>
              <h1>Growing Business Package</h1>
              <p style={{ width: "250px" }}>
              Introduction to Wireframing and its Principles. Learn from the best in the industry.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#6941C6" }}>Audit</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#363F72" }}>Money Back</p>
                </div>
              </div>
            </div>
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image3.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
              Karan Kumar • 1 Jan 2023
              </p>
              <h1>Scale-Up Company Offer</h1>
              <p style={{ width: "250px" }}>
              Collaboration can make our teams stronger, and our individual designs better.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#6941C6" }}>Money</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#363F72" }}>Management</p>
                </div>
              </div>
            </div>
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image4.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
              Richa Singh • 1 Jan 2023
              </p>
              <h1>Scale-Up Company Offer</h1>
              <p style={{ width: "250px" }}>
              JavaScript frameworks make development easy with extensive features and functionalities.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#027A48" }}>Tax Return</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#C11574" }}>News</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#C01048" }}>Audit</p>
                </div>
              </div>
            </div>
            <div className="div-client">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="image5.jpg"
                  alt="Homepage"
                  style={{ width: "auto", height: "240px" }}
                />
              </div>
              <p style={{ width: "250px" }}>
              Miss Nora• 1 Jan 2023
              </p>
              <h1>Scale-Up Company Offer</h1>
              <p style={{ width: "250px" }}>
              Starting a community doesn’t need to be complicated, but how do you get started?
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9F5FF",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#6941C6" }}>Private Company</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F8F9FC",
                    borderRadius: "5%",
                    width: "100px",
                    height: "30px",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "#363F72" }}>Customer Success</p>
                </div>
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
              Show more blogs
            </button>
          </div>
        </div>
      </section>
    </section>
    </FadeInSection>
    </>
  );
};

export default Clients;
