import React, { Component } from 'react';

export default class OutstandingClients extends Component{
    render(){
        return(
            <div>
                {this.props.outstandingclients!=null? <div><img alt="Outstanding clients badge" width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFFmUFRoj6rKWsGdGe_Kiq861LrBpEGGzzekE59Uyi_XHat-t5A"></img><b>outstnadingclients: {this.props.outstandingclients}</b></div>: null}
            </div>
        )
    }
}