import axios, { AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function login(firstName: string, lastName: string) {
    try {
        const response = await api.post('/login', { firstName, lastName }, { withCredentials: true });

        return response;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response) {
                throw new Error(error.response.data.message || 'Login failed');
            } else if (error.request) {
                throw new Error('No response from the server');
            } else {
                throw new Error(error.message || 'Unknown error occurred');
            }
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}



export async function logout() {
    try {
        const response = await api.post('/logout', {}, {withCredentials: true})

        return response
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response) {
                throw new Error(error.response.data.message || 'Logout failed');
            } else if (error.request) {
                throw new Error('No response from the server');
            } else {
                throw new Error(error.message || 'Unknown error occurred');
            }
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

export async function getProfile() {
    try {
        const response = await api.get('/profile', {withCredentials: true});

        return response;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response) {
                throw new Error(error.response.data.message || 'Profile fetch failed');
            } else if (error.request) {
                throw new Error('No response from the server');
            } else {
                throw new Error(error.message || 'Unknown error occurred');
            }
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}