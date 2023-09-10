import React from 'react'
import "./User.css";
import { Userdata } from './Userdata';
const User = () => {
  return (
        <div className='main'>
            <div className='head'>
                <b>Datatable Search</b><br />
                A lighweight, extendable, dependancy free javascript HTML table plugin
            </div>
            <input type="number" defaultValue={10} style={{margin:"20px",width:"50px",height:"30px"}}/>entries per page
            <table className='table'>
                <tr>
                    <td>Name</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Website</td>
                    <td>Company</td>
                    <hr />
                </tr>
                {Userdata.map((item,index)=>{
                    return(
                    <tr>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                    <hr /> 
                    </tr>
                    );
                })}
            </table>
        </div>
  );
}
export default User;
