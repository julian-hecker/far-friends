import React, { useState } from "react";
import {
    FormGroup,
    ListGroup,
    Button,
    Container,
    Form,
    Card,
    Col,
    Row,
} from "react-bootstrap";
import classes from "./UserFilter.module.css";

const check = (e) => {
    e.preventDefault();
    console.log(e.target.value);
};

export const SearchPage = () => {
    return (
        <Container className="p-0">
            <Form className={classes.filterForm}>
                <Form.Group>
                    <Form.Label>
                        <strong>User Name</strong>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="userName"
                        placeholder="joe123"
                    />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>
                        <strong>Age</strong>
                    </Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                type="number"
                                name="ageMin"
                                placeholder="Min Age"
                                min="18"
                                max="130"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                name="ageMax"
                                placeholder="Max Age"
                                min="18"
                                max="130"
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>
                        <strong>Gender</strong>
                    </Form.Label>
                    <br />
                    <Form.Check inline label="Male" type="radio" name="gender" value="male" />
                    <Form.Check inline label="Female" type="radio" name="gender" value="female" />
                    <Form.Check inline label="Any" type="radio" name="gender" value="" checked />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label><strong>Location</strong></Form.Label>
                    <Form.Control as="select" >
                        <option disabled selected>Choose Country...</option>
                        {/* Country list goes here */}
                    </Form.Control>
                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label><strong>Language</strong></Form.Label>
                    <Form.Control as="select" name="languages" >
                        <option disabled selected>Choose Language...</option>
                        {/* Language list goes here */}
                    </Form.Control>

                </Form.Group>
                <hr />
                <Form.Group>
                    <Form.Label>
                        <strong>Other</strong>
                    </Form.Label>
                    <br />
                    <Form.Check inline label="Must have photo" type="checkbox" name="photo" value="photosOnly"/>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SearchPage;
