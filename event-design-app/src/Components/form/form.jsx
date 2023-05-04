import React from "react";
import EvenetForm from "./eventForm";
import "../form/form.css";

class EventDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false,
        }
    }

    render() {
        return(
            <>
            <div className="container event-details" >
                <div className="row" >
                    <div className="col-12" >
                        <div className="row" >
                            <div className="col-12 heading" >
                                <h2>Event Add : <button className="fas fa-plus" onClick={() => {
                                    this.setState({
                                        show: !this.state.show,
                                    })}
                                } ></button></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.show && <EvenetForm />}
            </>
        );
    }
}

export default EventDetails;