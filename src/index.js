import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import Ribs from './pic/Ribs.jpg';
import XiaoLongBao from './pic/XiaoLongBao.jpg';
import gruel from './pic/gruel.jpg';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
const green = '#006400';
const black = '#000000';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == green ? black : green;
    this.setState({ color: newColor })
  }
  render() {
    
    return (
      <div style={{background: this.state.color}}>
      <HashRouter>
      
      <div class="container">
        <h1 >Freshly Login</h1>
    
        <ul id="header" class="row">
          <li><NavLink to="/" class="col">Home</NavLink></li>
          <li><NavLink to="/Login" class="col ">Login</NavLink></li>
          <li><NavLink to="/contact" class="col ">Contact</NavLink></li>
          <li><NavLink to="/Setting" class="col ">Setting</NavLink></li>
          <li class="col "> <button id="dark" class="btn btn-light" onClick={this.changeColor}>Darkmode</button></li>
          <input id="search" type="text" placeholder="Search.."></input>
        </ul>
        <div id="content">
           <Route exact path="/" component={Home}/>
           <Route exact path="/Login" component={Login}/>
           <Route path="/Sign" component={Sign}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/Setting" component={Setting}/>
           <Route path="/password" component={password}/>
        </div>
        </div>
        
        </HashRouter>
        </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2>Home</h2>
        <h4>Xiao Long Bao</h4>
        <img src={XiaoLongBao} alt="XiaoLongBao"/>
        <p>Xiaolongbao is a type of Chinese steamed bun (baozi) from Jiangsu province, especially associated with Wuxi and Shanghai (Shanghai was formerly a part of Jiangsu province)</p>
        
        <h4 class="order">Order:</h4>
        <input type="number" name="order" class="order1" placeholder="0" ></input>
        <h4>Ribs</h4>
        <img src={Ribs} alt="Ribs"/>
        <p>Ribs of pork, beef, lamb, and venison are a cut of meat. The term ribs usually refers to the less meaty part of the chops, often cooked as a slab (not cut into separate ribs).</p>
        <h4 class="order">Order:</h4>
        <input type="number" name="order" class="order1" placeholder="0"  ></input>
        <h4>gruel</h4>
        <img src={gruel} alt="gruel"/>
        <p>Gruel is a food consisting of some type of cereal—such as ground oats, wheat, rye or rice—boiled in water or milk.</p>
        <h4 class="order">Order:</h4>
        <input type="number" name="order" class="order1" placeholder="0"  ></input>
         <br/>
      
         <form action="https://localhost:9998/api.php?action=login" 
          method="POST" id="loginform">
        <button  id="fat-btn" class="btn btn-success">Order</button>
        </form>
        </div>

    );
  }
}
class Login extends React.Component {
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
     <button name="subject" type="submit" id="fat-btn" class="btn btn-success" ><NavLink to="/Login" class="col ">Register</NavLink></button>
        </form>
      </div>
    );
  }
}

class Setting extends React.Component {
 
  render() {
  
    return (
      <div >
         <h1>Edit My profile</h1>
         <div>
      </div>
        <form action="https://localhost:9998/api.php?action=login" 
          method="POST" id="loginform">
            <h4> Firstname</h4>
            <input type="text" name="Firstname" placeholder="Firstname"
               id="Firstname" required></input><br/>
           <h4> Lastname</h4>
            <input type="text" name="Lastname" placeholder="Lastname"
               id="Lastname"  required></input><br />
                <h4> email</h4>
            <input type="email" name="email" placeholder="email"
               id="regemail"  required></input><br />
                <h4> number</h4>
            <input type="number" name="phone" placeholder="phone"
               id="regphone"  required></input><br />
                <h4> username</h4>
            <input type="text" name="username" placeholder="user name"
               id="reguser" required></input><br />
      <h4>Want to reset password?</h4>   
     <button name="subject" type="submit" id="fat-btn" class="btn btn-success" ><NavLink to="/password" class="col ">password</NavLink></button><br />
     <button name="subject" type="submit" id="fat-btn" class="btn btn-success" >Save</button>   
        </form>
      </div>
    );
  }
}
class password extends React.Component {
  render() {
    return (
      <div>
         <h4>New password</h4>
            <input type="password" name="password" placeholder="password"
               id="regpass"  required></input>     <br /> 
                <h4>Confirm password</h4>
              
            <input type="password" name="Confirm" placeholder="Confirm password"
               id="Confirm"  required></input>  <br />   
                <button name="subject" type="submit" id="fat-btn" class="btn btn-success" >Save</button>
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