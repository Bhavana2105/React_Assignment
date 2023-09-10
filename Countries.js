import React,{Component} from 'react'
import "./Countries.css";

class Countries extends Component{
    render(){
        return (
            <div>
                <tr>
                    <td>
                        <img  className='img1' src={this.props.img}/>
                    </td>
                    <td className='textfont'><div className='head'>Country:</div><div className='value'>{this.props.country}</div></td>
                    <td className='textfont'><div className='head'>Sales:</div><div className='value'>{this.props.Sales}</div></td>
                    <td className='textfont'><div className='head'>Value:</div><div className='value'>{this.props.value}</div></td>
                    <td className='textfont'><div className='head'>Bounce:</div><div className='value'>{this.props.Bounce}</div></td>
                </tr>
            </div>
        );
    }
}

export default Countries