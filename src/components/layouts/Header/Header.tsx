import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './Header.scss';

const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-area">
          <h1>CLASS101 Front-End Task</h1>
          <ul className="link-area">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default React.memo(Header);