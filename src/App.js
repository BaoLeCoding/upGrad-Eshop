import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';


import LogInPage from './components/SignInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>HomePagehere</h1>} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      {/* TODO: What if logged in but type Sign up/login without log out? */}
    </div>
  );
}

export default App;
