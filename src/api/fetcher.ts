import {config} from "@/config/config";
import {ApiResponseFullPromise, ApiResponseRaw} from "@/api/ApiResponse";

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
export const fetcher = async (endpoint:string): ApiResponseFullPromise => {
    const url = config.apiBaseUrl + endpoint
    return await fetch(url)
        .then(async s => {
            if (!s.ok) {
                throw new Error('HTTP Error! Status' + s.status)
            }

            return await s.json()
        })
        .catch(e => {
            console.log('Error fetching data ', e);
            return {};
        });
}