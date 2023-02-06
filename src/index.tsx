import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {Store} from './redux/Store'
import { Provider } from 'react-redux'

document.body.setAttribute('style', 'background: #112838 ')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<Provider store={Store}>
   <App/>
</Provider>

);


