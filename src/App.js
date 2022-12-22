import logo from './logo.svg';
import './App.css';
import Child1 from './Component/useContext/Child1';
import { useState } from 'react';
import Language from './Component/useContext/createContext';
import Header from './Component/useContext/Header';
import Loginform from './Component/Apipost/Loginform';
import Registration2 from './Component/Axios/TokenRegistration/Registration';
import ApiPost from './Component/Apipost/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './Component/Apipost/Private/Requiredau';
import Product from './Component/Apipost/Product';

function App() {

  // const [data, setdata] = useState("My name is rajan kathiriya");

  // const [lan, setlan] = useState("english");
  return (
    <>
      {/* <Language.Provider value={{ lan, setlan }}> */}
      {/* <Header /> */}
      {/* <Child1 /> */}
      {/* </Language.Provider> */}

      {/* Authorization */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginform />}></Route>
          <Route path='/register' element={<ApiPost />}></Route>
          <Route path='/product' element={<RequireAuth><Product /></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
