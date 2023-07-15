import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { store } from "./store/store";
import { Provider } from 'react-redux';

// here {store} is a store
ReactDOM.createRoot(document.getElementById('root')).render( 
  <Provider store= {store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )


