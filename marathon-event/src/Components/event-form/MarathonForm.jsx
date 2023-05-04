import React from 'react';
import VenuForm from './VenuForm';

const MarathonForm = ({ handleOnChange, handleVenueOnChange, handleEventVenues, handleForm, deleteCardInfo, venue, eventInfo, updateCardInfo, handleFormUpdate, handleFiltering }) => {
  return (
    <form className='was-validated' >
        <h3>Event Details</h3>

        <div>
        <label htmlFor='eventName' className='form-label' >Event Name:</label>
        <input type="text" className='form-control' name='eventName' value={eventInfo.eventName} onChange={handleOnChange} required />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
        <label htmlFor='eventPrise' className='form-label' >Event Prise:</label>
        <input type="text" className='form-control' name='eventPrise' value={eventInfo.eventPrise} onChange={handleOnChange} required />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
        <label htmlFor='eventTime' className='form-label' >Event Time:</label>
        <input type="text" className='form-control' name='eventTime' value={eventInfo.eventTime} onChange={handleOnChange} required />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
        <label htmlFor='eventBegain' className='form-label' >Event Begains:</label>
        <input type="text" className='form-control' name='eventBegain' value={eventInfo.eventBegain} onChange={handleOnChange} required />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <VenuForm 
            eventNames={venue.eventNames}
            eventCity={venue.eventCity}
            eventState={venue.eventState}
            zip={venue.zip}
            handleEventVenues={handleEventVenues}
            deleteCardInfo={deleteCardInfo}
            updateCardInfo={updateCardInfo}
            eventVenue={eventInfo.eventVenue}
            handleVenueOnChange={handleVenueOnChange}
            handleFormUpdate={handleFormUpdate}
            handleFiltering={handleFiltering}
        />

        <div className='btns' >
            <button type="button" className="btn mt-5" onClick={handleForm} >Submit</button>
        </div>
    </form>
  )
}

export default MarathonForm;