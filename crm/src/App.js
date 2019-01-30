import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import './clients.css';
import NavBar from './components/navbar.js'
import Clients from './components/clients.js'
import Actions from './components/actions.js'
import Analytics from './components/analytics.js'
import axios from 'axios';
        
class App extends Component {

  async componentDidMount() {
    await axios.get(`http://localhost:3007/clients`)
    .then(res => {
       this.setState({clientsData : res.data})
    })
  }

  render() {

    return (
      <Router>
      <div className="App">
       <NavBar shita = {this.changeCurrentPage}/>
       <Route path="/clients" exact render={() => <Clients clientsData={this.state} />}/>
       <Route path="/actions" exact component={Actions}/>
       <Route path="/analytics" exact render={() => <Analytics />}/>
      </div>
      </Router>
    );
  }
}

export default App;
