// For log in/account authentication purposes
import Login from './account/Login';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import Signup from './account/Signup';
import ForgotPassword from './account/ForgotPassword'; 
import Profile from './components/Profile';
import Private from './components/Private';
import UpdateProfile from './account/UpdateProfile'


//regular imports for app usages.
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Navigation from './components/Navigation';
import { getRoutesFromFirebase } from './admin/AdminFunc';
import Routes from './components/Routes';
import Home from './components/Home';
import AccountView from './account/AccountView';


function App(){
  const [routes, setRoutes] = useState([]);
  const [faveRoutes, setFaveRoutes] = useState([]);
  
  useEffect(()=>{
    getRoutesFromFirebase(setRoutes)

  }, [])
  

  return(
    
        
          <BrowserRouter>
            <Navigation />
            <AuthProvider>
              <Switch>
              
              
              <Route path="/home">
              <Home />
              </Route>
              <Route path="/routes" >
              <Routes fave={faveRoutes} setFave={setFaveRoutes} routesProps={routes} />
              </Route>
              <Private path="/account" component={AccountView} fave={faveRoutes}/>
              <Private path="/profile" component={Profile} />
              
              {/** Log in/ account paths. Will delve deeper in profiles,
              once basic functions of adding attempts done. */}
              <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}> 
                  <Private path="/logout" exact component={Dashboard}/>
                  <Private path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </div>
              </Container> 


                </Switch>
              </AuthProvider>
            </BrowserRouter>
         
        
        
    
  )
}

export default App;