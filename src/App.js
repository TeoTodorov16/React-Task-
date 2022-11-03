import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LogIn from './components/LogIn';
import Profile from './components/ProfileForm/Profile';
import SignUp from './components/SignUpForm/SignUp';
import RecoverPassword from './components/ForgotPassword/RecoverPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/RecoverPassword" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
