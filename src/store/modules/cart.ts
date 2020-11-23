interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  availableCoupon: boolean;
  quantity: number;
  isIncludePayment: boolean;
}

const PUSH_PRODUCT = 'cart/PUSH_PRODUCT' as const;
const POP_PRODUCT = 'cart/POP_PRODUCT' as const;
const SET_PRODUCT_QUANTITY = 'cart/SET_PRODUCT_QUANTITY' as const;
const SET_INCLUDE_PAYMENT = 'cart/SET_INCLUDE_PAYMENT' as const;

export const pushProduct = (productItem: ProductItem) => ({ type: PUSH_PRODUCT, productItem } as const);
export const popProduct = (productId: string) => ({ type: POP_PRODUCT, productId } as const);
export const setProductQuantity = (productId: string, quantity: number) => ({ type: SET_PRODUCT_QUANTITY, productId, quantity } as const);
export const setIncludePayment = (productId: string, isIncludePayment: boolean) => ({ type: SET_INCLUDE_PAYMENT, productId, isIncludePayment } as const);

type CartAction =
  | ReturnType<typeof pushProduct>
  | ReturnType<typeof popProduct>
  | ReturnType<typeof setProductQuantity>
  | ReturnType<typeof setIncludePayment>;

interface CartState {
  productItems: ProductItem[];
}

const initialState: CartState = {
  productItems: []
};

export default function(state = initialState, action: CartAction): CartState {
  switch (action.type) {
    case PUSH_PRODUCT: {
      return {
        productItems: state.productItems
          .concat({ ...action.productItem })
      };
    }
    case POP_PRODUCT: {
      return {
        productItems: state.productItems
          .filter(productItem => productItem.id !== action.productId)
      };
    }
    case SET_PRODUCT_QUANTITY: {
      return {
        productItems: state.productItems
          .map(productItem => productItem.id === action.productId ? { ...productItem, quantity: action.quantity } : productItem)
      };
    }
    case SET_INCLUDE_PAYMENT: {
      return {
        productItems: state.productItems
          .map(productItem => productItem.id === action.productId ? { ...productItem, isIncludePayment: action.isIncludePayment } : productItem)
      };
    }
    default: {
      return state;
    }
  }
}