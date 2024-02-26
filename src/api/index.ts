import {fetcher} from "@/api/fetcher";


const api = {
    cities: () => fetcher('cities')
}

export default api