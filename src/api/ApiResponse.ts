import {City} from "@/classes/City";

export interface ApiResponse {
    Cities: City[]
}

export type ApiResponseKeys = keyof ApiResponse
export type ApiResponseFullPromise = Promise<{ [P in ApiResponseKeys]: Promise<ApiResponse[P]>}>