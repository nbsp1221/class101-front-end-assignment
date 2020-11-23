export type CouponType = 'rate' | 'amount';

export interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface Coupon {
  type: CouponType;
  title: string;
  discountRate?: number;
  discountAmount?: number;
}