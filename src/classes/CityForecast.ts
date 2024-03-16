export interface CityForecast {
    uuid: string,
    temperature: number
    feels_like: number
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    cloudiness: number,
    wind_speed: number,
    wind_degree: number,
    wind_gust: number | null,
    visibility: number,
    weather: string,
    weather_description: string,
    created_at: Date,
    updated_at: Date
}