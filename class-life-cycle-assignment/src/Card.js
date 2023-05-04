import React from "react";
import "./CardStyle.css";

class Card extends React.Component {
    render() {
        return (
                <div className="row my-5" >
                    <div className="col-12 my-2" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Food Image</th>
                                    <th>Food Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                        
                        {
                            this.props.items.map((item, index) => {
                                return(
                                        <tbody>
                                            <tr key={item.eleId} >
                                                <td><img src={`./images/${item.foodImage}`} alt={item.foodImage} /></td>
                                                <td>{item.foodName}</td>
                                                <td>{item.curDate}</td>
                                                <td>{item.curTime}</td>
                                                <td>
                                                    <div className="my-2" >
                                                        <button className="btn btn-warning" onClick={() => {
                                                            this.props.onUpdateHandler(item.eleId, index)
                                                        }} >Update</button>
                                                    </div>
                                                    <div className="my-2" >
                                                        <button className="btn btn-danger" onClick={() => {
                                                            this.props.deleteTask(item.eleId)
                                                        }} >Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                )
                            })
                        }
                        </table>
                    </div>
                </div>
        )
    }
}

export default Card;