import React from 'react';
//import { Link } from 'gatsby';
import {  Button, Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
//import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
import '../styles/index.scss';

//const Project = ({ title, slug, body, fluid }) => (
const Project = (props) => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </Card>
        </Col>
        <Col sm="6">
          <Card body className="project">
            <CardTitle className="project__title text-center">DevGab</CardTitle>
            <ul className="project__desc">
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, illum.</li>
            </ul>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};


export default Project;