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
const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "It depends on which software you're referring to. If you're asking about built-in Windows or macOS features, you might be able to recover deleted files from the Recycle Bin (Windows) or Trash (Mac) if they haven't been permanently deleted.",
    },
    {
      id: 2,
      question: "Does this software support external drives?",
      answer:
        "Yes, most recovery software can scan and restore files from external hard drives, USBs, and SD cards.",
    },
    {
      id: 3,
      question: "Is this software free to use?",
      answer:
        "Some recovery software offers a free version with limited features, while others require a paid license.",
    },
    {
      id: 4,
      question: "How long does the recovery process take?",
      answer:
        "The duration depends on the drive size and the scanning method used (quick scan vs. deep scan).",
    },
    {
      id: 5,
      question: "Can I recover files deleted a long time ago?",
      answer:
        "If the data hasn't been overwritten, there's a chance you can still recover old deleted files.",
    },
  ]);

  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
    <FadeInSection>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>{faq.question}</p>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className={`fa-solid ${
                      openFaqId === faq.id
                        ? "fa-chevron-down"
                        : "fa-greater-than"
                    }`}
                  ></i>
                </button>
              </div>
              {openFaqId === faq.id && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
        <button className="show-more">Show more →</button>
      </div>
      </FadeInSection>
      <FadeInSection>
      <section>
        <div style={{ height: "auto", backgroundColor: "#1C4670" }}>
          <div style={{ margin: "50px" }}>
            <h1 style={{ fontSize: "30px", color: "#FFFFFF" }}>
              Manage Your Services by your Mobile Phone
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
                  Download our app to manage and track your services. Our app
                  enables you to stay in touch with our experts and aids you in
                  tracking your progress.
                </p>
                <p style={{ color: "white",marginTop:'60px'}}>Get the App</p>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start'}}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor:'#FFFFFF',
                    height:'50px'
                    ,margin:'10px'
                  }}
                >
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'100px'}}>
                  <i class="fa-brands fa-apple" style={{fontSize:'40px',paddingLeft:'5px',color:'#A5C937'}}></i>
                   <div>
                   <p style={{ color: 'black',fontSize:'10px'}}>Get it on</p>
                   <h1 style={{ color: 'black',fontSize:'13px'}}>App Store</h1>
                   </div>
                    
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor:'#FFFFFF',
                    height:'50px'
                    ,margin:'10px'
                  }}
                >
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'150px'}}>
                  <i class="fa-brands fa-google-play" style={{fontSize:'30px',paddingLeft:'5px',color:'#A5C937'}}></i>
                   <div>
                   <p style={{ color: 'black',fontSize:'10px'}}>Get it on</p>
                   <h1 style={{ color: 'black',fontSize:'13px'}}>Google Play</h1>
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
      <FadeInSection>
      <section>
        <div style={{ height: "auto", backgroundColor: "#FFFFFF"}}>
          <div style={{ margin: "50px"}}>
            <p style={{textAlign:'center',color:'#EB8D15'}}>WHY REGISTER KARO</p>
            <h1 style={{ fontSize: "30px", color: "black",textAlign:'center'}}>
              Manage Your Services by your Mobile Phone
            </h1>
            <div style={{margin:'50px',height:'100%',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>1M+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>Customers</p>
                </div>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>12+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>Years of Excellence</p>
                </div>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>41+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>R&D Engineers</p>

                </div>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>78+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>Countries</p>
                </div>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>3287+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>PARTNERS</p>
                </div>
                <div style={{height:'100px',width:'100px',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                    <h1 style={styles.gradientText}>41+</h1>
                    <p style={{position:'relative',bottom:'30px',textAlign:'center'}}>Awards Received</p>
                </div>
                
            </div>
          </div>
        </div>
        
      </section>
      </FadeInSection>
      
    </>
  );
};

const styles = {
    gradientText: {
      background: "linear-gradient(135deg, #F53843, #2F5795, #2F5795)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    }
  };
  
export default FAQ;
