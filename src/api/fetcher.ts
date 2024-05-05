import {config} from "@/config/config";
import {ApiResponse, ApiResponseFullPromise} from "@/api/ApiResponse";

const apiConfig: RequestInit = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

function wrapData (data: any): string {
    return JSON.stringify(data)
}
// TODO разобраться с fetcher
export const fetcher = async (endpoint: string): Promise<ApiResponse> => {
    const url = config.apiBaseUrl + endpoint
    return await fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    })
        .then(async s => {
            console.log(s)
            if (!s.ok) {
                throw new Error('HTTP Error! Status' + s.status)
            }

            return await s.json()
        })
        .then(s => {
            return s.data as ApiResponse
        })
        .catch(e => {
            console.log('Error fetching data ', e)
            throw e
        });
}