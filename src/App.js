import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { catalogActions } from './redux/actions/catalog';
import { favoriteActions } from './redux/actions/favorite';
import Filters from './views/Filters/Filters';
import Catalog from './views/Сatalog/Catalog';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const favoriteProducts = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : [];
    dispatch(catalogActions.getCatalog());
    dispatch(favoriteActions.updateFavorite(favoriteProducts));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Filters />
        <Catalog />
      </div>
    </div>
  );
};

export default App;
