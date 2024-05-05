import {City} from "@/classes/City";
import {CityForecast} from "@/classes/CityForecast";

export interface ApiResponse {
    Cities: City[],
    Forecast: CityForecast,
    FoundedCities: City[],
}

export type ApiResponseKeys = keyof ApiResponse
export type ApiResponseFullPromise = Promise<{ [P in ApiResponseKeys]: Promise<ApiResponse[P]>}>