import React from 'react'
import {startSetUser} from '../actions/user'

import {connect} from 'react-redux'
class LoginForm extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
       this.handleChange= this.handleChange.bind(this)
       this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password

        }
        this.props.dispatch(startSetUser(formData))
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>login form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>email
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label> <br/>
                    <label> password
                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/></label><br/>

             
                    <input type="submit" />

                </form>
            </div>
        )
    }
}
export default connect()(LoginForm)