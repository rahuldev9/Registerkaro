import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

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

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Element name="hero">
          <Hero />
        </Element>
        <FadeInSection>
          <Element name="services">
            <Services />
          </Element>
        </FadeInSection>
        <FadeInSection>
          <Element name="about">
            <About />
          </Element>
        </FadeInSection>
        <FadeInSection>
          <Element name="clients">
            <Clients />
          </Element>
        </FadeInSection>
        <FadeInSection>
            <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Element name="faq">
            <FAQ />
          </Element>
        </FadeInSection>
        <Element name="contactus">
        <Footer />
          </Element>
        
      </div>
    </Router>
  );
};

export default App;
