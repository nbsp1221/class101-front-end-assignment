import React from 'react';
import Checkbox from '../../controls/Checkbox';
import './CartProductItem.scss';
import { numberWithCommas } from '../../../lib/utils';

interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  availableCoupon: boolean;
  quantity: number;
  isIncludePayment: boolean;
}

interface Props {
  readonly productItem: ProductItem;
  readonly onSetIncludePayment: (productId: string, isIncludePayment: boolean) => void;
  readonly onSetQuantity: (productId: string, quantity: number) => void;
  readonly onDelete: (productId: string) => void;
}

const CartProductItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    productItem,
    onSetIncludePayment,
    onSetQuantity,
    onDelete
  } = props;

  const onCheckIncludePayment = React.useCallback((isChecked: boolean) => {
    onSetIncludePayment(productItem.id, isChecked);
  }, []);

  const onClickIncreaseQuantity = React.useCallback(() => {
    onSetQuantity(productItem.id, productItem.quantity + 1);
  }, [productItem]);

  const onClickDecreaseQuantity = React.useCallback(() => {
    if (productItem.quantity > 1) {
      onSetQuantity(productItem.id, productItem.quantity - 1);
    }
  }, [productItem]);

  const onChangeInputQuantity = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.validity.valid) {
      const quantity = parseInt(event.target.value, 10);

      if (quantity > 0) {
        onSetQuantity(productItem.id, quantity);
      }
    }
  }, []);

  const onClickDelete = React.useCallback(() => {
    onDelete(productItem.id);
  }, []);

  return (
    <div className="cart-product-item">
      <div className="checkbox-area">
        <Checkbox
          id={`checkbox-${productItem.id}`}
          checked={productItem.isIncludePayment}
          onCheck={onCheckIncludePayment}
        />
      </div>
      <div className="cover-image-area">
        <img src={productItem.coverImage} alt={productItem.title} />
      </div>
      <div className="contents-area">
        <div className="title-area">
          {productItem.title}
        </div>
        {!productItem.availableCoupon &&
          <div className="impossible-coupon-area">쿠폰 사용 불가</div>
        }
        <div className="quantity-area">
          <button onClick={onClickDecreaseQuantity}>－</button>
          <input
            type="text"
            pattern="[0-9]*"
            value={productItem.quantity}
            onChange={onChangeInputQuantity}
          />
          <button onClick={onClickIncreaseQuantity}>＋</button>
        </div>
      </div>
      <div className="side-area">
        <div className="price-area">
          <span className="value-area">
            {numberWithCommas(productItem.price * productItem.quantity)}
          </span>
          <span>원</span>
        </div>
        <div className="delete-area">
          <button onClick={onClickDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartProductItem);