import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { login as LogUserIn, logout as LogUserOut, getProfile } from "../api.ts";

interface AuthContextType {
    isAuthenticated: boolean;
    message: string;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const defaultAuthContext: AuthContextType = {
    isAuthenticated: false,
    message: '',
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const setAuthState = (authState: boolean, message?: string) => {
        setIsAuthenticated(authState);
        setMessage(message || '');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getProfile();
                setAuthState(true);
            } catch {
                setAuthState(false);
            }
        };

        fetchData();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            await LogUserIn(username, password);
            setAuthState(true, 'Login successful!');
        } catch (error) {
            if (error instanceof Error) {
                setAuthState(false, error.message);
            } else {
                setAuthState(false, 'Login failed');
            }
        }
    };

    const logout = async () => {
        try {
            await LogUserOut();
            setAuthState(false, 'Logout successful!');
        } catch (error) {
            if (error instanceof Error) {
                setAuthState(false, error.message);
            } else {
                setAuthState(false, 'Login failed');
            }
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, message, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
