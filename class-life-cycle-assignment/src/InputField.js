import React from "react";
import Card from "./Card.js";

class InputField extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            foodName: "",
            foodImage: "",
            curDate: "",
            curTime: "",
            eleId: "",
        }
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleFileInput = (e) => {
        this.setState({
            foodImage: e.target.files[0].name,
        })
    }

    onDeleteHandler = (id) => {
        const lists = [...this.state.items];
        const deleteTask = lists.filter((ele) => {
            return ele.eleId != id;
        })
        this.setState({
            items: deleteTask,
        })
    }

    onUpdateHandler = (id) => {
        const lists = [...this.state.items];
        const updateTask = lists.filter((ele) => {
            return ele.eleId === id;
        })
        console.log(updateTask);

        updateTask.map((elem) => {
            this.setState({
                    ...this.state,
                    eleId: elem.eleId,
                    foodName: elem.foodName,
                    foodImage: elem.foodImage,
                    curDate: elem.curDate,
                    curTime: this.state.curTime,
            })
            console.log(elem.foodName + " " + elem.foodImage + " " + elem.curDate + " " + elem.curTime);
        })
    }

    onUpdateFormHandler = () => {
        const newState = {...this.state};
        newState.items.map((item) => {
            if (this.state.eleId === item.eleId) {
                item.foodName = this.state.foodName;
                item.foodImage = this.state.foodImage;
                item.curDate = this.state.curDate;
                item.curTime = this.state.curTime;
            }
            return item;
        });

        this.setState({
            ...newState,
            eleId: "",
            foodName: "",
            foodImage: "",
            curDate: "",
            curTime: "",
        });
    }

    onFormHandler = () => {
        this.setState({
            items: [
                ...this.state.items,
                {
                    eleId: (Math.floor((Math.random() * 100) + 1)),
                    foodName: this.state.foodName,
                    foodImage: this.state.foodImage,
                    curDate: this.state.curDate,
                    curTime: this.state.curTime,
                }
            ],
            eleId: "",
            foodName: "",
            foodImage: "",
            curDate: "",
            curTime: "",
        }, () => {console.log(this.state.items)})
    }

    render() {
        const {foodName, foodImage, curDate, curTime, id} = this.state;
        return(
            <div>
                <div>
                    <div className="my-2 col-12" >
                        <label htmlFor="foodName">Food Image: </label>
                        <input type="text" className="form-control" placeholder="Enter a Task" value={foodName} onChange={this.onChange} name="foodName" />
                    </div>
                    <div className="my-2 col-12" >
                        <label htmlFor="foodImage">Food Name: </label>
                        <input type="file" className="form-control" placeholder="Enter a Description"  onChange={this.handleFileInput} name="foodImage" />
                    </div>
                    <div className="my-2 col-12" >
                        <label htmlFor="date">Date: </label>
                        <input type="Date" className="form-control" placeholder="Enter a Date" value={curDate} onChange={this.onChange} name="curDate" />
                    </div>
                    <div className="my-2 col-12" >
                        <label htmlFor="time">Time: </label>
                        <input type="time" className="form-control" placeholder="Enter a Time" value={curTime} onChange={this.onChange} name="curTime" />
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center" >
                    
                        <button type="button" className="btn btn-primary my-2 col-4 text-center" onClick={() => {
                            this.onFormHandler()
                        }} >Add</button>
                        
                        <button type="button" className="btn btn-primary my-2 col-4 text-center" onClick={() => {
                            this.onUpdateFormHandler()
                        }} >Update</button>
                    
                    </div>
                </div>

                <Card deleteTask={this.onDeleteHandler} onUpdateHandler={this.onUpdateHandler} items={this.state.items} />
            </div>
        )
    }
}

export default InputField;