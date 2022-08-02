import { favoriteConstants } from '../constant/favorite';

const initialState = { favorite: [] };

export function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case favoriteConstants.UPDATE_PRODUCT:
      return {
        ...state,
        favorite: [...action.products],
      };

    default:
      return state;
  }
}
