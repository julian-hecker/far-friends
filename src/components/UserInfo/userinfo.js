import React from "react";
import Media from "react-bootstrap/Media";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import avi from "../../assets/avi.png";
const userInfo = () => (
  <div>
    <Container fluid>
      <Media className=" m-2">
        <img
          width={100}
          height={100}
          className="m-5"
          src={avi}
          alt="Generic placeholder"
        />
        <Media.Body className="pt-3">
          <Row>
            <Col>
              <Row>
                <h5 className="pl-3 mr-4">Bryan B</h5>
                <p>(last seen 5 min ago)</p>
              </Row>
              <h6>United States, New York</h6>
              <h6>Speaks: English, Spanish</h6>
              <h6>Interested in: Chinese</h6>
              <h6>Speaks: English, Spanish</h6>
            </Col>
          </Row>
        </Media.Body>
      </Media>
      <Row className="p-3">
        <h2> If you can travel anywhere in the world where would it be?</h2>
      </Row>{" "}
      <p className="p-3">Canada, those moose man....</p>
      <Row className="p-3">
        <h2> What is your dream job?</h2>
      </Row>{" "}
      <p className="p-3">Astronaut</p>
      <Row className="p-3">
        <h2> What is your favorite food? </h2>
      </Row>{" "}
      <p className="p-3">Tacos</p>
      <Row className="p-3">
        <h2> What are your hobbies? </h2>
      </Row>{" "}
      <p className="p-3"> I like to knit</p>
    </Container>
  </div>
);

export default userInfo;
