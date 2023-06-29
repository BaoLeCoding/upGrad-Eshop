import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import NavBar from './components/NavBar/NavBar';


import LogInPage from './components/SignInPage/LogInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ProductPage from './screens/ProductPage';
import ProductDetailPage from './screens/ProductDetailPage';
import MainPageContents from './screens/MainPageContents';
import OrderPage from './screens/OrderPage';
import IsolatedTest from './screens/IsolatedTest';
import ProductModForm from './screens/ProductMod';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/">
          <Route index element={<MainPageContents />} />
          <Route path=":id" element={<ProductDetailPage />} />
        </Route>
        <Route path="order">
          <Route index element={<OrderPage />} />
        </Route>


        <Route path="login" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="test" element={<IsolatedTest />} />
        <Route path="addproduct" element={<ProductModForm />} />
      </Routes>
      {/* TODO: What if logged in but type Sign up/login without log out? */}
    </div>
  );
}

export default App;
