import axios, { AxiosRequestConfig } from "axios"

export interface FetchRespone <T>{
    count: number
    results: T[]
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd451c5008ebe4ed7b4f12360225d0917'
    } 
})

class APIClient<T>{
    endpoint: string

    constructor (endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchRespone<T>>(this.endpoint, config)
            .then((res) => res.data)
    }
}

export default APIClient