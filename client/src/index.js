import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './utils/theme';
import { AppRouter } from './routes/router';
import './App.css';
import CirculerLoader from './components/loader';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme} initial={false}>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
    />
    <Suspense fallback={<CirculerLoader />}>
      <RouterProvider router={AppRouter} />
    </Suspense>
  </ThemeProvider>
  </React.StrictMode>
);