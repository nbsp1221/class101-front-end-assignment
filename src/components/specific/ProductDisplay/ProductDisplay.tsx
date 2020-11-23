import React from 'react';
import ProductCard from '../ProductCard';
import Pagination from '../../controls/Pagination';
import './ProductDisplay.scss';

interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  isInCart: boolean;
}

interface Props {
  readonly productItems: ProductItem[];
  readonly totalProductCount: number;
  readonly countPerPage: number;
  readonly onPushProduct: (productId: string) => void;
  readonly onPopProduct: (productId: string) => void;
  readonly onPaginate: (pageNumber: number) => void;
}

const ProductDisplay: React.FunctionComponent<Props> = (props: Props) => {
  const {
    productItems,
    totalProductCount,
    countPerPage,
    onPushProduct,
    onPopProduct,
    onPaginate
  } = props;

  return (
    <div className="product-display">
      <h2>상품 목록</h2>
      <ul>
        {productItems.map((productItem) =>
          <li key={productItem.id}>
            <ProductCard
              productItem={productItem}
              onPushProduct={onPushProduct}
              onPopProduct={onPopProduct}
            />
          </li>
        )}
      </ul>
      <div className="pagination-area">
        <Pagination
          totalCount={totalProductCount}
          countPerPage={countPerPage}
          onPaginate={onPaginate}
        />
      </div>
    </div>
  );
};

export default ProductDisplay;