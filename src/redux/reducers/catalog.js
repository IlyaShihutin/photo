import { catalogConstants } from '../constant/catalog';

const initialState = { loader: false, catalog: [], error: '' };

export function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case catalogConstants.CATALOG_LIST_REQUEST:
      return {
        ...state,
        error: '',
        loader: true,
      };
    case catalogConstants.CATALOG_LIST_SUCCESS:
      return {
        ...state,
        error: '',
        loader: false,
        catalog: action.catalog,
      };
    case catalogConstants.CATALOG_LIST_FAILURE:
      return {
        ...state,
        loader: false,
        error: action.error,
      };
    case catalogConstants.CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}
