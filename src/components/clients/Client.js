import React, { Component } from 'react';

export default class Client extends Component{

    

    handleClick = () =>{
        this.props.updateUID(this.props.data._id)
    }
    render(){
        return(

        <div className ="client-row" key={this.props.data.name} onClick={this.handleClick}>
            <div>{this.props.data.name}</div>
            <div>{this.props.data.country}</div>
            <div>{this.props.data.email}</div>
            <div>{this.props.data.emailType}</div>
            <div>{this.props.data.firstContact}</div>
            <div>{this.props.data.owner}</div>
            <div>{this.props.data.sold}</div>

        </div>)
    }
}