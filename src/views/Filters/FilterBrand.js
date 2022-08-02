import React, { useMemo } from 'react';
import { numberBrandsConstant } from '../../_constants/other';
import './Filters.scss';

const FilterBrand = ({ brands, setBrands }) => {
  const addBrand = (value) => {
    let newBrandsArray = [...brands];
    if (newBrandsArray.includes(value)) {
      newBrandsArray = newBrandsArray.filter((brand) => brand !== value);
    } else {
      newBrandsArray.push(value);
    }
    setBrands(newBrandsArray);
  };

  const brandsArray = useMemo(() => Object.entries(numberBrandsConstant), []);

  return (
    <div className="filter_brands">
      <p className="filter_brands__title">Бренд</p>
      {brandsArray?.map(([name, number]) => (
        <div key={number} className="filter_brands__item">
          <input
            type="checkbox"
            id={number}
            name={name}
            onChange={() => addBrand(number)}
            checked={brands.includes(number)}
          />
          <label htmlFor={name}>{name}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterBrand;
