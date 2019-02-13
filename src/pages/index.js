import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//import Img from 'gatsby-image'; come back to this.
import PaulImage from '../images/paul.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="page-header">Paul Valdez</h1>
    <img src={PaulImage} className="col-md-4 paul-pic" alt="paul-img" />
    <h4 className="col-offset-3 text-center index-skills">MongoDB | Express | React | Node</h4>
    <p className="about-me">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque impedit explicabo blanditiis provident odit quos, reprehenderit temporibus, iure non necessitatibus porro, at nulla cum vero omnis. Consequuntur laudantium rerum reiciendis at ratione voluptatem, voluptatibus voluptates autem quis deleniti molestias dolorum illo aliquam quidem voluptatum commodi corporis suscipit laboriosam sit vel quam nesciunt tempora illum temporibus! Tenetur laborum quibusdam quasi cum fuga maxime incidunt temporibus est quae eius enim ullam nemo dicta repellendus nihil non ea, pariatur vitae quam, aliquid fugiat. Molestias a laboriosam ducimus quibusdam cum quo adipisci animi nisi perferendis commodi accusamus ea, repellat unde placeat distinctio, alias tenetur delectus architecto similique eum facilis aliquam, tempora illum. Sapiente eaque dolore aperiam maxime quaerat nesciunt itaque nihil temporibus debitis illo saepe voluptatum tempora laborum deleniti molestiae, eum error facere. Cupiditate molestiae omnis aliquam nulla quasi error voluptas excepturi ipsam adipisci architecto harum fuga officiis quidem in non inventore, quae aut.</p>
  </Layout>
)

export default IndexPage;
