import React from 'react';  
import { Link } from "react-router-dom";   
import axios from 'axios';  
import './HotelDel.css';
class Remove extends React.Component
{
    state ={
        Expense:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/get')
        .then(response => {
          this.setState({ Expense: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    
    }
    async remove(id)
    {
        axios.delete('http://127.0.0.1:8080/delete/'+id,
        {
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
    
        .then(response => response.json());
    }
    render()
    {
        const {Expense} = this.state;
    const rows=
    Expense.map(Expense =>
        <tr key={Expense.id}>
            <td className="text-left">{Expense.id}</td>
            <td className="text-left">{Expense.checkin}</td>
            <td className="text-left">{Expense.checkout}</td>
            <td className="text-left">{Expense.name}</td>
            <td className="text-left">{Expense.phone_no}</td>
            <td className="text-left">{Expense.total_mem}</td>
            <td><button class="button button8"  onClick={() => this.remove(Expense.id)} onChange={Expense}>Delete</button></td>
        </tr>)


    return(
        <div>
             <Link to="/">
            <button class="button button5" style={{padding:20}}>
                 Home
            </button>
            </Link>
        <div class="table-title">
        <h3 align="center">Table</h3>
        </div>
        <table  class="table-fill" align="center">
        <thead>
        <tr>
        <th class="text-left">Id</th>
        <th class="text-left">CheckIn</th>
        <th class="text-left">CheckOut</th>
        <th class="text-left">Name</th>
        <th class="text-left">Phone No</th>
        <th class="text-left">Total Members</th>
        </tr>
        </thead>
                <tbody>
                   {rows}
                </tbody>
         </table>    
        </div>
    );
}
}
export default Remove;