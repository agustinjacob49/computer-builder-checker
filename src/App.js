import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/view.js';
import About from './pages/about/about';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const { CONTENT } = require('./utils/constants');

function App() {
  const { HOME: { TITLE } } = CONTENT;
  return (
    <>
      <Nav
        activeKey="/"
        variant="pills"
        bg="dark" variant="dark" expand="lg" sticky="top"
      >
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about"  href="/about">About</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="wrapper">
        <Container>
          <h1 className="header-title">{TITLE}</h1>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
          </Router>
        </Container>
      </div>
    </>
  );
}

export default App;
