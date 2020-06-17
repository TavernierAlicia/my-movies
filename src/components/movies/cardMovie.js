import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardMovie = ({ movie }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.path} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Button variant="primary">Regarder</Button>
    </Card.Body>
  </Card>
);

CardMovie.propTypes = {
  movie: PropTypes.exact({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardMovie;
