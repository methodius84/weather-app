import {fetcher} from "@/api/fetcher";


const api = {
    cities: () => fetcher('cities'),
    forecast: (uuid: string) => fetcher('forecast/' + uuid),
    search: (query: string) => fetcher('search?query=' + query)
}

export default api