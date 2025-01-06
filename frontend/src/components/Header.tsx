import { useContext, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.tsx";
import '../styles/Header.css'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const { logout } = useContext(AuthContext);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

    const handleLogOut = async () => {
        await logout()
    }

    const handleManageFarm = () => {
        navigate('/manage-farm')
    }

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    return (
        <header className="header">
            <div className="emblem" onClick={toggleDropdown}>
                <span role="img" aria-label="emblem">⚙️</span>
            </div>

            {isDropdownOpen && (
                <div className="dropdown">
                    <ul>
                        {location.pathname !== '/dashboard' && (
                            <li onClick={handleDashboard}>Dashboard</li>
                        )}
                        {location.pathname !== '/manage-farm' && (
                            <li onClick={handleManageFarm}>Manage Farm</li>
                        )}
                        <li onClick={handleLogOut}>Log out</li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header;