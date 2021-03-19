import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-less/semantic.less';
import App from './App';
import Working from './components/howItWorks';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Contact from './components/Contact';
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>

    <App></App>
    <Working />
    

  </React.StrictMode>,
  document.getElementById('below-carousel-container')
);
ReactDOM.render(
  <React.StrictMode>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('contact-us')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
