import React from 'react';
import Card from '../card/Card';

const VenuForm = ({ eventNames, eventCity, eventState, zip, handleEventVenues, deleteCardInfo, eventVenue, handleVenueOnChange, updateCardInfo, handleFormUpdate, handleFiltering }) => {
  return (
    <div>
        <h3>Event Venue</h3>

        <div>
            <label htmlFor='eventNames' className='form-label' >Event Names:</label>
            <input type="text" className='form-control' name='eventNames' value={eventNames} onChange={handleVenueOnChange} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
            <label htmlFor='eventCity' className='form-label' >Event City:</label>
            <input type="text" className='form-control' name='eventCity' value={eventCity} onChange={handleVenueOnChange} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
            <label htmlFor='eventState' className='form-label' >Event State:</label>
            <input type="text" className='form-control' name='eventState' value={eventState} onChange={handleVenueOnChange} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div>
            <label htmlFor='zip' className='form-label' >Event Zip:</label>
            <input type="text" className='form-control' name='zip' value={zip} onChange={handleVenueOnChange} required />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
        </div>

        <div className='my-3' >
            <label>Choose State:</label>
            <select onChange={handleFiltering} className="form-select" aria-label="Default select example">
                <option value="All">All</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
            </select>
        </div>

        <div className='btns' >
            <button type="button" className="btn" onClick={handleEventVenues} >Add</button>
            <button type="button" className="btn" onClick={handleFormUpdate} >Update</button>
        </div>

        <Card eventVenue={eventVenue} deleteCardInfo={deleteCardInfo} updateCardInfo={updateCardInfo} />
    </div>
  )
}

export default VenuForm;
