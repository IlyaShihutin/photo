import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import './Catalog.scss';
import Product from './Product';

const Catalog = () => {
  const catalog = useSelector((state) => state.catalogReducer.catalog);
  const loader = useSelector((state) => state.catalogReducer.loader);

  return (
    <div className="catalog">
      {loader ? (
        <Loader />
      ) : (
        catalog.map((elem) => <Product product={elem} key={elem.id} />)
      )}
    </div>
  );
};

export default Catalog;
