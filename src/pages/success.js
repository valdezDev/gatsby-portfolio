import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
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

/* eslint-disable */

const Success = () => (
  <Layout>
    <Helmet>
      <title>Success! Thank You.</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <Container>
          <Row>
            <Col sm="12" className="text-center">
              <h1 className="display-3 mb-4 index-intro">Paul Valdez</h1>
              <p className="lead index-intro__subtitle">Developer</p>
              <SocialButtons />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <Card className="success-card">
                <CardTitle className="contact-card__title text-center">Thank You! 📫</CardTitle>
                <CardSubtitle className="contact-card__success-subtitle text-center">
                  Your message has successfully been sent.
                </CardSubtitle>
              </Card>
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
          <Card className="proj-gif-card-a">
            <CardImg className="proj-gif-card-a__projGif" top src={dgGif} />
            <div class="proj-gif-card-a__base-overlay-a">
              <div class="proj-gif-card-a__demo-btn">
                <a href="https://afternoon-waters-74578.herokuapp.com/" className="btn btn-outline proj-gif-card-a__demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div className="proj-gif-card-a__source-btn">
                <a href="https://github.com/valdezDev/devgab" className="btn btn-outline proj-gif-card-a__source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-gif-card-a__code-icon" />
                  Source
                </a>
              </div>
            </div>
            <CardSubtitle className="proj-gif-card-a__subtitle text-center">
            A social media platform meant to be a miniature version of a Linkedin and Twitter for Developers.
            </CardSubtitle>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># DevGab</CardTitle>
            <CardBody className="proj-desc-a__body">
              <ul className="proj-desc-a__list">
                <li>Developed this larger scale social media CRUD application on top of a MERN stack.</li>
                <li>Executed React & Redux front-end in ES6 with Node.</li>
                <li>Interfaced with a RESTful API-based backend written in NodeJS, ExpressJS. </li>
                <li>Hosted a Mongoose Database on mLab that grabs profiles, posts, and comments obtained from the REST API.</li>
                <li>Utilized JSON Web Tokens to register, authenticate, and time users out of a session.</li>
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
                    Source
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
            <CardImg className="proj-gif-card-b__projGif" top src={hnGif} />
            <div class="proj-gif-card-b__base-overlay-b">
              <div class="proj-gif-card-b__demo-btn">
                <a href="https://inspiring-swanson-53922f.netlify.com/" className="btn btn-outline proj-gif-card-b__demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div className="proj-gif-card-b__source-btn">
                <a href="https://github.com/valdezDev/hacker-news-search-app" className="btn btn-outline proj-gif-card-b__source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-gif-card-b__code-icon" />
                  Source
                </a>
              </div>
            </div>
            <CardSubtitle className="proj-gif-card-b__subtitle text-center">
            A React application that is optimized to let a user search and sort through articles posted on Hacker News.
            </CardSubtitle>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># Hacker News Search</CardTitle>
            <CardBody className="proj-desc-b__body">
              <ul className="proj-desc-b__list">
              <li>Incorporated Axios within this React application to fetch and render JSON from the Hacker News, Algolia Search API.</li>
                <li>Lifted state throughout the application into its various child components to keep them sleek and lightweight.</li>
                <li>Applied Lodash to allow for the user to sort results based on the title, author, number of comments, and points.</li>
                <li>Employed the API to cache paginated data to allow the client to make only one API request when searching.</li>
                <li>Practiced snapshot and unit tests by running both Jest and Enzyme.</li>
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
                  <i className="fas fa-code proj-desc-b__code-icon" />
                  Source
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
            <CardImg className="proj-gif-card-a__projGif" top src={blogGif} />
            <div class="proj-gif-card-a__base-overlay-a">
              <div class="proj-gif-card-a__demo-btn">
                <a href="https://unruffled-bartik-96bf86.netlify.com/" className="btn btn-outline proj-gif-card-a__demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </div>
              <div className="proj-gif-card-a__source-btn">
                <a href="https://github.com/valdezDev/gatsby-blog" className="btn btn-outline proj-gif-card-a__source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-gif-card-a__code-icon" />
                  Source
                </a>
              </div>
            </div>
            <CardSubtitle className="proj-gif-card-a__subtitle text-center">A simple template for a blog application that one can use to get their ideas out to their readers.</CardSubtitle>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-a">
            <CardTitle className="proj-desc-a__title text-center text-white"># Developer Blog Template</CardTitle>
            <CardBody className="proj-desc-a__body">
              <ul className="proj-desc-a__list">
                <li>Constructed this application using GatsbyJS and set up an API using GraphQL.</li>
                <li>Optimized to display and paginate through markdown files that are taken from the API.</li>
                <li>Assigned routes with a unique slug based on an individual markdown file’s title or its unique tags using Node.</li>
                <li>Included a Disqus plugin that allows users to comment on and/or share blog posts to their social media.</li>
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
                    Source
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
            <CardImg className="proj-gif-card-b__projGif" top src={portGif} />
            <div class="proj-gif-card-b__base-overlay-b">
              <div class="proj-gif-card-b__demo-btn">
                <a href="https://spenserkearns.com/" className="btn btn-outline proj-gif-card-b__demo-link-btn" target="_blank" rel="noopener noreferrer">
                  Try Other Example
                </a>
              </div>
              <div className="proj-gif-card-b__source-btn">
                <a href="https://github.com/valdezDev/gatsby-portfolio" className="btn btn-outline proj-gif-card-b__source-link-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code proj-gif-card-b__code-icon" />
                  Source
                </a>
              </div>
            </div>
            <CardSubtitle className="proj-gif-card-b__subtitle text-center">A static portfolio template one can use to broadcast their work.</CardSubtitle>
          </Card>
        </Col>
        <Col sm="5">
          <Card className="proj-desc-b">
            <CardTitle className="proj-desc-b__title text-center text-white"># Portfolio Templates</CardTitle>
            <CardBody className="proj-desc-b__body">
              <ul className="proj-desc-b__list">
                <li>Built these static websites using GatsbyJS.</li>
                <li>Arranged for the UI to include smooth scroll functionality using React Scroll.</li>
                <li>Applied form validation that gets carried out with Netlify.</li>
                <li>Deployed and secured the domains with TLS certificates using Netlify.</li>
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
                  Source
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

export default Success;