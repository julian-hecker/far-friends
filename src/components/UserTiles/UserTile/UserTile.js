import React from "react";
import classes from "./UserTile.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import avi from "../../../assets/avi.png";
export const UserTile = () => {
  return (
    <div className={classes.Tile}>
      <span>
        <Row>
          <img
            width={150}
            height={"auto"}
            className="m-1"
            src={avi}
            alt="Generic placeholder"
          />

          <Col className={classes.Info}>
            <Row>First Name Last Name</Row>
            <Row>This is my location</Row>
            <Row>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Row>
          </Col>
          <Col>2</Col>
          <Row>2</Row>
        </Row>
        <Row>
          <p className="pl-4">Online Now</p>
        </Row>
      </span>
    </div>
  );
};

export default UserTile;
