import { catalogConstants } from '../constant/catalog';
import { catalogService } from '../../_services/catalog';

export const catalogActions = {
  getCatalog,
};

function getCatalog(brands = '', priceMin = '', priceMax = '') {
  return (dispatch) => {
    dispatch(request());

    catalogService.getCatalog(brands, priceMin, priceMax).then(
      (catalog) => {
        dispatch(success(catalog));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: catalogConstants.CATALOG_LIST_REQUEST };
  }
  function success(catalog) {
    return { type: catalogConstants.CATALOG_LIST_SUCCESS, catalog };
  }
  function failure(error) {
    return { type: catalogConstants.CATALOG_LIST_FAILURE, error };
  }
}
