import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} from 'reactstrap';
import '../styles/index.scss';

const Contact = () => (

  <Card className="contact-card">
    <CardTitle className="contact-card__title text-center">Get in Touch</CardTitle>
    <CardBody className="contact-card__body">
      <form className="contact-card__form" method="POST" data-netlify="true">
        <div className="contact-card__fields">
          <div className="contact-card__field half">
            <input className="contact-card__name" type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="contact-card__field half">
            <input className="contact-card__email" type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="contact-card__field">
            <textarea className="contact-card__message" name="message" id="message" placeholder="What's on your mind...?" rows="8"></textarea>
        </div>
        <div className="contact-card__field">
          <div data-netlify-recaptcha="true"></div>
        </div>
        </div>
        <ul className="contact-card__actions">
          <li><input className="contact-card__send-message" type="submit" value="Send Message" /></li>
        </ul>
      </form>
    </CardBody>
  </Card>

);

export default Contact;