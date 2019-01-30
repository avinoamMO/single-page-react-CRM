import React, { Component } from 'react';

export default class EmailsSent extends Component{
    render(){
        return(
            <div>
                {this.props.emailssent!=null? <div><img alt="Email sent badge" width="100" height="100" src="https://cdn5.vectorstock.com/i/1000x1000/99/74/email-icon-isolated-on-white-background-vector-19239974.jpg"></img><b>emailssent: {this.props.emailssent}</b></div>: null}
            </div>
        )
    }
}