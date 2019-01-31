import React, { Component } from 'react';
import axios from 'axios';
import HottestCountry from './badges/HottestCountry';
import EmailsSent from './badges/EmailsSent';
import OutstandingClients from './badges/OutstandingClients';
import NewMonthClients from './badges/NewMonthClients';
import SalesByCountryBarChart from './charts/SalesByCountryBarChart';
import TopEmployees from './charts/TopEmployees'
import SalesSinceLineChart from './charts/SalesSinceLineChart'
import ClientAcquisition from './charts/ClientAcquisition'
import '../../css/analytics.css';



class Analytics extends Component{
    
     componentDidMount() {
          axios.get(`http://localhost:3007/hottestcountry`)
        .then(res => {
          this.setState({hottestcountry : res.data[0]._id})
        })
         axios.get(`http://localhost:3007/emailssent`)
            .then(res => {
            this.setState({emailssent : res.data.find(a =>a._id===null).count})
        })
         axios.get(`http://localhost:3007/outstandingclients`)
            .then(res => {
            this.setState({outstandingclients : Math.abs(res.data[0].count)})
            
        })

        axios.get(`http://localhost:3007/topsalesbycountry`)
            .then(res => {    
                this.setState({topsalesbycountry : res.data})});

        axios.get(`http://localhost:3007/topemployees`)
            .then(res => {    
                this.setState({topemployees : res.data})});
    
        axios.get(`http://localhost:3007/salessince30days`)
            .then(res => {    
                this.setState({salessince30days : res.data})});


        axios.get(`http://localhost:3007/clientacquisition`)
            .then(res => {    
                this.setState({clientacquisition : res.data})});

         axios.get(`http://localhost:3007/newmonthclients`)
            .then(res => {
            

            if(res.data[0]._id.year === (new Date().getFullYear()) && res.data[0]._id.month === (new Date().getMonth())) 
            {
                this.setState({newmonthclients : res.data[0].count})
            }
            else{
                this.setState({newmonthclients : 0})
            }
    })

    
    }

    render(){
        return(
        <div className='badges'>
            {this.state!=null? 
            <HottestCountry hottestcountry={this.state.hottestcountry}/> : null}

            {this.state!=null? <EmailsSent emailssent={this.state.emailssent}/> : null}

            {this.state!=null? <OutstandingClients outstandingclients={this.state.outstandingclients}/> : null}

            {this.state!=null? <NewMonthClients newmonthclients={this.state.newmonthclients}/> : null}
            {this.state? <SalesByCountryBarChart topsalesbycountry={this.state.topsalesbycountry} /> : null}
            {this.state? <TopEmployees topemployees={this.state.topemployees} /> : null}
            {this.state? <SalesSinceLineChart salessince30days={this.state.salessince30days}/> : null}
            <p/>
            {this.state? <ClientAcquisition clientacquisition={this.state.clientacquisition}/> : null}
            
        </div>)
    }
}

export default Analytics;