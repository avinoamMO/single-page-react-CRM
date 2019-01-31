import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import '../src/css/App.css';
import '../src/css/clients.css';
import NavBar from './components/NavBar.js'
import Clients from './components/clients/Clients.js'
import Actions from './components/actions/Actions.js'
import Analytics from './components/analytics/Analytics.js'
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
