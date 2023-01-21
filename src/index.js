import React, { Suspense, lazy } from 'react';
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
// import store from './Component/Reduxreduce/Store/Store';
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
import MYreducerlevel2 from './Component/Reduxreduce/MYreducerlevel2';
import Profile from './Component/RouterTask/Profile';
import User from './Component/RouterTask/User';
import Loginpage from './Component/RouterTask/Loginpage';
import Html from './Component/RouterTask/W3schooltask/Html';
import Css from './Component/RouterTask/W3schooltask/Css';
import Javascript from './Component/RouterTask/W3schooltask/Javascript';
import Headersw3 from './Component/RouterTask/W3schooltask/Headersw3';
import Html1 from './Component/RouterTask/W3schooltask/Html1';
import Html2 from './Component/RouterTask/W3schooltask/Html2';
import Homew3 from './Component/RouterTask/W3schooltask/Homew3';
import Css1 from './Component/RouterTask/W3schooltask/Css1';
import Css2 from './Component/RouterTask/W3schooltask/Css2';
import Js1 from './Component/RouterTask/W3schooltask/Js1';
import Js2 from './Component/RouterTask/W3schooltask/Js2';
import File from './Component/FileUplode/File';
import Inquiry from './Inquiry';
import { ErrorBoundary } from 'react-error-boundary'
import BuggyCounter from './Component/Error/BuggyCounter';
import Example1 from './Component/Customhook/Example1';
import { ErrorFallback } from './Component/Error/ErrorFallback';

import HeaderHOC from './Component/HOC/HeaderHOC';
import MyHoc from './Component/HOC/MyHoc';
import LoginHOC from './Component/HOC/LoginHOC';
// import store from './Component/Reduxreduce/Thunk/Store/Store';
import MainUser from './Component/Reduxreduce/Thunk/MainUser';
import MainCounter from './Component/Reduxreduce/Thunk/MainCounter';
import SagaCounter from './Component/Reduxreduce/Thunk/SagaCounter';
import MainPostSaga from './Component/Reduxreduce/Thunk/MainPostSaga';
import MyFunctionRe1 from './Component/Reduxreduce/Thunk/MyFunctionRe1';
import MyFunctionRe2 from './Component/Reduxreduce/Thunk/MyFunctionRe2';
import MyFunctionRe3 from './Component/Reduxreduce/Thunk/MyFunctionRe3';
import Countertool from './Component/ReduxToolkit/Countertool';
import store from './Component/ReduxToolkit/Store/Storetool'
import storeeasythunk from './Component/ReduxToolkit/Store/Storetool';
import Form from './Component/INTERVIEW/Form';
import Apicall from './Component/INTERVIEW/Apicall';
import BootstrapBundleMin from 'bootstrap/dist/js/bootstrap.bundle.min';
import AlertDismissibleExample from './Component/Bootstrapalert';
import ApiPost from './Component/Apipost/Registration';
import Reg from './Component/INTERVIEW/Reg';
import Product from './Component/ReduxToolkit/ProductAPI/Product';
import storeProduct from './Component/ReduxToolkit/ProductAPI/Store';
import Compo1 from './Component/PureComponent/Compo1';
import FormClassscomp from './Component/PureComponent/FormClassscomp';
import Counterint from './Component/INTERVIEW/Redux/Counter';
import Storeinter from './Component/INTERVIEW/Redux/Store/Store';
import DefaultProps from './Component/Props/DefaultProps';
import DynamicForm from './Component/DynamicForm';
import Level3Form from './Component/Level3Form';



const root = ReactDOM.createRoot(document.getElementById('root'));

const HomeHOCcom = React.lazy(() => import('./Component/HOC/HomeHOC'));

let HomeHOCcom1 = MyHoc(HomeHOCcom)


