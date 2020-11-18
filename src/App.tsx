import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  ProductsPage,
  CartPage
} from './pages';

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/products">
        <ProductsPage />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};

export default App;