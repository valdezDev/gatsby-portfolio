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
import ProjVideo from './ProjVideo';
import '../styles/index.scss';

const Project = () => (

  <Card className="container-card">
    
    <Row>
      <Col sm="6">
        <Card className="proj-video">
          <ProjVideo />
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
        <Card className="proj-video">
        <ProjVideo />
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
        <Card className="proj-video">
          <ProjVideo />
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
        <Card className="proj-video">
          <ProjVideo />
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