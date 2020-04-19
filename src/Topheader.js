import * as React from "react";
import "./assets/styles/style.css";
import Login from "./Login";
import Register from "./Register";
import Mainheader from "./Mainheader";
import Home from "./Home";
import About from "./About";
import Code from "./Code";
import Namecount from "./Namecount";
import Blog from "./Blog";
import Movieapi from "./Movieapi";
import Practice from "./Practice";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Topheader() {
  return (
    <Router>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid" class="container-fluid">
          <div class="navbar-header">
            <Link to="/">
              <img
                className="logoimg"
                src={require("./assets/images/logo.png")}
              />
            </Link>
          </div>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Namecount />
      <div className="row name-count-row">
        <div className="nav-links container">
          <Link to="/about">
            <i class="fa fa-user" aria-hidden="true"></i> About
          </Link>

          <Link to="/blog">
            {" "}
            <i class="fa fa-rss" aria-hidden="true"></i> Blog
          </Link>
          <Link to="/movies">
            {" "}
            <i class="fa fa-rss" aria-hidden="true"></i> Movie api
          </Link>
          <Link to="/practice">
            {" "}
            <i class="fa fa-rss" aria-hidden="true"></i> Practice
          </Link>
        </div>
      </div>

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/practice" component={Practice} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/movies" component={Movieapi} />
    </Router>
  );
}

export default Topheader;
