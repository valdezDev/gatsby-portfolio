import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";
import ProjVideo1 from '../components/vid/ProjVideo1';
import ProjVideo2 from '../components/vid/ProjVideo2';
import ProjVideo3 from '../components/vid/ProjVideo3';
import ProjVideo4 from '../components/vid/ProjVideo4';
import ProjVideo5 from '../components/vid/ProjVideo5';
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
                to="card-4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1250}
              >
                Get in Touch
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
            </CardBody>
          </Card>
      </Col>
    </Row>
    <hr className="about-break col-md-4" />
    <h3 className="skills-header text-center">Developer Skills</h3>
      <Container className="about-container">
        <Row className="dev-row">
          <Col sm="6">
            <Card className="frontend">
              <CardTitle className="frontend__title text-center"># Frontend</CardTitle>
              <CardText className="frontend__list-wrapper">
                <ul className="frontend__list">
                  <li>// React / Redux</li>
                  <li>// Gatsby</li>
                  <li>// jQuery, Django</li>
                  <li>// Sass, Bootstrap</li>
                  <li>// MongoDB, GraphQL</li>
                  <li>// ExpressJS</li>
                  <li>// NodeJS</li>
                  <li>// REST APIs</li>
                </ul>
              </CardText>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="backend">
              <CardTitle className="backend__title text-center"># Backend</CardTitle>
              <CardText className="backend__list-wrapper">
                <ul className="backend__list">
                  <li>// RESTful APIs</li>
                  <li>// MongoDB</li>
                  <li>// NodeJS</li>
                  <li>// GraphQL</li>
                  <li>// ExpressJS</li>
                </ul>
              </CardText>
            </Card>
        </Col>
      </Row>
      <Row className="dev-row">
          <Col sm="6">
            <Card className="tools">
              <CardTitle className="tools__title text-center"># tools & Soft Skills</CardTitle>
              <CardText className="tools__list-wrapper">
                <ul className="tools__list">
                  <li>Git (Bash), <a href="https://github.com/valdezDev" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li>Visual Studio Code</li>
                  <li>PostMan</li>
                  <li>Enzyme, JEST</li>
                  <li>mLab</li>
                  <li>Heroku, Digital Ocean, Netlify</li>
                  <li>KanbanFlow, WakaTime, Strict Time Management</li>
                  <li>Excellent Team Communication and Customer Service Experience</li>
                </ul>
              </CardText>
            </Card>
        </Col>
        <Col sm="6">
            <Card className="soft-skills">
              <CardTitle className="soft-skills__title text-center"># soft-skills & Soft Skills</CardTitle>
              <CardText className="soft-skills__list-wrapper">
                <ul className="soft-skills__list">
                  <li>Git (Bash), <a href="https://github.com/valdezDev" target="_blank" rel="noopener noreferrer">Github</a></li>
                  <li>Visual Studio Code</li>
                  <li>PostMan</li>
                  <li>Enzyme, JEST</li>
                  <li>mLab</li>
                  <li>Heroku, Digital Ocean, Netlify</li>
                  <li>KanbanFlow, WakaTime, Strict Time Management</li>
                  <li>Excellent Team Communication and Customer Service Experience</li>
                </ul>
              </CardText>
            </Card>
            </Col>
          
        </Row>
    </Container>

    <Card className="card-3">
      <Card className="container-card">
        <h1 className="page-header"># Projects</h1>
        
          <Row>
            <Col sm="6">
              <Card className="proj-video">
                <ProjVideo1 />
              </Card>
            </Col>
            <Col sm="6">
              <Card className="proj-desc-a col-md-11">
                <CardTitle className="proj-desc-a__title text-center"># DevGab</CardTitle>
                <CardBody className="proj-desc-a__body">
                  <CardSubtitle className="proj-desc-a__subtitle text-center">Where developers can come together to discuss career information.</CardSubtitle> <br/>
                  <ul className="proj-desc-a__list">
                    <li>Built on a MERN Stack.</li>
                    <li>A simple social media app that allows user registration, login.</li>
                    <li>Performs various asynchronous, CRUD functionalities using JavaScript.</li>
                    <li>State management using Redux.</li>
                    <li>Database is hosted on mLab and the app is deployed to Heroku.</li>
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
                    <i className="fas fa-code proj-desc-a__code-icon" />
                    <a
                      className="proj-desc-a__button-link"
                      href="https://github.com/valdezDev/devgab"
                      target="_blank"
                      rel="noopener noreferrer" >
                        GitHub
                    </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr className="proj-break align-self-center" />
        <Row>
          <Col sm="6">
            <Card className="proj-video">
              <ProjVideo2 />
            </Card>
          </Col>
          <Col sm="6">
            <Card className="proj-desc-b col-md-11">
              <CardTitle className="proj-desc-b__title text-center"># Hacker News Search</CardTitle>
              <CardBody className="proj-desc-b__body">
                
                <CardSubtitle className="proj-desc-b__subtitle text-center">Search for articles and posts on Hacker News.</CardSubtitle> <br/>
                <ul className="proj-desc-b__list">
                  <li>Built using create-react-app.</li>
                  <li>Integrated with the Hacker News, Algolia Search API.</li>
                  <li>Has state management functionality, ideally will filter search results using Redux in the future.</li>
                </ul>
                <Button className="proj-desc-b__demo-button">
                  <a
                    className="proj-desc-b__button-link"
                    href="https://inspiring-swanson-53922f.netlify.com/"
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
                      GitHub
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr className="proj-break align-self-center" />
        <Row className="row-a">
          <Col sm="6">
            <Card className="proj-video">
              <ProjVideo3 />
            </Card>
          </Col>
          <Col sm="6">
            <Card className="proj-desc-a col-md-11">
            <CardTitle className="proj-desc-a__title text-center"># Developer Blog</CardTitle>
              <CardBody className="proj-desc-a__body">
                <CardSubtitle className="proj-desc-a__subtitle text-center">A blog application that developers can use to provide and share their ideas to the world.</CardSubtitle> <br/>
                <ul className="proj-desc-a__list">
                  <li>Built using GatsbyJS</li>
                  <li>Each post is accessing markdown queries written in GraphQL</li>
                  <li>Every post uses Node functionality to pass and asign a unique slug based on the blog title.</li>
                  <li>Deployed to Netlify</li>
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
                      GitHub
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr className="proj-break align-self-center" />
        <Row>
          <Col sm="6">
            <Card className="proj-video">
              <ProjVideo4/>
            </Card>
          </Col>
          <Col sm="6">
            <Card className="proj-desc-b col-md-11">
            <CardTitle className="proj-desc-b__title text-center"># https://valdezDev.com</CardTitle>
              <CardBody className="proj-desc-b__body">
                <CardSubtitle className="proj-desc-b__subtitle text-center">You're already here! Take your time to look around and reach out.</CardSubtitle> <br/>
                <ul className="proj-desc-b__list">
                  <li>Built using GatsbyJS</li>
                  <li>Incorporates the same blog functionality using GraphQL to fetch queries from the Developer Blog Project.</li>
                  <li>Designed the styles using SASS and JSX.</li>
                  <li>This website has been deployed to Netlify where the contact form submissions are routed to my personal email account, the domain is customized, and automatic TLS certificates are enabled to allow for security and higher Search Engine results.</li>
                </ul>
                <Button className="proj-desc-b__git-button">
                  <i class="fas fa-code proj-desc-b__code-icon" />
                  <a
                    className="proj-desc-b__button-link"
                    href="https://github.com/valdezDev/gatsby-portfolio"
                    target="_blank"
                    rel="noopener noreferrer" >
                      GitHub
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr className="proj-break align-self-center" />
        <Row>
          <Col sm="6">
            <Card className="proj-video">
              <ProjVideo5 />
            </Card>
          </Col>
          <Col sm="6">
            <Card className="proj-desc-a col-md-11">
            <CardTitle className="proj-desc-a__title text-center"># Spenser's Chess Portfolio</CardTitle>
              <CardBody className="proj-desc-a__body">
                <CardSubtitle className="proj-desc-a__subtitle text-center">A very simple portfolio I made for a RVA based private chess tutor</CardSubtitle> <br/>
                <ul className="proj-desc-a__list">
                  <li>Built using GatsbyJS</li>
                  <li>Uses the React Scroll package to add smooth scroll animations to the proper locations when using the navbar.</li>
                  <li>Designed using bootstrap, SASS, and JSX.</li>
                  <li>This portfolio and its domain have been deployed and secured using Netlify. It's also wired up to access the form submssion functionality that Netlify offers its users.</li>
                </ul>
                <Button className="proj-desc-a__demo-button">
                  <a
                    className="proj-desc-a__button-link"
                    href="https://spenserkearns.com/"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Try Demo
                  </a>
                </Button>
                <Button className="proj-desc-a__git-button">
                  <i class="fas fa-code proj-desc-a__code-icon" />
                  <a
                    className="proj-desc-a__button-link"
                    href="https://github.com/valdezDev/gatsby-spenser-teaches-chess"
                    target="_blank"
                    rel="noopener noreferrer" >
                      GitHub
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Card>
    </Card>

    <Card className="card-4">
      <Card className="contact-card">
        <CardTitle className="contact-card__title text-center">Get in Touch!</CardTitle>
        <CardSubtitle className="contact-card__subtitle text-center">
          All messages will be sent to my personal email at pvaldezdev@gmail.com.
        </CardSubtitle>
        <CardBody className="col-md-8 contact-card__body">
          <form method="POST" action="/success" className="contact-card__form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form">
            <input type="hidden" name="bot-field" />
            <div className="contact-card__fields">
              <div className="contact-card__field half">
                <input className="contact-card__name col-md-6" type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="contact-card__field half">
                <input className="contact-card__email col-md-6" type="email" name="email" id="email" placeholder="example@email.com" />
              </div>
              <div className="contact-card__field">
                <textarea className="contact-card__message col-md-10" name="message" id="message" rows="8" placeholder="Start typing..." ></textarea>
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
    </Card>
  </Layout>
);

export default IndexPage;