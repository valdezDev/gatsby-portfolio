import React from 'react';
import { Link } from 'gatsby';
import {
  Button,
  Card,
  CardBody,
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
            <Button className="proj-desc__demo-button">
              <a
                className="proj-desc__button-link"
                href="https://afternoon-waters-74578.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc__git-button">
              <i class="fas fa-code proj-desc__code-icon" />
              <a
                className="proj-desc__button-link"
                href="https://github.com/valdezDev/devgab"
                target="_blank"
                rel="noopener noreferrer" >
                  Source Code
              </a>
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
            <Button className="proj-desc__demo-button">
              <a
                className="proj-desc__button-link"
                href="https://placeholder.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc__git-button">
              <i class="fas fa-code proj-desc__code-icon" />
              <a
                className="proj-desc__button-link"
                href="https://github.com/valdezDev/hacker-news-search-app"
                target="_blank"
                rel="noopener noreferrer" >
                  Source Code
              </a>
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
            <CardTitle className="proj-desc__title text-center">Developer Blog</CardTitle>
            <CardSubtitle className="proj-desc__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc__demo-button">
              <a
                className="proj-desc__button-link"
                href="https://unruffled-bartik-96bf86.netlify.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc__git-button">
              <i class="fas fa-code proj-desc__code-icon" />
              <a
                className="proj-desc__button-link"
                href="https://github.com/valdezDev/gatsby-blog"
                target="_blank"
                rel="noopener noreferrer" >
                  Source Code
              </a>
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
            <Button className="proj-desc__demo-button">
              <a
                className="proj-desc__button-link"
                href="valdezDev.tech"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc__git-button">
              <i class="fas fa-code proj-desc__code-icon" />
              <a
                className="proj-desc__button-link"
                href="https://github.com/valdezDev/gatsby-portfolio"
                target="_blank"
                rel="noopener noreferrer" >
                  Source Code
              </a>
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>

  </Card>
);

export default Project;