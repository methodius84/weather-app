import {City} from "@/classes/City";
import {ApiResponseItem} from "@/api/ApiResponseItem";

export interface ApiResponse {
    Cities: City[]
    ForecastToday: object
}

export type ApiResponseKeys = keyof ApiResponse
export type ApiResponseRaw = { [P in ApiResponseKeys]?: ApiResponseItem<ApiResponse[P]>}
export type ApiResponseFullPromise = Promise<{ [P in ApiResponseKeys]: Promise<ApiResponse[P]>}>