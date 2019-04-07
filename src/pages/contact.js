/*import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import '../styles/index.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Contact />
    <ContactForm />
  </Layout>
);

export default ContactPage;
*/
import React from "react"
import ContactForm from "../components/ContactForm"
export default () => (
  <div>
    <h2>Send me a line</h2>
    <ContactForm/>
  </div>
)

