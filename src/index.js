import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import reportWebVitals from './reportWebVitals';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


import Home from './Component/Home';
import Mycounter from './Component/Mycounter';
import Magic from './Component/Magic';
import Mydata from './Component/Mydata';
import Scrollbar from './Component/Scrollbar';
import Mytask from './Component/Pages/Mytask';
import Fetch from './Component/Useeffect/Fetch';
import Task from './Component/Useeffect/Task1';
import Axios from './Component/Useeffect/Axios';
import DataAxios from './Component/Useeffect/Axios';
import Employeedatail from './Component/Form/Employeedatail';
import StudentDetail from './Component/Form/StudentDetail';
import Data from './Component/Test/Data';
import Formtest from './Component/Test/Formtest';
import TestAPI1 from './Component/Test/TestAPI1';
import TestAPI2 from './Component/Test/TestAPI2';
import TestAPI3 from './Component/Test/TestAPI3';
import TestAPI4 from './Component/Test/TestAPI4';
import TestAPI5 from './Component/Test/TestAPI5';
import TestAPI6 from './Component/Test/TestAPI6';
import Formcollage from './Component/Form/Formcollage';
import FormTask from './Component/Form/FormTask';
import Mydataformik from './Component/Form/Myformikform';
import FormikTask from './Component/Form/FormikTask';
import Carformik from './Component/Form/Carformik';
import Formyupvalidation from './Component/Form/Formyupvalidation';
import Simpleprops from './Component/Props/Simpleprops';
import Task1props from './Component/Props/Task1props';
import Item from './Component/Props/Item';
import Task1empmain from './Component/Props/Task1empmain';
import Aggrid1 from './Component/Grid/Aggrid1';
import Aggrid2 from './Component/Grid/Aggrid2';
import ClassApicall from './Component/Class/ClassApicall';
import Loginform from './Component/Apipost/Loginform';
import Registration from './Component/Apipost/Registration';
import Submitpost from './Component/Test/Test2/Submitpost';
import Image from './Component/Test/Test2/Image';
import Tasktest1 from './Component/Test/Test2/Tasktest1';
import Form1mui from './Component/Material-UI/Form1mui';
import ReactMemo from './Component/ReactMemo/ReactMemo';
import Reactusememo from './Component/ReactMemo/Reactusememo';

import { Provider } from 'react-redux'
import Counter from './Component/Reduxreduce/Counter';
import store from './Component/Reduxreduce/Store/Store';
import Registration2 from './Component/Axios/TokenRegistration/Registration';
import Login from './Component/Axios/TokenRegistration/Login';
import Globalaxios from './Component/Axios/Globalaxios'

import AudioTask from './Component/useRef/Audio';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from './Component/RouterTask/Headers';
import Footer from './Component/RouterTask/Footer';
import Homes from './Component/RouterTask/Homes';
import Contact from './Component/RouterTask/Contact';
import About from './Component/RouterTask/About';
import Error from './Component/RouterTask/Error';
import UseeffectLimitlevel2 from './Component/Useeffect/UseeffectLimitlevel2';
import Counteruseeffect from './Component/Useeffect/Counteruseeffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ToastContainer />
    {/* <Mytask /> */}
    {/* <Scrollbar /> */}
    {/* <Mycounter /> */}
    {/* <Magic /> */}
    {/* <Mydata /> */}
    {/* <Employeedatail /> */}
    {/* <StudentDetail /> */}

    {/* ---------------------------------API--------------------------- */}

    {/* <DataAxios /> */}
    {/* <Fetch /> */}
    {/* <Task /> */}

    {/* ---------------------------------test--------------------------- */}
    {/* <Data /> */}
    {/* <Formtest /> */}
    {/* <TestAPI1 /> */}
    {/* <TestAPI2 /> */}
    {/* <TestAPI3 /> */}
    {/* <TestAPI4 /> */}
    {/* <TestAPI5 /> */}
    {/* <TestAPI6 /> */}

    {/* ---------------------------------FORM--------------------------- */}
    {/* <Formcollage /> */}
    {/* <FormTask /> */}

    {/* --------------------------FORMIK-FORM--------------------------- */}
    {/* <Mydataformik /> */}
    {/* <FormikTask />   */}
    {/* <Carformik /> */}
    {/* <Formyupvalidation /> */}

    {/* --------------------------Props--------------------------- */}
    {/* <Simpleprops /> */}
    {/* <Task1props /> */}
    {/* <Item /> */}
    {/* <Task1empmain /> */}

    {/* --------------------------AG-Grid--------------------------- */}
    {/* <Aggrid1 /> */}
    {/* <Aggrid2 /> */}

    {/* --------------------------Class Component--------------------------- */}
    {/* <ClassApicall /> */}

    {/* --------------------------API Post--------------------------- */}

    {/* <Registration /><br></br><hr /> */}
    {/* <Loginform /> */}

    {/* --------------------------Test 2--------------------------- */}
    {/* <Submitpost /> */}
    {/* <Image /> */}
    {/* <Tasktest1 /> */}

    {/* --------------------------Material UI--------------------------- */}
    {/* <Form1mui /> */}

    {/* --------------------------ReactMemo /useCallback-memorible function--------------------------- */}
    {/* <ReactMemo /> */}

    {/* ------------------------useMemo memorible value----------------------------- */}
    {/* <Reactusememo te3 xt="My name is rajan kathiriya.i am 20 years old. im currently pursuing in bechrol of commerse in M.S.university.I want to become feature in Web developer, I want to thing i am good chess player... " /> */}

    {/* ------------------------React reduce----------------------------- */}
    {/* <Provider store={store}>
      <Counter />
    </Provider> */}

    {/* ------------------ -Login form with Token --------------------- */}
    {/* <Registration2 /> */}
    {/* <Login /> */}

    {/* ------------------ -UseRef --------------------- */}
    {/* <AudioTask /> */}

    {/* ------------------ -Routers --------------------- */}
    {/* <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Homes />}>Home</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter> */}
    <Counteruseeffect />

  </React.StrictMode>
);



reportWebVitals();
