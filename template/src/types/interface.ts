import { AxiosResponse } from 'axios'

export interface PlainObject {
    [key: string]: any
}

export interface ApiResponse<T> extends AxiosResponse {
    data: T
}

export interface ApiPromise<T> extends Promise<ApiResponse<T>> {}
