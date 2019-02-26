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
import SocialButtons from "../components/SocialButtons";

const Contact = () => (

  <Card className="contact-container">
    <Row>
      <Col sm="8">
        <Card className="contact-card">
          <CardTitle className="contact-card__title text-center">Get in Touch</CardTitle>
          <CardSubtitle className="contact-card__subtitle text-center">
            All messages will be sent to my personal email at pvaldezdev@gmail.com. Thank you for taking the time to reach out!
            </CardSubtitle>
          <CardBody className="contact-card__body">
            {/*<form
              method="POST"
              className="contact-card__form"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact">
              <div className="contact-card__fields">
                <div className="contact-card__field half">
                  <input className="contact-card__name col-md-3" type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="contact-card__field half">
                  <input className="contact-card__email col-md-3" type="email" name="email" id="email" placeholder="email@email.com" />
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
            </form>*/}
            <form method="post" action="#" data-netlify="true" name="contact-form-test">
  <input type="hidden" name="form-name-test" value="contact" />
  <input type="text" name="name" id="name" required />
  <input type="text" name="email" id="email" required />
  <textarea name="message" id="message" rows="4" required />
  <input type="submit" value="Send Message" />
</form>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <Card className="follow-card">
          <CardTitle className="follow-card__title text-center"># Follow</CardTitle>
          <CardBody className="follow-card__body">
            <SocialButtons />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Card>

  

);

export default Contact;