import './App.css';
import Child1 from './Component/useContext/Child1';
import { useState } from 'react';
import Language from './Component/useContext/createContext';
import Header from './Component/useContext/Header';
import Loginform from './Component/Apipost/Loginform';
import ApiPost from './Component/Apipost/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './Component/Apipost/Private/Requiredau';
import Product from './Component/Apipost/Product';
import TaskApiDelete from './Component/TaskApiDelete';

function App() {

  // const [data, setdata] = useState("My name is rajan kathiriya");

  const [lan, setlan] = useState("english");
  return (
    <>
      {/* <Language.Provider value={{ lan, setlan }}>
        <Header />
        <Child1 />
      </Language.Provider > */}

      {/* Authorization */}

      {/* <div>This is the application</div> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginform />}></Route>
          <Route path='/register' element={<ApiPost />}></Route>
          <Route path='/products' element={<RequireAuth><Product /></RequireAuth>}></Route>
        </Routes>
      </BrowserRouter>

      {/* <TaskApiDelete /> */}
    </>
  );
}

export default App;
