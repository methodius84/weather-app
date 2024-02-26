import {SystemConfig} from "@/config/SystemConfig";

const defaultConfig: SystemConfig = {
    apiBaseUrl: 'http://localhost:8000/api/v1/weather/',
    date: new Date()
}

export const config = defaultConfig