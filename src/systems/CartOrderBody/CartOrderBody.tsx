import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import { popProduct, setProductQuantity, setIncludePayment } from '../../store/modules/cart';
import CartOrderBody from '../../components/specific/CartOrderBody';
import { CouponType, Coupon as DummyCoupon } from '../../lib/types';
import { coupons as dummyCoupons } from '../../api/dummy';

interface Coupon {
  id: number;
  type: CouponType;
  title: string;
  discountValue: number;
  isSet: boolean;
}

function getDiscountValue(coupon: DummyCoupon): number {
  switch (coupon.type) {
    case 'amount':
      return coupon.discountAmount ? coupon.discountAmount : -1;
    case 'rate':
      return coupon.discountRate ? coupon.discountRate : -1;
    default:
      throw new Error('Undefined coupon type.');
  }
}

const CartOrderBodySystem: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const productItems = useSelector((rootState: RootState) => rootState.cart.productItems);
  const [coupons, setCoupons] = React.useState<Coupon[]>([]);

  React.useEffect(() => {
    setCoupons(
      dummyCoupons
        .map((coupon, i) => ({
          ...coupon,
          id: i,
          discountValue: getDiscountValue(coupon),
          isSet: false
        }))
    );
  }, []);

  const onSetIncludePayment = React.useCallback((productId: string, isIncludePayment: boolean) => {
    dispatch(setIncludePayment(productId, isIncludePayment));
  }, []);

  const onSetQuantity = React.useCallback((productId: string, quantity: number) => {
    dispatch(setProductQuantity(productId, quantity));
  }, []);

  const onDeleteProduct = React.useCallback((productId: string) => {
    dispatch(popProduct(productId));
  }, []);

  const onSetCoupon = React.useCallback((couponId: number, isSet: boolean) => {
    setCoupons(prevCoupon =>
      prevCoupon
        .map(coupon => ({ ...coupon, isSet: coupon.id === couponId ? isSet : false }))
    );
  }, []);

  return (
    <CartOrderBody
      productItems={productItems}
      coupons={coupons}
      onSetIncludePayment={onSetIncludePayment}
      onSetQuantity={onSetQuantity}
      onDeleteProduct={onDeleteProduct}
      onSetCoupon={onSetCoupon}
    />
  );
};

export default CartOrderBodySystem;