import React from 'react';
import './components/forgotpassword.css'
import { Login } from './components/login/login';
import Heading from './form/header';
import Chefinfo from './form/personalinfo';
import Userinfo from './form/userinfo';
import Cart from './ordering/cart';
import Orders from './ordering/orders';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import './form/navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter } from "react-router-dom";
import  forgot from "./components/forgot.component";
import Newpassword from './components/newpassword.component';
import Forgot from './components/forgot.component';


export default function Navigator_inside_signin()
 {


    return (
        <div className="navi">
            <Router>
              <div className="side-nav">
               <NavLink activeClassName="active"  to="/" className="links">  Sign In </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active"  to="/form/personalinfo" className="links" > REGISTER for chef </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active"  to="/form/userinfo" className="links"> REGISTER for user </NavLink> &nbsp; &nbsp; &nbsp;
               <NavLink activeClassName="active" to="/components/forgot.component" className="links"> Forgot password ? </NavLink> &nbsp; &nbsp; &nbsp;
              </div>

            <Switch className="disp">
               <Route exact path="/" component={Login} />
		       <Route  path="/form/personalinfo" component={Chefinfo}/>
			   <Route  path="/form/userinfo" component={Userinfo }/>
               <Route  path="/components/forgot.component" component={Forgot}/>        
	        </Switch>
            </Router> 


        </div>
    )
}
