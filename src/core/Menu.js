import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";
import './Menu.css';
import logo from './logo.png';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div className='Navbar'>
  
    <ul className="nav nav-tabs NavbarItems">
    {/* <i class="fas fa-dumbbell"></i><h1 className="navbar-logo">FitClick</h1> */}
    <img src={logo} height='50px' width='50px' padding='4px'/>
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link navbar-logo" to="/">
         <i class="fa fa-home" aria-hidden="true"></i> Home 
        </Link>
      </li>
      <li className="nav-item">
        <Link style={currentTab(history, "/advice")} className="nav-link" to="/advice">
         <i className="fas fa-hand-holding-medical"></i> Advices 
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role === 0 &&(
      <li className="nav-item">
        <Link style={currentTab(history, "/ai")} className="nav-link" to="/ai">
         <i className="fas fa-hand-holding-medical"></i> AI 
        </Link>
      </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 0 &&(
        <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Bucket
        </Link>
      </li>
      )}
      {/* <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Bucket
        </Link>
      </li> */}
      {isAutheticated() && isAutheticated().user.role === 0 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            User Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            Trainer Dashboard
          </Link>
        </li>
      )}
      {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
             <i class="fas fa-user-plus"></i> Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
           <i class="fas fa-sign-in-alt"></i> Sign In
            </Link>
          </li>
        </Fragment>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
