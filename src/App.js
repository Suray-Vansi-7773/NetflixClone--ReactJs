import './App.css';
import MainHomepage from './components/Homepage/MainHomepage';
import LoginPage from './components/SignIn/LoginPage';
import SignupHome from './components/Signup/SignupHome';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<MainHomepage />} />
      </Routes>

    </div>
  );
}

export default App;
