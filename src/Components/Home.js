// Home.js
import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import NavBar from "./Nav";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import CountUp from "react-countup";
import IMG1 from "../Images/hero1.svg";
import IMG2 from "../Images/hero2.svg";
import IMG3 from "../Images/hero3.svg";
import IMG4 from "../Images/hero4.svg";
import IMG5 from "../Images/hero5.svg";
import { FaPlane, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <div
        style={{
          background: `linear-gradient(135deg, #1D001B 0%, #3D0039 50%, #2A0028 100%)`,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        <section
          className="section pb-0 hero-section flex-grow-1 d-flex align-items-end"
          id="home"
        >
          <div className="bg-overlay bg-overlay-pattern"></div>
          <Container className="mb-5">
            <Row className="justify-content-center">
              <Col xs={12} sm={10} lg={8}>
                <div className="text-center text-light">
                  <p>SOLBET</p>
                  <h1
                    className={`display-10 fw-bold mb-3 text-light lh-base custom-title ${
                      animate ? "animate-slide-in" : ""
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    The Future of Decentralized <span className="" style={{ color: "#CB25CF" }}>Betting</span> on Solana
                  </h1>
                  <p>Join the revolution in betting and experience a platform where innovation meets reliability. Sign up for SolBet today and place your bets in a secure, fast, and decentralized environment.</p>
                  <div className="mt-4 mb-5">
                    <Button color="primary" className="me-2">Get Started</Button>
                    <Button color="secondary" outline>Learn More</Button>
                  </div>
                  <div className="d-flex justify-content-center flex-wrap">
                    <img src={IMG1} alt="Image 1" className="img-fluid mx-2 mb-3" style={{maxWidth: '150px'}} />
                    <img src={IMG2} alt="Image 2" className="img-fluid mx-2 mb-3" style={{maxWidth: '150px'}} />
                    <img src={IMG3} alt="Image 3" className="img-fluid mx-2 mb-3" style={{maxWidth: '150px'}} />
                    <img src={IMG4} alt="Image 4" className="img-fluid mx-2 mb-3" style={{maxWidth: '150px'}} />
                    <img src={IMG5} alt="Image 5" className="img-fluid mx-2 mb-3" style={{maxWidth: '150px'}} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;