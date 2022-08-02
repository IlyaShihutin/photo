import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { catalogActions } from '../../redux/actions/catalog';
import { phoneConstant } from '../../_constants/other';
import FilterBrand from './FilterBrand';
import FilterPrice from './FilterPrice';
import './Filters.scss';

const Filters = () => {
  const [price, setPrice] = useState({ minPrice: 0, maxPrice: 74000 });
  const [brands, setBrands] = useState([]);

  const catalog = useSelector((state) => state.catalogReducer.catalog);
  const isPhone = useMediaQuery({ query: `(max-width: ${phoneConstant}px)` });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catalogActions.getCatalog(brands, price.minPrice, price.maxPrice));
  }, [price, brands]);

  return (
    <div className="filter">
      {!isPhone && (
        <p className="filter_count">Товаров {catalog.length || 0}</p>
      )}
      <p className="filter_title">Камеры</p>
      {isPhone && <p className="filter_count">Товаров {catalog.length || 0}</p>}
      <FilterPrice price={price} setPrice={setPrice} />
      <FilterBrand brands={brands} setBrands={setBrands} />
    </div>
  );
};

export default Filters;
