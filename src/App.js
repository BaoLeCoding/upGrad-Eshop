import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import NavBar from './components/navbar/NavBar';


import LogInPage from './components/login/LogInPage';
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
    </div>
  );
}

export default App;
