import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateClient extends Component{

    async componentDidMount() {
        await axios.get(`http://localhost:3007/client/${this.props.uid}`)
        .then(res => {
            console.log(res.data[0].name)
            let firstName = res.data[0].name
            let lastname = res.data[0].name
            let country = res.data[0].country
           this.setState({
                        firstName : res.data[0].name.split(" ")[0],
                        lastName : res.data[0].name.split(" ")[1],
                        country : res.data[0].country,
                        id: res.data[0]._id})
        })
      }

    handleChange = (e) =>
    {
        this.setState({[e.target.id] : e.target.value})   
    }
    handleUpdate = () =>
    {
        const newUser = {id : this.state.id, name : [this.state.firstName] + " " +[this.state.lastName], country : this.state.country}
        axios.post(`http://localhost:3007/client/${this.props.uid}`, {newUser})
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    
        console.log(this.state.firstName)
        this.props.finishUpdate();
    }
    render(){
        console.log(this.state)
        if(this.state!=null){
            return(<div>
                First name: <input id="firstName" placeholder={this.state.firstName} value={this.state.firstName} onChange={this.handleChange} type="text"/><p/> 
                Last name: <input id="lastName" placeholder={this.state.lastName} value={this.state.lastName} onChange={this.handleChange} type="text"/><p/> 
                Country: <input id="country" type="text" placeholder={this.state.country} value={this.state.country} onChange={this.handleChange}/><p/> 
                <button onClick={this.handleUpdate}>Update</button>
                <button onClick={this.props.finishUpdate}>Cancel</button>
                {this.props.uid}
                </div>)
        }
        else{
            return(<div>Loading</div>)
        }
     
    }
}