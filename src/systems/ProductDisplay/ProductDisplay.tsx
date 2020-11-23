import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import { pushProduct, popProduct } from '../../store/modules/cart';
import ProductDisplay from '../../components/specific/ProductDisplay';
import { productItems as dummyProductItems } from '../../api/dummy';

interface ProductItem {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon: boolean;
  isInCart: boolean;
}

interface Props {
  readonly countPerPage: number;
}

const ProductDisplaySystem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    countPerPage
  } = props;

  const dispatch = useDispatch();
  const cartProductItems = useSelector((rootState: RootState) => rootState.cart.productItems);
  const [productItems, setProductItems] = React.useState<ProductItem[]>([]);
  const [startIndex, setStartIndex] = React.useState(0);
  const cartProductCount = React.useRef(0);

  React.useEffect(() => {
    setProductItems(
      dummyProductItems
        .map((productItem) => ({
          ...productItem,
          availableCoupon: productItem.availableCoupon === undefined ? true : productItem.availableCoupon,
          isInCart: false
        }))
        .sort((left, right) => right.score - left.score)
    );
  }, []);

  const onPushProduct = React.useCallback((productId: string) => {
    const productItem = productItems.find(productItem => productItem.id === productId);

    if (cartProductCount.current >= 3) {
      alert('장바구니에는 최대 3개의 상품만 담을 수 있습니다.');
      return;
    }

    if (productItem) {
      dispatch(pushProduct({
        ...productItem,
        quantity: 1,
        isIncludePayment: true
      }));
    }
  }, [productItems]);

  const onPopProduct = React.useCallback((productId: string) => {
    dispatch(popProduct(productId));
  }, []);

  React.useEffect(() => {
    const cartProductIds = cartProductItems.map(cartProductItem => cartProductItem.id);
    cartProductCount.current = cartProductIds.length;

    setProductItems(prevValue => prevValue.map((productItem) => ({
      ...productItem,
      isInCart: cartProductIds.includes(productItem.id)
    })));
  }, [cartProductItems]);

  const onPaginate = React.useCallback((pageNumber: number) => {
    setStartIndex((pageNumber - 1) * countPerPage);
  }, [countPerPage]);

  if (productItems.length === 0) {
    return null;
  }

  return (
    <ProductDisplay
      productItems={productItems.slice(startIndex, startIndex + countPerPage)}
      totalProductCount={productItems.length}
      countPerPage={countPerPage}
      onPushProduct={onPushProduct}
      onPopProduct={onPopProduct}
      onPaginate={onPaginate}
    />
  );
};

export default ProductDisplaySystem;