import { Product } from "Src/types/products";

import { products } from "./productsMocks";

export interface ProductServiceInterface {
    getProductById: (id: string) => Promise<Product>,
    getAllProducts: () => Promise<Product[]>,
}

export class ProductService implements ProductServiceInterface {
    getProductById(id: string) {
        return Promise.resolve(products.find(product => product.id === id ));
    }

    getAllProducts() {
        return Promise.resolve(products);
    }
}