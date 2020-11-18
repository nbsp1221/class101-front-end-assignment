import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default HomePage;