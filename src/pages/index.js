import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";

import dgGif from '../images/dgGif.gif';
import hnGif from '../images/hnGif.gif';
import blogGif from '../images/blogGif.gif';
import portGif from '../images/portGif.gif';
import chessGif from '../images/chessGif.gif';
import '../styles/index.scss';
import { Link } from "react-scroll";


/* eslint-disable */

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `react`, `web developer`, `fullstack`,`javascript`]} />
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h1 className="display-3 mb-4 index-intro">Paul Valdez</h1>
              <p className="lead index-intro__subtitle">Full Stack Developer</p>
              <SocialButtons />
              <Link
                className="index-intro__contact-button btn btn-outline"
                activeClass="active"
                to="contact-card__name"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1100}
              >
                Get in Touch!
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

    
    <Row className="about-row">
      <Col sm="6">
        <Card className="about-me">
          <CardBody className="about-me__body">
            <CardTitle className="about-me__title text-center"># About Paul</CardTitle>
            <CardText className="about-me__text">
            Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose, Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4, React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native.
            </CardText>
            <CardText className="about-me__text text-center">
            View my <a href="#">Resume</a>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <hr className="about-break col-md-4" />
    <h3 className="skills-header text-center"># Developer Skills</h3>
    <Container className="about-container">
      <Row className="dev-row">
        <Col sm="4">
          <Card className="frontend">
            <CardTitle className="frontend__title text-center"># Frontend</CardTitle>
            <CardText className="frontend__list-wrapper">
              <ul className="frontend__list">
                <li>//  React / Redux</li>
                <li>//  JSX / ES6 </li>
                <li>//  Gatsby</li>
                <li>//  Sass</li>
                <li>//  Bootstrap / Reactstrap</li>
                <li>//  jQuery</li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="backend">
            <CardTitle className="backend__title text-center"># Backend</CardTitle>
            <CardText className="backend__list-wrapper">
              <ul className="backend__list">
                <li>// RESTful APIs</li>
                <li>// MongoDB</li>
                <li>// NodeJS</li>
                <li>// GraphQL</li>
                <li>// ExpressJS</li>
                <li>// Python / Django</li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row className="dev-row">
        <Col sm="5">
          <Card className="tools">
            <CardTitle className="tools__title text-center"># Toolkit</CardTitle>
            <CardText className="tools__list-wrapper">
              <ul className="tools__list">
                <li>Git / Bash </li>
                <li>Visual Studio Code</li>
                <li>PostMan</li>
                <li>Enzyme, JEST</li>
                <li>mLab</li>
                <li>Heroku, Digital Ocean, Netlify</li>
                <li>NameCheap</li>
                <li>KanbanFlow, WakaTime</li>
                
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="soft-skills">
            <CardTitle className="soft-skills__title text-center"># Soft Skills</CardTitle>
            <CardText className="soft-skills__list-wrapper">
              <ul className="soft-skills__list">
                <li>Strict Time Management using the Pomodoro Technique</li>
                <li>Excellent Team Communication / Collaboration </li>
                <li>Customer Service Experience</li>
                <li>Experienced in Management</li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
                <li>Lorem ipsum dolor sit amet </li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className="proj-container">
      <h1 className="proj-header text-center"># Projects</h1>
      <Row>
        <Col sm="7">
          <Card className="proj-gif-card-a">
            <CardImg className="projGif" top src={dgGif} />
            <div class="base-overlay-a">
              <div class="demo-btn">
                <a href="https://afternoon-waters-74578.herokuapp.com/" className="btn btn-outline demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div class="source-btn">
                <a href="https://github.com/valdezDev/devgab" className="btn btn-outline source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
          <CardTitle className="proj-desc-a__title text-center text-white"># DevGab</CardTitle>
            <CardBody className="proj-desc-a__body">
              <CardSubtitle className="proj-desc-a__subtitle text-center">A social media platform meant to be a miniature version of a Linkedin and Twitter for Developers.</CardSubtitle> <br/>
              <ul className="proj-desc-a__list">
                <li>Developed this larger scale CRUD application on top of a MERN stack.</li>
                <li>This fullstack app is interfaced with a RESTful API backend written in Node and Express.</li>
                <li>Constructed and hosted a Mongoose Database that takes developer profiles and posts obtained from the REST API.</li>
                <li>Utilized JSON Web Tokens to register, log in/out, and time users out of a session.</li>
                <li>Integrated state management functionaliy using React / Redux.</li>
                <li>Designed the layout and components using Sass and Bootstrap.</li>
              </ul>
              <a
                className="proj-desc-a__button-link"
                href="https://afternoon-waters-74578.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-a__demo-button">Try Demo</Button>
              </a>
              <a
                className="proj-desc-a__button-link"
                href="https://github.com/valdezDev/devgab"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-a__git-button">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                    GitHub
                </Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row>
        <Col sm="7">
          <Card className="proj-gif-card-b">
            <CardImg className="projGif" top src={hnGif} />
            <div class="base-overlay-b">
              <div class="demo-btn">
                <a href="https://inspiring-swanson-53922f.netlify.com/" className="btn btn-outline demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div class="source-btn">
                <a href="https://github.com/valdezDev/hacker-news-search-app" className="btn btn-outline source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># Hacker News Search</CardTitle>
            <CardBody className="proj-desc-b__body">
              <CardSubtitle className="proj-desc-b__subtitle text-center">A React application that is optimized to let a user search and sort through articles posted on Hacker News.</CardSubtitle> <br/>
              <ul className="proj-desc-b__list">
                <li>Integrated Axios to fetch JSON from the Hacker News, Algolioa Search API.</li>
                <li>Lifted substates throughout the application to its various child components to keep the app lightweight.</li>
                <li>Conducted snapshot and unit tests by running both Jest and Enzyme.</li>
                <li>Designed the layout and components using Sass and Bootstrap.</li>
              </ul>
              <a
                className="proj-desc-b__button-link"
                href="https://inspiring-swanson-53922f.netlify.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-b__demo-button">
                  Try Demo
                </Button>
              </a>
              <a
                className="proj-desc-b__button-link"
                href="https://github.com/valdezDev/hacker-news-search-app"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-b__git-button">
                  <i class="fas fa-code proj-desc-b__code-icon" />
                  Github
                </Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row className="row-a">
        <Col sm="7">
          <Card className="proj-gif-card-a">
            <CardImg className="projGif" top src={blogGif} />
            <div class="base-overlay-a">
              <div class="demo-btn">
                <a href="https://unruffled-bartik-96bf86.netlify.com/" className="btn btn-outline demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div class="source-btn">
                <a href="https://github.com/valdezDev/gatsby-blog" className="btn btn-outline source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># Developer Blog</CardTitle>
            <CardBody className="proj-desc-a__body">
              <CardSubtitle className="proj-desc-a__subtitle text-center">A simple template for a blog application that one can use to get their ideas out to their readers.</CardSubtitle> <br/>
              <ul className="proj-desc-a__list">
                <li>Built using GatsbyJS.</li>
                <li>Optimized to display and paginate markdown that grabbed from the GraphQL queries in the backend.</li>
                <li> . . . . . .Every post uses Node functionality to pass and asign a unique slug based on the blog title.</li>
                <li>Constructed a Disqus component that allows users to comment on and/or share a blog post.</li>
                <li>Designed the layout and components using Sass and Bootstrap.</li>
              </ul>
              <a
                className="proj-desc-a__button-link"
                href="https://unruffled-bartik-96bf86.netlify.com/"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-a__demo-button">Try Demo</Button>
              </a>
              <a
                className="proj-desc-a__button-link"
                href="https://github.com/valdezDev/gatsby-blog"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-a__git-button">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                    GitHub
                </Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row>
        <Col sm="7">
          <Card className="proj-gif-card-b">
            <CardImg className="projGif" top src={portGif} />
            <div class="base-overlay-b">
            <div class="demo-btn">
                <a href="https://spenserkearns.com/" className="btn btn-outline demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Other Example
                </a>
              </div>
              <div class="source-btn">
                <a href="https://github.com/valdezDev/gatsby-portfolio" className="btn btn-outline source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-desc-a__code-icon" />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># valdezDev.com</CardTitle>
            <CardBody className="proj-desc-b__body">
              <CardSubtitle className="proj-desc-b__subtitle text-center">A static portfolio template one can use to broadcast their work.</CardSubtitle> <br/>
              <ul className="proj-desc-b__list">
                <li>Built these static websites using GatsbyJS.</li>
                <li>Incorporated smooth scroll animations using React Scroll.</li>
                <li>Applied form validation that's being carried out with Netlify.</li>
                <li>Deployed and secured these domains with TLS certificates using Netlify.</li>
                <li>Designed the layouts and components using Sass and Bootstrap.</li>
              </ul>
              <a
                className="proj-desc-a__button-link"
                href="https://spenserkearns.com"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-a__demo-button">Try Other Example</Button>
              </a>
              <a
                className="proj-desc-b__button-link"
                href="https://github.com/valdezDev/gatsby-portfolio"
                target="_blank"
                rel="noopener noreferrer" >
                <Button className="proj-desc-b__git-button">
                  <i class="fas fa-code proj-desc-b__code-icon" />
                  Github
                </Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className="contact-container">
      <Row>
        <Col sm="11">
          <Card className="contact-card">
            <CardTitle className="contact-card__title text-center">Get in Touch!</CardTitle>
            <CardBody className=" contact-card__body">
              <form method="POST" action="/success" className="contact-card__form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form">
                <input type="hidden" name="bot-field" />
                <div className="contact-card__fields">
                  <div className="contact-card__field half">
                    <input className="contact-card__name" type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="contact-card__field half">
                    <input className="contact-card__email " type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="contact-card__field">
                    <textarea className="contact-card__message " name="message" id="message" rows="8" placeholder="Start typing..." ></textarea>
                  </div>
                  <div className="contact-card__field">
                    <div data-netlify-recaptcha="true"></div>
                  </div>
                </div>
                <ul className="contact-card__actions">
                  <li><input className="contact-card__send-message btn btn-outline" type="submit" value="Send Message" /></li>
                </ul>
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="1">
          <SocialButtons />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;