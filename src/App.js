import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import CoinDetails from './screens/CoinDetails';
function App() {
  return (
    <>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path ='/SignUp' element={<SignUp />}/>
        <Route path = '/Home' element={<Home />} />
        <Route path = '/CoinDetails/:coinId' element={<CoinDetails />} />
      </Routes>

    </BrowserRouter>
    </>
   
  );
}

export default App;
