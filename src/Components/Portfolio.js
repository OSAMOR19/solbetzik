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
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center pt-5 text-light mb-5">
                <h1
                  className="fw-bold"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  About us
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center gy-4">
            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiVipCrownFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Decentralization</span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        SolBet leverages the Solana blockchain to offer a
                        decentralized betting platform, ensuring no central
                        authority controls the operations.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiGlobalFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Transparent</span>
                      <p
                        className="card-text mt-2 mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        All bets and transactions are recorded on the
                        blockchain, providing transparency and verifiability.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiTimeFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Security</span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Betting operations are managed by smart contracts on the
                        Solana blockchain, which automate processes and reduce
                        the risk of fraud.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>

          <Row className="justify-content-center gy-4">
            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiVipCrownFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Dataprotection</span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        User data and transaction details are secured using
                        blockchain technology, protecting against tampering and
                        unauthorized access.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiGlobalFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Low Fees</span>
                      <p
                        className="card-text mt-2 mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Solana’s low transaction fees minimize costs for placing
                        bets and transferring funds.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiTimeFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>High Speed</span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        The platform benefits from Solana’s high-speed
                        transactions, allowing for quick bet placements and
                        payouts.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>

          <Row className="justify-content-center gy-4">
            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiUserAddFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Wallet Integration</span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Users can participate in betting without the need for
                        intermediaries, which reduces costs and increases
                        engagement.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade in={open}>
                <Card
                  className="card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <RiUserAddFill
                          size={55}
                          className="mb-3 pb-2 text-light"
                        />
                      </div>
                      <span style={textStyle}>Community </span>
                      <p
                        className="card-text mb-1 text-center text-light"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Targeted towards betting enthusiasts, crypto users, and
                        Solana community members, fostering a vibrant user base.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
