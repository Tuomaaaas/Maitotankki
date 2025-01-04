import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import DashboardPage from "./components/DashboardPage.tsx";
import './styles/App.css'

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
  )
}

export default App