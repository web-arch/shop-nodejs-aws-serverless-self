import { ProductServiceInterface } from "Src/services/productService";
import { getSuccessResponse, getErrorResponse } from "Src/utils/apiResponseHelpers";

export const getProductByIdHandler = (
    productService: ProductServiceInterface
)  => async (event) => {
    const { productId } = event.pathParameters;

    try {
        const product = await productService.getProductById(productId);

        if (product) {
            return getSuccessResponse({
                data: product
            })
        }

        return getErrorResponse({
            responseErrorMessage: 'There are no products with this id',
            statusCode: 404
        });
    } catch (error) {
        return getErrorResponse({
            responseErrorMessage: `Something went wrong when requesting product with id ${productId}`,
            error,
            statusCode: 500
        })
    }
}