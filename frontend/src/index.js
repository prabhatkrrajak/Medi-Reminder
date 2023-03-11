import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
    </BrowserRouter>
    </Provider>
    
)