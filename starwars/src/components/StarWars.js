import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Col
  } from "reactstrap";



const StarWars = (props) => {
      //console.log("card"); 
      return (

<Col xs="6" md="4" xl="3">
      <Card>
        <CardBody>
            <CardHeader>{props.char.name}</CardHeader>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <CardText>Hair Color: {props.char.hair_color}</CardText>
          <CardText>Height: {props.char.height}</CardText>
          <CardText>Mass: {props.char.mass}</CardText>
          <CardText>Skin Color: {props.char.skin_color}</CardText>
        </CardBody>
      </Card>
    </Col>

      );
  };
  
  export default StarWars;