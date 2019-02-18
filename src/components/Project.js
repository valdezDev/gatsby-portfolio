import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} 
  from 'reactstrap';
import Video from './Video';
import '../styles/index.scss';

const Project = () => (

  <Card className="container-card">
    
    <Row>
      <Col sm="6">
        <Card className="proj-img">
          <CardImg
            top
            className="proj-img__img"
            width="100%"
            height="100%"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc">
          <CardBody className="proj-desc__body">
            <CardTitle className="proj-desc__title text-center">DevGab</CardTitle>
            <CardSubtitle className="proj-desc__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc__demo-button">Try Demo</Button>
            <Button className="proj-desc__git-button">
            <i class="fas fa-code" /> Source Code
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-img">
          <CardImg
            top
            className="proj-img__img"
            width="100%"
            height="100%"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc">
          <CardBody className="proj-desc__body">
            <CardTitle className="proj-desc__title text-center">Hacker News Search</CardTitle>
            <CardSubtitle className="proj-desc__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc__demo-button">Try Demo</Button>
            <Button className="proj-desc__git-button">
            <i class="fas fa-code" /> Source Code
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-img">
          <CardImg
            top
            className="proj-img__img"
            width="100%"
            height="100%"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc">
          <CardBody className="proj-desc__body">
            <CardTitle className="proj-desc__title text-center">Dev Blog</CardTitle>
            <CardSubtitle className="proj-desc__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc__demo-button">Try Demo</Button>
            <Button className="proj-desc__git-button">
            <i class="fas fa-code" /> Source Code
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="6">
        <Card className="proj-img">
          <CardImg
            top
            className="proj-img__img"
            width="100%"
            height="100%"
            src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/11/RTXZ3DT-e1487891078282-1024x629.jpg"
          />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc">
          <CardBody className="proj-desc__body">
            <CardTitle className="proj-desc__title text-center">Portfolio</CardTitle>
            <CardSubtitle className="proj-desc__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc__demo-button">Try Demo</Button>
            <Button className="proj-desc__git-button">
            <i class="fas fa-code" /> Source Code
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Card>
);

export default Project;