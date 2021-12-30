import { winstonLogger } from "./winstonLogger";

const defaultHeaders = {
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
};

export function getSuccessResponse(
    {
        data,
        statusCode = 200
    }: {
        statusCode?: number;
        data: unknown;
    }
) {
    return {
        statusCode,
        headers: defaultHeaders,
        body: JSON.stringify(data)
    }
}

export function getErrorResponse (
    {
        responseErrorMessage,
        error,
        statusCode = 500
    }: {
        responseErrorMessage: string,
        error?: Error,
        statusCode?: number
    }
) {
    if (error) {
        winstonLogger.logError(`Error: ${ error.message  }`);
    }

    return {
        statusCode,
        headers: defaultHeaders,
        body: JSON.stringify( { message: responseErrorMessage })
    }
}
