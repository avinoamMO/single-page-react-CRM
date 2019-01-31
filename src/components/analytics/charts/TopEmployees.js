import React, { Component } from 'react';
import { BarChart, CartesianGrid , XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';



export default class TopEmployees extends Component{
    render(){
         
        if(this.props.topemployees===null)
        {
            return(
                <div>Waiting for data to display Top Sales By Country bar chart</div>
            )
        }
        else{
        return(
            <div>
                Top Employees by Sales
         <ResponsiveContainer width={350} height={350}>
         <BarChart layout={"horizontal"} width={250} height={250} data={this.props.topemployees}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="_id" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
         </BarChart>
         </ResponsiveContainer>
         </div>
         )
    }
}
}