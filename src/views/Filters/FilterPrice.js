import React from 'react';
import './Filters.scss';

const FilterPrice = ({ price, setPrice }) => {
  const addMinPrice = (minPrice) => {
    setPrice({ ...price, minPrice });
  };
  const addMaxPrice = (maxPrice) => {
    setPrice({ ...price, maxPrice });
  };

  return (
    <div className="filter_price">
      <p className="filter_price__title">Цена, ₽</p>
      <div className="filter_price__text">
        <input
          type="number"
          value={price.minPrice}
          onChange={(e) => addMinPrice(e.currentTarget.value)}
          min={0}
          max={price.maxPrice - 1}
        />
        <input
          type="number"
          value={price.maxPrice}
          onChange={(e) => addMaxPrice(e.currentTarget.value)}
          min={price.minPrice + 1}
        />
      </div>
    </div>
  );
};

export default FilterPrice;
