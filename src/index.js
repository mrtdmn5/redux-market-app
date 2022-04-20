import React from 'react';
import ReactDOM from 'react-dom';
import App from './componenets/root/App.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import configureStore from "./redux/reducers/configureStore"
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from "react-router-dom";
import  "./style/commonStyle.css"



const store=configureStore();

ReactDOM.render(
  
  
    <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    
    </React.StrictMode>
 
   
   
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
