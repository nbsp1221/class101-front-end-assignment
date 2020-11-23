import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartProductItem from '../CartProductItem';
import CartCouponItem from '../CartCouponItem';
import './CartOrderBody.scss';
import { CouponType } from '../../../lib/types';
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

interface Coupon {
  id: number;
  type: CouponType;
  title: string;
  discountValue: number;
  isSet: boolean;
}

interface Props {
  readonly productItems: ProductItem[];
  readonly coupons: Coupon[];
  readonly onSetIncludePayment: (productId: string, isIncludePayment: boolean) => void;
  readonly onSetQuantity: (productId: string, quantity: number) => void;
  readonly onDeleteProduct: (productId: string) => void;
  readonly onSetCoupon: (couponId: number, isSet: boolean) => void;
}

const CartOrderBody: React.FunctionComponent<Props> = (props: Props) => {
  const {
    productItems,
    coupons,
    onSetIncludePayment,
    onSetQuantity,
    onDeleteProduct,
    onSetCoupon
  } = props;

  const [totalProductPrice, setTotalProductPrice] = React.useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const currentCoupon = coupons.find(coupon => coupon.isSet);
    let allPrice = 0;
    let yesCouponPrice = 0;
    let noCouponPrice = 0;

    for (const productItem of productItems) {
      if (productItem.isIncludePayment) {
        const sumPrice = productItem.price * productItem.quantity;
        allPrice += sumPrice;

        if (productItem.availableCoupon) {
          yesCouponPrice += sumPrice;
        }
        else {
          noCouponPrice += sumPrice;
        }
      }
    }

    if (currentCoupon) {
      switch (currentCoupon.type) {
        case 'amount':
          yesCouponPrice -= yesCouponPrice > 0 ? currentCoupon.discountValue : 0;
          break;
        case 'rate':
          yesCouponPrice = Math.floor(yesCouponPrice * (1 - currentCoupon.discountValue / 100));
          break;
      }
    }

    setTotalProductPrice(allPrice);
    setTotalDiscountPrice(allPrice - (yesCouponPrice + noCouponPrice));
    setTotalPrice(yesCouponPrice + noCouponPrice);
  }, [productItems, coupons]);

  if (productItems.length === 0) {
    return (
      <div className="cart-order-body">
        <div className="empty-cart-area">
          <div className="icon-area">
            <FaShoppingCart size="5em" />
          </div>
          <p>장바구니에 담긴 상품이 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-order-body">
      <h2>장바구니</h2>
      <ul className="cart-order-list-area">
        {productItems.map((productItem) =>
          <li key={productItem.id}>
            <CartProductItem
              productItem={productItem}
              onSetIncludePayment={onSetIncludePayment}
              onSetQuantity={onSetQuantity}
              onDelete={onDeleteProduct}
            />
          </li>
        )}
      </ul>
      <h2>할인 쿠폰</h2>
      <ul className="cart-coupon-list-area">
        {coupons.map((coupon) =>
          <li key={coupon.id}>
            <CartCouponItem
              coupon={coupon}
              onSet={onSetCoupon}
            />
          </li>
        )}
      </ul>
      <h2>최종 결제 금액</h2>
      <div className="price-area">
        <div className="product-area">
          <span>상품 금액</span>
          <span className="value-area">{numberWithCommas(totalProductPrice)}</span>
          <span>원</span>
        </div>
        <span className="symbol">－</span>
        <div className="discount-area">
          <span>할인 금액</span>
          <span className="value-area">{numberWithCommas(totalDiscountPrice)}</span>
          <span>원</span>
        </div>
        <span className="symbol">＝</span>
        <div className="total-area">
          <span className="value-area">{numberWithCommas(totalPrice)}</span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
};

export default CartOrderBody;