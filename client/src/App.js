import ForgotPassword from './components/ForgotPassword';
import AuthIn from './components/AuthIn';
import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<MainPage />} /> {/* placeholder */}
    <Route path="/userauth" element={<AuthIn/>} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    </div>
  );
}

export default App;