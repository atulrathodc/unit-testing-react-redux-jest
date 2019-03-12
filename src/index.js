import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk';
const axios = require('axios');
const middleware = [ thunk ]
// const store = createStore(rootReducer
// ,applyMiddleware(...middleware)
//   )

// const store = createStore(rootReducer
// ,applyMiddleware(...middleware)
//   )
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(rootReducer,applyMiddleware(...middleware));


console.log("thunks",thunk)

// axios.get('http://localhost:8081/spring4/api1')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     console.log("final");
//     // always executed
//   });
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
   
//       console.log(this.responseText);
//     }
//   };
//   xhttp.open("GET", "http://localhost:8081/spring4/api1", true);
//   xhttp.send();
// }
// loadDoc()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)