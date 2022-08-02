import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { phoneConstant, tabletConstant } from '../../_constants/other';
import { favoriteActions } from '../../redux/actions/favorite';
import './Catalog.scss';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({
    query: `(min-width: ${tabletConstant}px)`,
  });
  const isTablet = useMediaQuery({ query: `(max-width: ${tabletConstant}px)` });
  const isPhone = useMediaQuery({ query: `(max-width: ${phoneConstant}px)` });

  const favoriteArray = useSelector((state) => state.favoriteReducer.favorite);

  const getImg = () => {
    return (
      (isDesktop && 'desktop') ||
      (isTablet && 'tablet') ||
      (isPhone && 'mobile')
    );
  };

  const addProduct = () => {
    const newFavorite = [...favoriteArray, product];
    dispatch(favoriteActions.updateFavorite(newFavorite));
    localStorage.setItem('favorite', JSON.stringify(newFavorite));
  };

  const deleteProduct = () => {
    const newFavorite = favoriteArray.filter((elem) => elem.id !== product.id);
    dispatch(favoriteActions.updateFavorite(newFavorite));
    localStorage.setItem('favorite', JSON.stringify(newFavorite));
  };

  const isFavorite = useMemo(
    () => favoriteArray.findIndex((elem) => elem.id === product.id) !== -1,
    [product, favoriteArray]
  );

  return (
    <div className="catalog_item">
      <img
        className="catalog_item__photo"
        src={product.image[getImg()]?.x1}
        alt="photo"
      />
      <div className="catalog_item__wrapper">
        <p className="catalog_item__title">{product.title}</p>
        <div className="catalog_item__text">
          <p>{product.price}</p>
          {product.is_new && <p>Новое</p>}
        </div>
        <button
          className="catalog_item__btn"
          onClick={() => (isFavorite ? deleteProduct() : addProduct())}
        >
          {isFavorite ? 'Удалить' : 'В корзину'}
        </button>
      </div>
    </div>
  );
};

export default Product;
