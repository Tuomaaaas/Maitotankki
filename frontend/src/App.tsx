import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import DashboardPage from "./components/DashboardPage.tsx";
import PrivateRoute from "./components/PrivateRoute.ts";
import './styles/App.css'

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <DashboardPage />
                    </PrivateRoute>
                }
            />
        </Routes>
      </Router>
  )
}

export default App