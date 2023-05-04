import React from "react";
import "./employeeTable.css";

class EmployeeTable extends React.Component {
    render() {
        return(
            <div className="container emp-details my-5" >
                <div className="row emp-info" >
                    <div className="col-12" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Frist Name</th>
                                    <th>Last Name</th>
                                    <th>Designation</th>
                                    <th>Age</th>
                                    <th>State</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {this.props.data.map((curElem) => {
                                const {empId, fristName, lastName, designation, age, selectValue} = curElem;
                                return(
                                    <tbody key={empId} >
                                        <tr>
                                            <td>{fristName}</td>
                                            <td>{lastName}</td>
                                            <td>{designation}</td>
                                            <td>{age}</td>
                                            <td>{selectValue}</td>
                                            <td>
                                                <div className="my-2" >
                                                    <button className="btn btn-warning" onClick={() => {
                                                        this.props.onUpdateHandler(empId)
                                                    }} >Update</button>
                                                </div>
                                                <div className="my-2" >
                                                    <button className="btn btn-danger" onClick={() => {
                                                        this.props.deleteTask(empId)
                                                    }} >Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeTable;