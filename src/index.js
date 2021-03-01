import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
    

      <HashRouter>
      <div class="container">
 
</div>
      <div class="container">
        <h1>Freshly Login</h1>
        <ul id="header" class="row">
          <li><NavLink to="/" class="col">Home</NavLink></li>
          <li><NavLink to="/Sign" class="col ">Sign Up</NavLink></li>
          <li><NavLink to="/contact" class="col ">Contact</NavLink></li>
          <li><NavLink to="/Setting" class="col ">contact</NavLink></li>
        </ul>
        <div id="content">
           <Route exact path="/" component={Home}/>
           <Route path="/Sign" component={Sign}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/Setting" component={Setting}/>
        </div>
        </div>
        </HashRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form action="https://localhost:9998/api.php"  method="GET"> 
        <h4>username</h4>
            <input type="text" name="username" placeholder="user name" required></input><br/>
            <h4>password</h4>
            <input type="password" name="password" placeholder="password"
                required></input><br/>
         <button name="subject" type="submit" id="fat-btn" class="btn btn-success">Loggin</button>
         </form>
         <br/>
         <NavLink to="/Sign">Sign Up</NavLink>
         <form action="https://localhost:9998/api.php?action=login" 
      method="POST" id="loginform">
        <button  id="fat-btn" class="btn btn-success">Forgot Password?</button>
        </form>
        </div>

    );
  }
}

class Sign extends React.Component {
  render() {
    return (
      <div>
       
         <h1>Sign Up</h1>
        <form action="https://localhost:9998/api.php?action=login" 
          method="POST" id="loginform">
            <h4>Firstname</h4>
            <input type="text" name="Firstname" placeholder="Firstname"
               id="Firstname" required></input><br/>
           <h4>Lastname</h4>
            <input type="text" name="Lastname" placeholder="Lastname"
               id="Lastname"  required></input><br />
                <h4>email</h4>
            <input type="email" name="email" placeholder="email"
               id="regemail"  required></input><br />
                <h4>number</h4>
            <input type="number" name="phone" placeholder="phone"
               id="regphone"  required></input><br />
                <h4>username</h4>
            <input type="text" name="username" placeholder="user name"
               id="reguser" required></input><br />
                <h4>password</h4>
            <input type="password" name="password" placeholder="password"
               id="regpass"  required></input>     <br /> 
                <h4>Confirm password</h4>
            <input type="password" name="Confirm" placeholder="Confirm password"
               id="Confirm"  required></input>  <br />                      
     <button name="subject" type="submit" id="fat-btn" class="btn btn-success" >Loggin</button>
        </form>
      </div>
    );
  }
}
class Setting extends React.Component {
  render() {
    return (
      <div>
       
         <h1>Sign Up</h1>
        <form action="https://localhost:9998/api.php?action=login" 
          method="POST" id="loginform">
            <h4>Firstname</h4>
            <input type="text" name="Firstname" placeholder="Firstname"
               id="Firstname" required></input><br/>
           <h4>Lastname</h4>
            <input type="text" name="Lastname" placeholder="Lastname"
               id="Lastname"  required></input><br />
                <h4>email</h4>
            <input type="email" name="email" placeholder="email"
               id="regemail"  required></input><br />
                <h4>number</h4>
            <input type="number" name="phone" placeholder="phone"
               id="regphone"  required></input><br />
                <h4>username</h4>
            <input type="text" name="username" placeholder="user name"
               id="reguser" required></input><br />
                <h4>password</h4>
            <input type="password" name="password" placeholder="password"
               id="regpass"  required></input>     <br /> 
                <h4>Confirm password</h4>
            <input type="password" name="Confirm" placeholder="Confirm password"
               id="Confirm"  required></input>  <br />                      
     <button name="subject" type="submit" id="fat-btn" class="btn btn-success" >Loggin</button>
        </form>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact Method</h2>
        <p>e-mail:xxxx@gmial.com</p>
        <p>Phone Number: xxx-xxx-xxx</p>
        <p>Address: 10 shhh street Brisbane,QLD</p>
      </div>
    );
  }
}



ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
);
 
export default Main;