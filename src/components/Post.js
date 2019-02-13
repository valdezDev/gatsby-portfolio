import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
import '../styles/index.scss';

const Post = ({ title, author, path, date, body, fluid }) => (
  <Card className="post-card">
    <Link to={path}>
      <Img className="card-image-top" fluid={fluid} alt="proj-img"/>
    </Link>
    <CardBody className="post-card__body">
      <CardTitle>
        <Link className="post-card__post-links" to={path}>
          {title}
        </Link>
      </CardTitle>
      <CardSubtitle className="post-card__info">
        <span className="post-info">Posted on {date}</span> by {' '}
        <span className="post-info">{author}</span>
      </CardSubtitle>
      <CardText className="post-card__text">{body}</CardText>
      <Link
        to={path}
        className="btn btn-outline float-right">
        Click to read more.
      </Link>
    </CardBody>
  </Card>
);

export default Post;