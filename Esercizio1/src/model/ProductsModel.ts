import {ProductModel} from './ProductModel';

export type ProductsModel = {
  products: Array<ProductModel>;
  total: number;
  skip: number;
  limit: number;
};
