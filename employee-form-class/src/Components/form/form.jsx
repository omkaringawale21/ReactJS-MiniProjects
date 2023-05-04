import React from "react";
import EmployeeTable from "../employee-table/employeeTable";
import "./form.css";

const empData = [
    {
        empId: 1,
        fristName: "Omkar",
        lastName: "Ingawale",
        designation: "Front End React Developer",
        age: 25,
        selectValue: "active",
    },
    {
        empId: 2,
        fristName: "Shubham",
        lastName: "Ghatage",
        designation: "Front End Angular Developer",
        age: 25,
        selectValue: "inactive",
    },
    {
        empId: 3,
        fristName: "Yogesh",
        lastName: "Gotkhinde",
        designation: "Front End Angular Developer",
        age: 28,
        selectValue: "active",
    },
    {
        empId: 4,
        fristName: "Pratik",
        lastName: "Ghatage",
        designation: "Data Base Handler",
        age: 29,
        selectValue: "inactive",
    },
    {
        empId: 5,
        fristName: "Sidhesh",
        lastName: "Kadam",
        designation: "Back End Node Developer",
        age: 25,
        selectValue: "inactive",
    },
    {
        empId: 6,
        fristName: "Jyoti",
        lastName: "Pawar",
        designation: "Back End Java Developer",
        age: 35,
        selectValue: "active",
    },
    {
        empId: 7,
        fristName: "Swapnil",
        lastName: "Chikane",
        designation: "Back End Java Developer",
        age: 25,
        selectValue: "inactive",
    },
    {
        empId: 8,
        fristName: "Shubham",
        lastName: "Ladi",
        designation: "Front End Angular Developer",
        age: 26,
        selectValue: "active",
    },
    {
        empId: 9,
        fristName: "Tejas",
        lastName: "Dabholkar",
        designation: "Back End Node Developer",
        age: 27,
        selectValue: "active",
    },
    {
        empId: 10,
        fristName: "Makrand",
        lastName: "Patil",
        designation: "Back End Python Developer",
        age: 28,
        selectValue: "inactive",
    },
]

class EmployeeFrom extends React.Component {
    constructor() {
        super();

        this.state = {
            data: empData,
            empId: "",
            fristName: "",
            lastName: "",
            designation: "",
            age: "",
            selectValue: "",
        }
    }

    filterItem = (state) => {
        const updatedItems = empData.filter((curEle) => {
            return curEle.selectValue === state;
        })
        console.log(updatedItems);

        this.setState({
            data: updatedItems
        })
    }

    onFormHandler = () => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    empId: (Math.floor(Math.random() * 100 + 1)),
                    fristName: this.state.fristName,
                    lastName: this.state.lastName,
                    designation: this.state.designation,
                    age: this.state.age,
                    selectValue: this.state.selectValue,
                }
            ],
            empId: "",
            fristName: "",
            lastName: "",
            designation: "",
            age: "",
            selectValue: "",
        }, () => {console.log(this.state.data)})
    }

    onUpdateHandler = (id) => {
        const info = [...this.state.data];
        const updatedTask = info.filter((curElem) => {
            return curElem.empId === id;
        })
        console.log(updatedTask);

        updatedTask.map((curElem) => {
            this.setState({
                ...this.state,
                empId: curElem.empId,
                fristName: curElem.fristName,
                lastName: curElem.lastName,
                designation: curElem.designation,
                age: curElem.age,
                selectValue: curElem.selectValue,
            })
        })
    }

    onUpdateFormHandler = () => {
        const newState = {...this.state};
        newState.data.map((curEle) => {
            if (this.state.empId === curEle.empId) {
                curEle.fristName = this.state.fristName;
                curEle.lastName = this.state.lastName;
                curEle.designation = this.state.designation;
                curEle.age = this.state.age;
                curEle.selectValue = this.state.selectValue;
            }
            return curEle;
        });

        this.setState({
            ...newState,
            fristName: "",
            lastName: "",
            designation: "",
            age: "",
            selectValue: "",
        });
    }

    deleteTask = (id) => {
        const info = [...this.state.data];
        const deleteTask = info.filter((curElem) => {
            return curElem.empId !== id;
        })
        this.setState({
            data: deleteTask,
        })
    }

    onSelectChange = (e) => {
        this.setState({
            selectValue: e.target.value,
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleFiltering = (e) => {
        const sorting = e.target.value;
        console.log(sorting);

        if (sorting === "all") {
            this.setState({
                data: empData,
            })
        }else if (sorting === "active") {
            this.filterItem("active")
        }
        else if (sorting === "inactive") {
            this.filterItem("inactive")
        }
    }

    render() {
        const {fristName, lastName, designation, age, selectValue, data} = this.state;
        return (
            <>
            <div className="container form-container" >
                <div className="row" >
                    <div className="col-12" >
                        <div className="row" >
                            <div className="col-6 form-dtls" >
                                <div className="card" >
                                    <div className="card-body" >
                                        <h2>Employee Details</h2>
                                        <label htmlFor="fristName" >Frist Name:</label>
                                        <input type="text" className="form-control" name="fristName" value={fristName} onChange={this.onInputChange} />
                                        <label htmlFor="lastName" >Last Name:</label>
                                        <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onInputChange} />
                                        <label htmlFor="designation" >Designation:</label>
                                        <input type="text" className="form-control" name="designation" value={designation} onChange={this.onInputChange} />
                                        <label htmlFor="age" >Age:</label>
                                        <input type="number" className="form-control" name="age" value={age} onChange={this.onInputChange} />
                                        <label>
                                            Select a State:
                                            <select onChange={this.onSelectChange} >
                                                <option value="active" >Active</option>
                                                <option value="inactive" >Inactive</option>
                                            </select>
                                        </label>
                                        <div className="col-12 d-flex justify-content-around align-items-center my-5" >
                    
                                            <button type="button" className="btn col-2 text-center" onClick={() => {
                                                this.onFormHandler()
                                            }} >Submit</button>
                                            
                                            <button type="button" className="btn col-2 text-center" onClick={() => {
                                                this.onUpdateFormHandler()
                                            }} >Update</button>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container btn-container my-5" >
                <div className="row" >
                    <div className="col-12 d-flex justify-content-center" >
                        <select onChange={this.handleFiltering} >
                            <option value="all" >All</option>
                            <option value="active" >Active</option>
                            <option value="inactive" >Inactive</option>
                        </select>
                        {/* <button onClick={() => {
                                    this.setState({
                                        data: empData,
                                    })
                        }} >All</button>
                        <button onClick={() => this.filterItem("active")} >Active</button>
                        <button onClick={() => this.filterItem("inactive")} >Inactive</button> */}
                    </div>
                </div>
            </div>
            
            <EmployeeTable data={this.state.data} deleteTask={this.deleteTask} onUpdateHandler={this.onUpdateHandler} />
            </>
        );
    }
}

export default EmployeeFrom;