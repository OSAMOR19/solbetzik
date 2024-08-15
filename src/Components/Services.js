import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, CardBody, Fade } from "react-bootstrap";
import {
  RiVipCrownFill,
  RiGlobalFill,
  RiTimeFill,
  RiUserAddFill,
} from "react-icons/ri"; // Import Remix icons

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    background: `linear-gradient(135deg, #1D001B 0%, #3D0039 20%, #2A0028 100%)`,
    borderRadius: "25px",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
  };

  const textStyle = {
    color: "#7F1BFF",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className=""
        style={{
          background: `linear-gradient(135deg, #1D001B 0%, #3D0039 50%, #2A0028 100%)`,
          paddingTop: "0",
        }}
      >
        <Container>
          
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
