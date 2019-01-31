import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    constructor(){
        super()
        this.state=({selected: "null"})
    }
    // changeCurrentPage(){
        // this.props.shita('analytics');
    // }

    changeSelected = (e) =>
    {

        if(e.target.href!=null){
            const selected = e.target.href.split('/').pop();
            this.setState({selected: selected})
        }
        
    }
    render(){

        return(
        <div id = 'nav-bar'>
        <span id = 'nav-clients' className={this.state.selected==="clients"?"navbar-selected":null}onClick={this.changeSelected}><Link to='/clients'>Clients</Link></span>
        <span id = 'nav-actions' onClick={this.changeSelected} className={this.state.selected==="actions"?"navbar-selected":null}> <Link to='/actions'>Actions</Link></span>
        <span id = 'nav-analytics' onClick={this.changeSelected} className={this.state.selected==="analytics"?"navbar-selected":null}><Link to='/analytics'>Analytics</Link></span>
        </div>
        );
        
    }
}

export default NavBar;
