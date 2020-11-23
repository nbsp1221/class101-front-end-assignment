import React from 'react';
import classNames from 'classnames';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import './CartCouponItem.scss';
import { CouponType } from '../../../lib/types';

interface Coupon {
  id: number;
  type: CouponType;
  title: string;
  isSet: boolean;
}

interface Props {
  readonly coupon: Coupon;
  readonly onSet: (couponId: number, isSet: boolean) => void;
}

const CartCouponItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    coupon,
    onSet
  } = props;

  const onClickSet = React.useCallback(() => {
    onSet(coupon.id, !coupon.isSet);
  }, [coupon]);

  return (
    <div className={classNames('cart-coupon-item', { 'is-set': coupon.isSet })}>
      <div className="set-button-area">
        <button onClick={onClickSet}>
          {coupon.isSet ? <FaCheckCircle /> : <FaRegCircle />}
        </button>
      </div>
      <div className="title-area">
        {coupon.title}
      </div>
    </div>
  );
};

export default React.memo(CartCouponItem);