import axios from "axios";
import "./HotelGet.css";
import React,{Component} from "react";
class GetValues extends Component{
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:8080/get').then(response=>{
            this.setState({data:response.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    render()
      {
        return(
            <table border={1} align="center" className="g">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>CheckIn</th>
                        <th>CheckOut</th>
                        <th>Name</th>
                        <th>Phone No</th>
                        <th>Total Members</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(user=>(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.checkin}</td>
                            <td>{user.checkout}</td>
                            <td>{user.name}</td>
                            <td>{user.phone_no}</td>
                            <td>{user.total_mem}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
      }
}
export default GetValues;