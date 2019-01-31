import React, { Component } from 'react';

class Actions extends Component{
    render(){
        return(
        <div>
        <b>UPDATE</b><p/>
        Client: <input type="text" placeholder="client name"/><p/>
        Transfer ownership to <select></select> <button>Transfer</button><p/>
        Send Email: <select></select><button>Send</button><p/>
        Declare Sale! <button>Declare</button>
        <hr/>
        <b>ADD CLIENT</b><p/>
        First name: <input type="text"/><p/>
        Surname: <input type="text"/><p/>
        Country: <input type="text"/><p/>
        Owner: <input type="text"/><p/>
        <button>Add a new client</button>
        </div>)
    }
}

export default Actions;