root.render(
  <React.StrictMode>

    <ToastContainer />
    <App />
    {/* <Mytask /> */}
    {/* <Scrollbar /> */}
    {/* <Mycounter /> */}
    {/* <Magic /> */}
    {/* <Mydata /> */}
    {/* <Employeedatail /> */}
    {/* <StudentDetail /> */}

    {/* ---------------------------------API/UseEffect--------------------------- */}

    {/* <DataAxios /> */}
    {/* <Fetch /> */}
    {/* <Task /> */}
    {/* ---------------------------------API/UseEffect LEVEL-2 --------------------------- */}
    {/* <Counteruseeffect /> */}

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

    {/* <ApiPost /><br></br><hr /> */}
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

    {/* ------------------------React reduce / Level-1----------------------------- */}
    {/* <Provider store={store}>
      <Counter />
    </Provider> */}
    {/* ------------------------React reduce / Level-2----------------------------- */}
    {/* <MYreducerlevel2 /> */}

    {/* ------------------ -Login form with Token --------------------- */}

    {/* <Registration2 />
    <Login /> */}

    {/* ------------------ -UseRef --------------------- */}
    {/* <AudioTask /> */}

    {/* ------------------ -Routers --------------------- */}
    {/* <BrowserRouter>
      <Headers />
      <Routes>
        <Route path='/' element={<Homes />}>Home</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/contact' element={<About />}>About</Route>

        <Route path='/user' element={<User />}>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='loginpage' element={<Loginpage />}></Route>
        </Route>

        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter> */}

    {/* ====================================W3 School==================================== */}
    {/* <BrowserRouter>
      <Headersw3 />
      <Routes>
        <Route path='/' element={<Homew3 />}>CSS</Route>
        <Route path='/html' element={<Html />}>
          <Route path='html1' element={<Html1 />} />
          <Route path='html2' element={<Html2 />} />
        </Route>
        <Route path='/css' element={<Css />}>
          <Route path='css1' element={<Css1 />} />
          <Route path='css2' element={<Css2 />} />
        </Route>
        <Route path='/Javascript' element={<Javascript />}>
          <Route path='js1' element={<Js1 />} />
          <Route path='js2' element={<Js2 />} />
        </Route>
      </Routes>
    </BrowserRouter> */}


    {/* ======================================File uplode===================================== */}
    {/* <File /> */}

    {/* <Inquiry /> */}

    {/* ======================================Error hendling====================================== */}
    {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyCounter />
    </ErrorBoundary> */}

    {/* ======================================Custom Hook====================================== */}
    {/* <Example1 /> */}


    {/* ======================================HOC/Lazy Loading====================================== */}
    {/* <BrowserRouter>
      <Suspense fallback={<h2 className='m-5'>Loading...</h2>}>

        <Routes>
          <Route path='/' element={<HomeHOCcom1 />}>Home</Route>
          <Route path='/login' element={<LoginHOC />}>Login</Route>
        </Routes>
      </Suspense>
    </BrowserRouter> */}

    {/* ==================================Tunk Reducer============================ */}
    <Provider store={store}>
      {/* <MainCounter /> */}
      {/* <MainUser /> */}
      {/* <SagaCounter /> */}
      {/* <MainPostSaga /> */}
      {/* <MyFunctionRe1 /> */}
      {/* <MyFunctionRe2 /> */}
      {/* <MyFunctionRe3 /> */}
    </Provider>

    {/* <Provider store={store}>
      <Countertool />
    </Provider> */}

    {/* <Provider store={storeeasythunk}>
      <Countertool />
    </Provider> */}
    {/* 
    <Provider store={storeProduct}>
      <Product />
    </Provider> */}

    {/* =============================Interview============================= */}
    {/* <Form /> */}
    {/* <Apicall /> */}
    {/* <Reg /> */}
    {/* =============================Interview============================= */}

    {/* <AlertDismissibleExample /> */}
    {/* <Provider store={Storeinter}>
      <Counterint />
    </Provider> */}

    {/* <App /> */}


    {/* ================================PureComponent============================ */}
    {/* <Compo1 /> */}
    {/* <FormClassscomp /> */}

    {/* <DefaultProps /> */}
    {/* <DynamicForm /> */}
    {/* <Level3Form /> */}



  </React.StrictMode>
);



reportWebVitals();
