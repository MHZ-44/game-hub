import { useQuery } from "@tanstack/react-query"
import apiClient, { FetchRespone } from "../services/api-client"
import genres from "../components/data/genres"

export interface Genre{
    id: number
    name: string
    image_background: string
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchRespone<Genre>>('/genres')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres }
})

export default useGenres