import {fetcher} from "@/api/fetcher";


const api = {
    cities: () => fetcher('cities'),
    forecast: (uuid: string) => fetcher('forecast/' + uuid)
}

export default api