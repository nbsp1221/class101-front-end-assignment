import React from 'react';
import Header from '../../components/layouts/Header';
import Container from '../../components/layouts/Container';
import CartOrderBodySystem from '../../systems/CartOrderBody';

const CartPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <CartOrderBodySystem />
        </Container>
      </main>
    </>
  );
};

export default CartPage;