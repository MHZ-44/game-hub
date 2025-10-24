import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd451c5008ebe4ed7b4f12360225d0917'
    }
})