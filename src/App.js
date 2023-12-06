import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Register from "./compontents/Register/Register";
import Login from "./compontents/Login/Login";
 
import Home from "./pages/HomePage/HomePage";
import ProductPage from './pages/ProductPage/ProductPage';
import Payment from './compontents/Payment/Payment';


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/products" element= { <ProductPage/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/payment" element= { <Payment/>} />


            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;