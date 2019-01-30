import React, { Component } from 'react';
import Client from './client'
import UpdateClient from './UpdateClient'

class Clients extends Component{
    constructor(){
        super()
        this.state = {uid: null}
    }

    finishUpdate(){
        this.setState({uid : null});
    }
    updateUser(e){
        
        console.log(e)
    }
    updateUID(e){
        this.setState({uid : e});
        console.log("new state.uid = "+ e)
    }
    render(){
        return(
        <div>   
            <div className="header-row">
            {this.state.uid!=null? <div id="popup-box"><UpdateClient uid={this.state.uid} updateUser= {this.updateUser.bind(this)} finishUpdate={this.finishUpdate.bind(this)}/> </div>: null}
                <span>name</span>
                <span>country</span>
                <span>email</span>
                <span>emailType</span>
                <span>firstContact</span>
                <span>owner</span>
                <span>sold</span>
            </div>
            {this.props.clientsData? this.props.clientsData.clientsData.map((c,i)=>{return <Client updateUID={this.updateUID.bind(this)} ind={i} data={c} key={c._id}/>}) : <div><img width="500" height="500" src="https://i.warosu.org/data/diy/img/0006/81/1408049964044.gif" alt="loading"/></div>} 
        
        </div>)
    }
}

export default Clients;

