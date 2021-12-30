import { ProductServiceInterface } from "Src/services/productService";
import { getSuccessResponse, getErrorResponse } from "Src/utils/apiResponseHelpers";

export const getAllProductsHandler = (
    productService: ProductServiceInterface
) => async () => {
    try {
        const products = await productService.getAllProducts();

        if (products) {
            return getSuccessResponse({
                data: products
            })
        }

        return getErrorResponse({
            responseErrorMessage: 'Products not found',
            statusCode: 404
        });
    } catch (error) {
        return getErrorResponse({
            responseErrorMessage: 'Something went wrong when requesting products',
            error,
            statusCode: 500
        })
    }
}
