import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export async function login(firstName: string, lastName: string) {
    try {
        const response = await api.post('/login', {firstName, lastName})

        return response
    } catch (error) {
        throw error;
    }
}