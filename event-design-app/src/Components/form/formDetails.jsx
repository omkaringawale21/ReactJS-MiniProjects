import React from "react";

class FormDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {eventId, eventName, eventVenue, eventPin, eventBackImg, handleChange, handleForm} = this.props;
        return(
            <div className="container form-container" >
                <div className="row" >
                    <div className="col-12 event-inputs">
                        <div className="row" >
                            <div className="col-6 my-5 event-container" >
                                <div className="card" >
                                    <div className="card-body needs-validation" novalidate >
                                        <label htmlFor="eventName" className="form-label" >Event Name:</label>
                                        <input type="text" name="eventName" placeholder="Enter a Event Name" value={eventName} onChange={handleChange} className="form-control" required />
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>

                                        <label htmlFor="eventVenue" className="form-label" >Event Venue:</label>
                                        <input type="text" name="eventVenue" placeholder="Enter a Event Venue" value={eventVenue} onChange={handleChange} className="form-control" required />
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>

                                        <label htmlFor="eventPin" className="form-label" >Event Pin:</label>
                                        <input type="number" name="eventPin" placeholder="Enter a Event Pin" value={eventPin} onChange={handleChange} className="form-control" required />
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>

                                        <label htmlFor="eventBackImg" className="form-label" >Event Background Image:</label>
                                        <input type="text" name="eventBackImg" placeholder="Enter a Background Image" onChange={handleChange} value={eventBackImg} className="form-control" required />
                                        <div className="invalid-feedback">
                                            Please select a valid state.
                                        </div>

                                        <button  className="btn mt-4" onClick={() => handleForm()} >Add Event</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormDetails;