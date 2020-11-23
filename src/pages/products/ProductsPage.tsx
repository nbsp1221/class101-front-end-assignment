import React from 'react';
import Header from '../../components/layouts/Header';
import Container from '../../components/layouts/Container';
import ProductDisplaySystem from '../../systems/ProductDisplay';

const ProductsPage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ProductDisplaySystem countPerPage={5} />
        </Container>
      </main>
    </>
  );
};

export default ProductsPage;