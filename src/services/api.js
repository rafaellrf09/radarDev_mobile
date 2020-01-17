import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.22.1.67:5000'
})

export default api