import React from 'react';
import {Navbar} from 'react-bootstrap';

const logoBrand = {
    fontSize: '38px',
    fontWeight: 'bolder'
}

const Header = () => (
  <Navbar>
    <div className="container">
      <Navbar.Brand href="#home" style={logoBrand}>SYFM</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Search your favourite music
        </Navbar.Text>
      </Navbar.Collapse>
    </div>
  </Navbar>
);

export default Header;
