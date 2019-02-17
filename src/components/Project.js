import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} 
  from 'reactstrap';
import ProjModal from './ProjModal';
import '../styles/index.scss';

const Project = () => (

  <Card className="proj-card">
    <Row>
      <Col sm="6">
        <Card className="proj-card__proj">
          <CardImg
            top
            width="100%"
            height="320px"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle className="text-center">DevGab</CardTitle>
            <CardSubtitle>Lorem ipsum dolor sit amet consectetur.</CardSubtitle>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <ProjModal/>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-card__proj">
          <CardImg
            top
            width="100%"
            height="320px"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle className="text-center">DevGab</CardTitle>
            <CardSubtitle>Lorem ipsum dolor sit amet consectetur.</CardSubtitle>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <ProjModal/>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-card__proj">
          <CardImg
            top
            width="100%"
            height="320px"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle className="text-center">DevGab</CardTitle>
            <CardSubtitle>Lorem ipsum dolor sit amet consectetur.</CardSubtitle>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <ProjModal/>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-card__proj">
          <CardImg
            top
            width="100%"
            height="320px"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <CardBody>
            <CardTitle className="text-center">DevGab</CardTitle>
            <CardSubtitle>Lorem ipsum dolor sit amet consectetur.</CardSubtitle>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <ProjModal/>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
  </Card>
);

export default Project;