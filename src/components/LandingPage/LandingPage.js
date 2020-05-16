import React, { useContext, useEffect } from "react";
import { userContext } from "../../userContext";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import DetailedMap from "../WorldMapCOVID19/DetailedMap";
import RegisterModal from "../Modal/RegisterModal";
import classes from "./LandingPage.module.css";
import { testdatacall } from "../../testDataCall";

const LandingPage = () => {
  const { userInfo, setUserInfo } = useContext(userContext);

  useEffect(() => {
    setTimeout(async () => {
      const data = await testdatacall();
      await setUserInfo(data);
      console.log(data);
    }, 2000);
  }, []);

  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <Card className="p-3">
            <Form>
              <Card.Title>Sign In, Get connected</Card.Title>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <RegisterModal />
            </Form>
          </Card>
          <h1>We are all in this togehter</h1>
        </Col>
        <Col sm={6} md={8} lg={9}>
          <DetailedMap />
        </Col>
      </Row>

      {userInfo === null ? (
        ""
      ) : (
        <>
          <Card className="p-3">
            <Row className={classes.usersOnlineContainer}>
              {userInfo.map((res) => (
                <Col xs={4} lg={2}>
                  <div className={classes.usersOnline}>
                    <Image rounded src={res.photo} alt="" />
                    <Row className={classes.center}>
                      <Col xs={10} sm={7}>
                        <h6>{res.firstname}</h6>
                      </Col>
                      <Col xs={0}>
                        <div id={classes.circle}></div>
                      </Col>
                    </Row>
                    <h6>Uzbekistan</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </>
      )}
    </Container>
  );
};

export default LandingPage;
