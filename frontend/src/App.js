import './App.css';
import {Routes,Route} from 'react-router-dom'

import { Button, ButtonGroup } from '@chakra-ui/react'

import Layout from './view-components/Layout';
import Login from './controller-components/Login';
import Signup from './controller-components/Signup';
import Header from './view-components/Header';
import Footer from './view-components/Footer';

function App() {
  let login = false;
  return (
    <div className="App">
   {/*unprotected routes */}
   {
    !login ? 
    <>
    <Header/>
    <Routes>
      <Route index exact path='/' element={<Login/>}/>
      <Route index exact path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
    </>
    :
   <h2>dashboard</h2>
   }
    </div>
  );
}

export default App;
