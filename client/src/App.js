import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ResturantDetail from './pages/RestaurantDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
function App() {
  const [Overlay, setOverlay] = useState(false);
  const persistor = persistStore(store);
  return (
    <Fragment>
       <Provider store={store}> 
       <PersistGate persistor={persistor}>
 
          <div className={`${Overlay?"Overlay":""}`}></div>
          <Router>
              <Header />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/checkout' component={Checkout} />
                  <Route exact path='/resturantDetail' render={(props)=>
                    <ResturantDetail setOverlay={setOverlay} {...props} />
                    } />
                </Switch>
              <Footer />
          </Router>
                  
       </PersistGate>
      </Provider>
    </Fragment>
  );
}

export default App;
