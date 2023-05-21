/* eslint-disable @typescript-eslint/no-explicit-any */
import { TypeWithKey } from "../containers/Login/models/type-with-key"

export const getValidationError = ( errorCode: any ) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: 'Ocurrio un error interno en el servidor, intenta más tarde',
        ERR_BAD_REQUEST: 'Ocurrio un error, intenta nuevamente',
        ERR_UNAUTHORIZED: 'usuario y/o contraseña incorrectos',
        ERR_INTERNAL_SERVER: 'Ha ocurrido un error, intenta más tarde'
    }
    return codeMatcher[errorCode];
}