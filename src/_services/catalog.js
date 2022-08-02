import { DOMEN } from '../_constants/other';
import 'regenerator-runtime/runtime';
import axios from 'axios';
export const catalogService = {
  getCatalog,
};
async function getCatalog(brands = [], priceMin = '', priceMax = '') {
  const brandStr = brands.map((brand) => `brands[]=${brand}&`).join('');

  const result = await axios.get(
    `${DOMEN}?${brandStr}price[min]=${priceMin}&price[max]=${priceMax}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: 'Basic ' + btoa('admin' + ':' + 'Wj3g4W'),
    }
  );
  return result.data.products;
}
