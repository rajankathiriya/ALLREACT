import logo from './logo.svg';
import './App.css';
import Child1 from './Component/useContext/Child1';
import { useState } from 'react';
import Language from './Component/useContext/createContext';
import Header from './Component/useContext/Header';

function App() {

  // const [data, setdata] = useState("My name is rajan kathiriya");

  const [lan, setlan] = useState("english");
  return (
    <Language.Provider value={{ lan, setlan }}>
      <Header />
      <Child1 />
    </Language.Provider>
  );
}

export default App;
