import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './componet/LoginPage'
import SignUpPage from './componet/SignUpPage'
import PlatformSelector from './componet/PlatformSelector';

function App() {
  return (
    // Remove width constraints here
    <div className="w-screen h-screen">
      
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/platform-selector" element={<PlatformSelector />} />

    </Routes>
    </div>
  );
}

export default App
