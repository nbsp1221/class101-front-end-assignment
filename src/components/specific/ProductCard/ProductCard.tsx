import React from 'react';
import classNames from 'classnames';
import './ProductCard.scss';
import { numberWithCommas } from '../../../lib/utils';

interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  isInCart: boolean;
}

interface Props {
  readonly productItem: ProductItem;
  readonly onPushProduct: (productId: string) => void;
  readonly onPopProduct: (productId: string) => void;
}

const ProductCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    productItem,
    onPushProduct,
    onPopProduct
  } = props;

  const onClickSetCart = React.useCallback(() => {
    if (productItem.isInCart) {
      onPopProduct(productItem.id);
    }
    else {
      onPushProduct(productItem.id);
    }
  }, [productItem]);

  return (
    <div className="product-card">
      <div className="cover-image-area">
        <img src={productItem.coverImage} alt={productItem.title} />
      </div>
      <div className="contents-area">
        <p className="title-area">
          {productItem.title}
        </p>
        <p className="price-area">
          <span className="value-area">{numberWithCommas(productItem.price)}</span>원
        </p>
        <div className={classNames('button-area', { 'is-in-cart': productItem.isInCart })}>
          <button onClick={onClickSetCart}>
            {productItem.isInCart ? '빼기' : '담기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);