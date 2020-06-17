import React from 'react';
import {
  Navbar, Form, FormControl, Button,
} from 'react-bootstrap';

import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
        <FormControl type="password" placeholder="Password" className="mr-sm-2" />
        <Button variant="outline-info">Sign in</Button>
      </Form>
    </Navbar>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
