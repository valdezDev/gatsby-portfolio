import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
import '../styles/index.scss';

const Project = ({ title, slug, body, fluid, path }) => (
  <Card>
    {/*<Link to={slug}>
      <Img className="card-image-top" fluid={fluid} alt="proj-img"/>
</Link>*/}
    <CardBody>
      <CardTitle>
        <Link to={path}>
          {title}
        </Link>
      </CardTitle>
      <CardText>{body}</CardText>
      <Link
        to={path}
        className="btn btn-outline-primary float-right">
        Click to see more.
      </Link>
    </CardBody>
  </Card>
);

export default Project;