import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



export default class ClientAcquisition extends Component{
    render(){
        if(this.props.clientacquisition!=null)
        {
        
        return(
            <div>
                Client Acquisition
         <ResponsiveContainer width={350} height={350}>
         <PieChart width={800} height={400}>
        <Pie data={this.props.clientacquisition} cv={300} cy={200} outerRadius={80} fill="#8884d8"/>
        <Tooltip/>
       </PieChart>
         </ResponsiveContainer>
         </div>
         )
    }
    else{
        return(<div>loading pie chart</div>)
    
}

}
}