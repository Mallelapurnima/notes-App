import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import CategoryList from './components/categories/List'
import NoteList from './components/notes/List'
import AddNotes from './components/notes/add'

import LoginForm from './users/LoginForm'
import RegisterForm from './users/RegisterForm'



import {connect} from 'react-redux'




function App(props) {
  return (
    <BrowserRouter>
        <div>
          <h1>Notes App</h1>
          <ul>
            {
              Object.keys(props.user).length == 0 ? (
                <div>
                   <li><Link to="/users/register">Register</Link></li>
                    <li><Link to="/users/login">Login</Link></li>
                </div>
              ):(
                <div>
                    <li><Link to="/users/accounts">Account Settings</Link></li>
                    <li><Link to="/users/logout">Logout</Link></li>
                </div>
              )
            }
              <li><Link to="/categories">categories</Link></li>
              <li><Link to="/notes">notes</Link></li>
              <li><Link to='/notes/add'>Add Notes</Link></li>
             
          </ul>
         
           
          
         {/* <Switch> */}
         <Route path="/categories" component={CategoryList} /> 
          <Route Path="/notes" component={NoteList} exact={true} />
          <Route path="/notes/add" component={AddNotes} /> 
          <Route path="/users/register" component={RegisterForm} exact={true} /> 
          <Route path="/users/login" component={LoginForm} exact={true} /> 
          
         {/* </Switch> */}
         
         
        </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(App);


