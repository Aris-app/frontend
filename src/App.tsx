import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './componet/LoginPage'
import SignUpPage from './componet/SignUpPage'

function App() {
  return (
    // Remove width constraints here
    <div className="w-screen h-screen">
      
     <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
    </div>
  );
}

export default App
