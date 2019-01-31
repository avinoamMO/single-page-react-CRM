import React, { Component } from 'react';
import { BarChart, CartesianGrid , XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

export default class SalesByCountryBarChart extends Component{
    render(){
         
        if(this.props.topsalesbycountry===null)
        {
            return(
                <div>Loading Top Sales By Country bar chart</div>
            )
        }
        else{
        return(
            <div>
                Top sales by Country
         <ResponsiveContainer width={350} height={350}>
         <BarChart layout={"horizontal"} width={250} height={250} data={this.props.topsalesbycountry}>
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