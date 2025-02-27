import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
const Footer = () => {
  return (
    <>
    <FadeInSection>
      <div style={styles.gradientDiv}>
        <div style={{ marginLeft: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <h3>1% OF THE INDUSTRY</h3>
            <h1 style={{ color: "white" }}>
              Welcome to your new digital reality. Now.
            </h1>
            <form
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px",
                flexWrap:'wrap'
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "250px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#FFA229",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%,',margin:'40px',flexWrap:'wrap',width:'100%'}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#FFFFFF'}}>
                <i class="fa-solid fa-circle-check"></i>
                <p style={{color:'#FFFFFF'}}>Instant results</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#FFFFFF'}}>
                <i class="fa-solid fa-circle-check"></i>
                <p style={{color:'#FFFFFF'}}>User-friendly interface</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',color:'#FFFFFF'}}>
                <i class="fa-solid fa-circle-check"></i>
                <p style={{color:'#FFFFFF'}}>Personalized customization</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div style={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img className="companyimage" src="coinbase.png"></img>
          <img className="companyimage" src="spotify.png"></img>
          <img className="companyimage" src="Slack.png"></img>
          <img
            className="companyimage"
            src="/images/dropbox.png"
            style={{ height: "100px" }}
          ></img>
          <img className="companyimage" src="webflow.png"></img>
          <img
            className="companyimage"
            src="zoom.png"
            style={{ height: "100px" }}
          ></img>
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <section>
        <div style={{ height: "auto", backgroundColor: "#1C4670" }}>
          <div style={{ margin: "30px",display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexWrap:'wrap' }}>
            <div style={{height:'100%',width:'200px'}}>
                <p style={{color:'white'}}>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
                <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <i class="fa-brands fa-facebook" style={{fontSize:'20px',color:'white'}}></i>
                
                <i class="fa-brands fa-google" style={{fontSize:'20px',color:'white'}}></i>
                <i class="fa-brands fa-apple" style={{fontSize:'20px',color:'white'}}></i>
                <i class="fa-brands fa-instagram" style={{fontSize:'20px',color:'white'}}></i>
                </div>
            </div>
            <div style={{height:'300px',margin:'10px',width:'200px'}}>
                <h3 style={{color:'#FFA229'}}>START A BUSINESS</h3>
                <p style={{color:'#FFFFFF'}}>Features</p>
                <p style={{color:'#FFFFFF'}}>Solutions</p>
                <p style={{color:'#FFFFFF'}}>Integrations</p>
                <p style={{color:'#FFFFFF'}}>Enterprise</p>
                <p style={{color:'#FFFFFF'}}>Solutions</p>
            </div>
            <div style={{height:'300px',margin:'10px',width:'200px'}}>
                <h3 style={{color:'#FFA229'}}>GOVERNMENT REGISTRATION</h3>
                <p style={{color:'#FFFFFF'}}>Partners</p>
                <p style={{color:'#FFFFFF'}}>Community</p>
                <p style={{color:'#FFFFFF'}}>Developers</p>
                <p style={{color:'#FFFFFF'}}>App</p>
                <p style={{color:'#FFFFFF'}} >Blog</p>
            </div>
            <div style={{height:'300px',margin:'10px',width:'200px'}}>
                <h3 style={{color:'#FFA229'}}>COMPLIANCE & TAX</h3>
                <p style={{color:'#FFFFFF'}}>Channels</p>
                <p style={{color:'#FFFFFF'}}>Scale</p>
                <p style={{color:'#FFFFFF'}}>Watch the Demo</p>
                <p style={{color:'#FFFFFF'}}>Our Competition</p>
                
            </div>
            <div style={{height:'300px',margin:'10px',width:'200px'}}>
                <h3 style={{color:'#FFA229'}}>BIS & CDSCO</h3>
                <p style={{color:'#FFFFFF'}}>About Us</p>
                <p style={{color:'#FFFFFF'}}>News</p>
                <p style={{color:'#FFFFFF'}}>Leadership</p>
                <p style={{color:'#FFFFFF'}}>Media Kit</p>
                
            </div>
          </div>
          <div style={{height:'100px',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center'}}>
            <div style={{backgroundColor:'#FFA229',height:'50px',width:"50px",borderRadius:'50%'}}>
            <a href="" ><Link to="hero" smooth={true} duration={500}>
            <i class="fa-solid fa-arrow-up" style={{position:'relative',top:'15px',left:'18px',fontSize:'20px'}}></i>
          </Link></a>
            
            
            </div>
            <p>© 2024 Registerkaro. All Rights Reserved.</p>
        
      </div>
        </div>
        
      </section>
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
    background: "linear-gradient(135deg, #FFA229, #1C4670)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};
export default Footer;
