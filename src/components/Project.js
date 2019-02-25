import React from 'react';
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
    
    <Row className="row-a">
      <Col sm="6">
        <Card className="proj-video">
          <ProjVideo />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc-a">
          <CardTitle className="proj-desc-a__title text-center"># DevGab</CardTitle>
          <CardBody className="proj-desc-a__body">
            <CardSubtitle className="proj-desc-a__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc-a__list">
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc-a__demo-button">
              <a
                className="proj-desc-a__button-link"
                href="https://afternoon-waters-74578.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc-a__git-button">
              <i class="fas fa-code proj-desc-a__code-icon" />
              <a
                className="proj-desc-a__button-link"
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
        <Card className="proj-desc-b">
        <CardTitle className="proj-desc-b__title text-center"># Hacker News Search</CardTitle>
          <CardBody className="proj-desc-b__body">
            
            <CardSubtitle className="proj-desc-b__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc-b__list">
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc-b__demo-button">
              <a
                className="proj-desc-b__button-link"
                href="https://placeholder.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc-b__git-button">
              <i class="fas fa-code proj-desc-b__code-icon" />
              <a
                className="proj-desc-b__button-link"
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

    <Row className="row-a">
      <Col sm="6">
        <Card className="proj-video">
          <ProjVideo />
        </Card>
      </Col>
      <Col sm="6">
        <Card className="proj-desc-a">
        <CardTitle className="proj-desc-a__title text-center"># Developer Blog</CardTitle>
          <CardBody className="proj-desc-a__body">
            <CardSubtitle className="proj-desc-a__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc-a__list">
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc-a__demo-button">
              <a
                className="proj-desc-a__button-link"
                href="https://unruffled-bartik-96bf86.netlify.com/"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc-a__git-button">
              <i class="fas fa-code proj-desc-a__code-icon" />
              <a
                className="proj-desc-a__button-link"
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
        <Card className="proj-desc-b">
        <CardTitle className="proj-desc-b__title text-center"># Developer Portfolio</CardTitle>
          <CardBody className="proj-desc-b__body">
            <CardSubtitle className="proj-desc-b__subtitle text-center">Lorem ipsum dolor sit amet consectetur.</CardSubtitle> <br/>
            <ul className="proj-desc-b__list">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem reprehenderit? Quasi.</li>
            </ul>
            <Button className="proj-desc-b__demo-button">
              <a
                className="proj-desc-b__button-link"
                href="valdezDev.tech"
                target="_blank"
                rel="noopener noreferrer" >
                Try Demo
              </a>
            </Button>
            <Button className="proj-desc-b__git-button">
              <i class="fas fa-code proj-desc-b__code-icon" />
              <a
                className="proj-desc-b__button-link"
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