import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import PlatformSelector from './pages/PlatformSelector';
import AgentDashboard from './pages/AgentDashboard';
import ManyChatDashboard from './pages/ManyChatDashboard';

function App() {
  return (
    // Remove width constraints here
    <div className="w-screen h-screen">
      
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/platform-selector" element={<PlatformSelector />} />
      <Route path="/Agent" element={<AgentDashboard />} />
      <Route path="/ManyChatDashboard" element={<ManyChatDashboard />} />

    </Routes>
    </div>
  );
}

export default App
