import axios from "axios";
import React, { Component } from "react";
class PostValues extends Component {
    constructor(props){
        super(props);
        this.state={
            id:" ",
            checkin:" ",
            checkout:" ",
            name:" ",
            phone_no:" ",
            total_mem:" ",
        }
    }
handleIdChange = (event) => {
    this.setState({ id:event.target.value});
}

handleCheckInChange = (event) => {
    this.setState({ checkin:event.target.value});
}
handleCheckOutChange = (event) => {
    this.setState({ checkout:event.target.value});
}
handleNameChange = (event) => {
    this.setState({ name:event.target.value});
}
handlePhoneNoChange = (event) => {
    this.setState({ phone_no:event.target.value});
}
handleTotalMemChange = (event) => {
    this.setState({ total_mem:event.target.value});
}

handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        id : this.state.id,
        checkin:this.state.checkin,
        checkout:this.state.checkout,
        name:this.state.name,
        phone_no:this.state.phone_no,
        total_mem:this.state.total_mem      
    }
    axios.post('http://127.0.0.1:8080/post',data)
};
render(){
    return ( 
        <div className="gel">
        <form onSubmit={this.handleSubmit} className="login-form" align="center">
            <label className="login-label">Id:</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.id}
                onChange ={this.handleIdChange}
            /><br/><br/>

            <label className="login-label">CheckIn</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.checkin}
                onChange ={this.handleCheckInChange}
            /><br/><br/>

            <label className="login-label">CheckOut</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.checkout}
                onChange ={this.handleCheckOutChange}
            /><br/><br/>

            <label className="login-label">Name</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.name}
                onChange ={this.handleNameChange}
            /><br/><br/>

            <label className="login-label">Phone No</label><br/>
            <input 
                className="login-input" 
                type="text" 
                value={this.state.phone_no}
                onChange ={this.handlePhoneNoChange}
            /><br/><br/>
             <label className="login-label">Total Mem</label><br/>
            <input  
                className="login-input" 
                type="text" 
                value={this.state.total_mem}
                onChange ={this.handleTotalMemChange}
            /><br/><br/>
            <button className="login-button" type="submit" style={{padding:10,color:"blue"}} > Submit </button>
        </form>
        </div>
    );
  }
}

export default PostValues;