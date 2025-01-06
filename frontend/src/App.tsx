import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FarmProvider } from "./context/FarmContext.tsx";
import LoginPage from './components/LoginPage'
import DashboardPage from "./components/DashboardPage";
import ManageFarmPage from "./components/ManageFarmPage";
import PrivateRoute from "./components/PrivateRoute.ts";
import './styles/App.css'

function App() {
  return (
      <FarmProvider>
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
                <Route
                    path="/manage-farm"
                    element={
                        <PrivateRoute>
                            <ManageFarmPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
          </Router>
      </FarmProvider>
  )
}

export default App