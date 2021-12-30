import { ProductService } from './src/services/productService';

import { getProductByIdHandler } from './src/getProductById';
import { getAllProductsHandler } from './src/getAllProducts';

const productService = new ProductService();

export const getProductById = getProductByIdHandler(productService);
export const getAllProducts = getAllProductsHandler(productService);
