import './../../App.css';
import Catalog from '../../features/catalog/Catalog';
import { Container, createTheme, CssBaseline } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
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

function App() {
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
          <Route path='contact' element={<ContactPage />} />
          <Route path='server-error' element={<ServerError />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
 