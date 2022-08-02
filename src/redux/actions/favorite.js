import { favoriteConstants } from '../constant/favorite';

export const favoriteActions = {
  updateFavorite,
};

function updateFavorite(products) {
  return { type: favoriteConstants.UPDATE_PRODUCT, products };
}
