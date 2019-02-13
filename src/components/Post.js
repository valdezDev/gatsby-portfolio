import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
import '../styles/index.scss';

const Post = ({ title, author, path, date, body, fluid }) => (
  <Card>
    <Link to={path}>
      <Img className="card-image-top" fluid={fluid} alt="proj-img"/>
    </Link>
    <CardBody>
      <CardTitle>
        <Link to={path}>
          {title}
        </Link>
      </CardTitle>
      <CardSubtitle>
        <span className="text-info">{date}</span> by {' '}
        <span className="text-in">{author}</span>
      </CardSubtitle>
      <CardText>{body}</CardText>
      <Link
        to={path}
        className="btn btn-outline-primary float-right">
        Click to see more.
      </Link>
    </CardBody>
  </Card>
);

export default Post;