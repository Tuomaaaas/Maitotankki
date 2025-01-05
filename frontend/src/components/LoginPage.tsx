import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../api'
import '../styles/LoginPage.css'

const LoginPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await login(firstName, lastName)
            console.log(response)
            navigate('/dashboard')
        } catch (error) {
            setError('Invalid credentials');
            console.log(error)
        }
    }

    return (
        <div className="background-image">
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login</h2>
                    <label> First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <label> Last Name: </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Login</button>
                </form>
        </div>
    );
}

export default LoginPage