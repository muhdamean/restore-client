import './../../App.css';
import Catalog from '../../features/catalog/Catalog';
import { Container, createTheme, CssBaseline } from '@mui/material';
import Header from './Header';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import {   Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import { getCookie } from '../util/util';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import BasketPage from '../../features/basket/BasketPage';
import { useAppDispatch } from '../store/configureStore';
import { setBasket } from '../../features/basket/basketSlice';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';

function App() {
  const dispatch=useAppDispatch(); //const {setBasket}=useStoreContext();
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const buyerId=getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
        .then(basket=>dispatch(setBasket(basket)))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    }else{
      setLoading(false);
    }
  },[dispatch])

  const [darkMode, setDarkMode]=useState(false);
  const paletteType=darkMode ? 'dark': 'light';
  const theme=createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType==='light' ?'#eaeaea':'#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode)
  }
  
  if(loading) return <LoadingComponent message='Initialising app...'/>

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar></ToastContainer>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />}/>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
 