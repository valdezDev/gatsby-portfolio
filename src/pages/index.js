import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
import {
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
import calcGif from '../images/calcGif.gif';
import hnGif from '../images/hnGif.gif';
import blogGif from '../images/blogGif.gif';
import portGif from '../images/portGif.gif';
import '../styles/index.scss';
import { Link } from "react-scroll";


/* eslint-disable */

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `react`, `redux`, `javascript`, `valdezdev`, `blog`, `tutorial`, `richmond`]} />
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h1 className="display-3 mb-4 index-intro">Paul Valdez</h1>
              <p className="lead index-intro__subtitle">Developer | Engineer | Full Time Hustler</p>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paul is a highly adaptable, self-motivated, and lifelong learner with a deep passion for building applications using React and MERN technologies. Every day is a new opportunity to get up early in order to tackle problems that need solving with a constant emphasis on self-improvement and efficiency.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <hr className="about-break col-md-4" />
    <h4 className="skills-header text-center"># Developer Skills</h4>
    <Container className="about-container">
      <Row className="about-row">
        <Col sm="4">
          <Card className="frontend">
            <CardTitle className="frontend__title text-center"># Frontend</CardTitle>
            <CardText className="frontend__list-wrapper">
              <ul className="frontend__list">
                <li>//  JavaScript ES6 / jQuery</li>
                <li>//  CSS / Sass </li>
                <li>//  HTML / JSX</li>
                <li>//  Webpack</li>
                <li>//  Babel</li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="backend">
            <CardTitle className="backend__title text-center"># Backend</CardTitle>
            <CardText className="backend__list-wrapper">
              <ul className="backend__list">
                <li>// REST APIs</li>
                <li>// MongoDB</li>
                <li>// NodeJS</li>
                <li>// ExpressJS</li>
                <li>// GraphQL</li>
                <li>// Python</li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row className="about-row">
        <Col sm="5">
          <Card className="frameworks">
            <CardTitle className="frameworks__title text-center"># Frameworks & Libraries</CardTitle>
            <CardText className="frameworks__list-wrapper">
              <ul className="frameworks__list">
                <li>React / Gatsby </li>
                <li>Redux / Thunk</li>
                <li>Bootstrap / Reactstrap</li>
                <li>Mongoose</li>
                <li>Axios</li>
                <li>Lodash</li>
                <li>Jest / Enzyme</li>
                <li>Django</li> 
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="tools">
            <CardTitle className="tools__title text-center"># Dev Toolkit</CardTitle>
            <CardText className="tools__list-wrapper">
              <ul className="tools__list">
                <li>Git / Bash / Git Flow</li>
                <li>Visual Studio Code</li>
                <li>mLab</li>
                <li>Postman</li>
                <li>Heroku / Netlify / Digital Ocean</li>
                <li>KanbanFlow</li>
                <li>WakaTime</li>
                <li>PuTTY</li>
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
          <Card className="project-items-a hideme" >
            <CardImg src={dgGif} className="project-items-a__img" alt="DevGab Gif" />
            <a href="https://github.com/valdezDev/devgab" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Source Code 
                <i className="fab fa-github project-items-a__icon"  />
              </span>
            </a>
            <hr className="project-items-a__break" />
            <a href="https://afternoon-waters-74578.herokuapp.com/" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Preview Demo 
                <i class="fas fa-laptop-code project-items-a__icon" />
              </span>
            </a>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># DevGab</CardTitle>
            <CardSubtitle className="proj-desc-a__subtitle text-center">
            A social media platform meant to be a miniature version of a Linkedin and Twitter for Developers.
            </CardSubtitle>
            <CardBody className="proj-desc-a__body">
              <ul className="proj-desc-a__list">
                <li>Developed this larger scale social media CRUD application on top of a MERN stack.</li>
                <li>Executed React & Redux front-end in ES6 with Node.</li>
                <li>Interfaced Axios to carry out requests to a RESTful API-based backend written in NodeJS, ExpressJS, Mongoose.</li>
                <li>Achieved form validation with specific parameters using backend services provided in the API.</li>
                <li>Hosted a Mongoose Database on mLab that holds onto profiles, posts, and comments obtained from the REST API.</li>
                <li>Utilized JSON Web Tokens and Bcrypt to register, authenticate, provide hashes, and time users out of a session. </li>
                <li>Designed database with Mongoose that utilized models / schema.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row>
        <Col sm="7">
          <Card className="project-items-b hideme" >
            <CardImg src={calcGif} className="project-items-b__img" alt="Budget Calc Gif" />
            <a href="https://github.com/valdezDev/react-hooks-budget-calculator" className="project-items-b__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-b__span">
                Source Code 
                <i className="fab fa-github project-items-b__icon"  />
              </span>
            </a>
            <hr className="project-items-b__break" />
            <a href="https://suspicious-pasteur-6d0ba0.netlify.com/" className="project-items-b__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-b__span">
                Preview Demo 
                <i class="fas fa-laptop-code project-items-b__icon" />
              </span>
            </a>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># Budget Calculator</CardTitle>
            <CardSubtitle className="proj-desc-b__subtitle text-center">
            A Calculator to help you control your spending habits and make planning ahead much easier.
            </CardSubtitle>
            <CardBody className="proj-desc-b__body">
              <ul className="proj-desc-b__list">
                <li>Implemented React Hook syntax to contain a dynamic local state that allows for CRUD functionality.</li>
                <li>Designed user-friendly form validation logic to keep the application free of bugs.</li>
                <li>Stringified JSON and side effect functionality that saves the user’s information to Local Storage.</li>
                <li>Ascribed each individual user expense with a Universally Unique Identifier.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row className="row-a">
        <Col sm="7">
          <Card className="project-items-a hideme" >
            <CardImg src={hnGif} className="project-items-a__img" alt="Hacker Gif" />
            <a href="https://github.com/valdezDev/hacker-news-search-app" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Source Code 
                <i className="fab fa-github project-items-a__icon"  />
              </span>
            </a>
            <hr className="project-items-a__break" />
            <a href="https://inspiring-swanson-53922f.netlify.com/" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Preview Demo 
                <i class="fas fa-laptop-code project-items-a__icon" />
              </span>
            </a>
            <hr className="project-items-a__break" />
            <a href="https://valdezdev.com/building-a-search-app-with-react-redux" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                View Blog Post
                <i class="fas fa-pen-nib project-items-a__icon" />
              </span>
            </a>
            <hr className="project-items-a__break" />
            <a className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span-vid">
                Video Series Coming Soon 
                <i class="fab fa-youtube project-items-a__icon" />
              </span>
            </a>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># Hacker News Search</CardTitle>
            <CardSubtitle className="proj-desc-a__subtitle text-center">
            A React application that is optimized to let a user search and sort through articles posted on Hacker News.
            </CardSubtitle>
            <CardBody className="proj-desc-a__body">
              <ul className="proj-desc-a__list">
                <li>Incorporated Axios within this React application to make requests to the Hacker News, Algolia Search API.</li>
                <li>Lifted state throughout the application into its various child components to keep them sleek and lightweight.</li>
                <li>Applied Lodash to allow for the user to sort results based on the title, author, number of comments, and points.</li>
                <li>Employed the API to cache paginated data to allow the client to make only one API request when searching.</li>
                <li>Wrote a blog entry explaining how to rebuild the app and fetch data from the API as well as save search queries in the Redux state.</li>
                <li>(In Progress) Recording an Intro to Redux tutorial video series and rebuilding the application by lifting the local React state to Redux.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row>
        <Col sm="7">
          <Card className="project-items-b hideme" >
            <CardImg src={blogGif} className="project-items-b__img" alt="Blog Gif" />
            <a href="https://github.com/valdezDev/gatsby-blog" className="project-items-b__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-b__span">
                Source Code 
                <i className="fab fa-github project-items-b__icon"  />
              </span>
            </a>
            <hr className="project-items-b__break" />
            <a href="https://unruffled-bartik-96bf86.netlify.com/" className="project-items-b__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-b__span">
                Preview Demo 
                <i class="fas fa-laptop-code project-items-b__icon" />
              </span>
            </a>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># Developer Blog Template</CardTitle>
            <CardSubtitle className="proj-desc-b__subtitle text-center">A simple template for a blog application that one can use to get their ideas out to their readers.</CardSubtitle>
            <CardBody className="proj-desc-b__body">
              <ul className="proj-desc-b__list">
                <li>Constructed this application using GatsbyJS and set up an API using GraphQL.</li>
                <li>Optimized to display and paginate through markdown files that are taken from the API.</li>
                <li>Assigned routes with a unique slug based on an individual markdown file’s title as well as its unique tags using Node.</li>
                <li>Included a Disqus plugin that allows users to comment on and/or share blog posts to their social media.</li>
                <li>Designed the layout and components using Sass and Bootstrap.</li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <hr className="proj-break align-self-center" />
      <Row className="row-a">
        <Col sm="7">
          <Card className="project-items-a hideme" >
            <CardImg src={portGif} className="project-items-a__img" alt="Portfolio Gif" />
            <a href="https://github.com/valdezDev/gatsby-portfolio" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Source Code 
                <i className="fab fa-github project-items-a__icon"  />
              </span>
            </a>
            <hr className="project-items-a__break" />
            <a href="https://spenserkearns.com" className="project-items-a__link" target="_blank" rel="noopener noreferrer">
              <span className="project-items-a__span">
                Preview Alternate Demo 
                <i class="fas fa-laptop-code project-items-a__icon" />
              </span>
            </a>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># Portfolio Templates</CardTitle>
            <CardSubtitle className="proj-desc-a__subtitle text-center">Static page portfolio templates one can use to broadcast their work. Can come equipped with a blog.</CardSubtitle>
            <CardBody className="proj-desc-a__body">
              <ul className="proj-desc-a__list">
                <li>Built these static websites using GatsbyJS.</li>
                <li>Equipped with the aforementioned Blog Template in order to write blog entries explaining how to build applications.</li>
                <li>Laid out a contact form that's carried out with Netlify's form submission services.</li>
                <li>Enabled automatic TLS certificates with Let's Encrypt to secure the domains.</li>
                <li>Custom SCSS styling written with BEM-IT naming conventions in mind.</li>
              </ul>
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
                  <li><input className="contact-card__send-message btn" type="submit" value="Send Message" /></li>
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