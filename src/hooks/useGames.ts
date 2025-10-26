import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

interface Game{
    id: number
    name: string
}

interface FetchGamesRespone{
    count: number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGamesRespone>('/games')
            .then(response => setGames(response.data.results))
            .catch(error => setError(error.message))

    })

    return { games, error }
}
export default useGames