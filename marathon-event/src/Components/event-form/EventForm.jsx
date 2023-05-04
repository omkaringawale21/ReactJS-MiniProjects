import React, { useEffect, useState } from 'react';
import eventData from '../context/Context';
import './EventForm.css';
import MarathonForm from './MarathonForm';

const EventForm = () => {
  const [eventInfo, setEventInfo] = useState(eventData);

  const [venue, setVenue] = useState({
    id: "",
    eventNames: "",
    eventCity: "",
    eventState: "",
    zip: "",
  });

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setEventInfo({
      ...eventInfo,
      [name]: value,
    })
  }

  const handleVenueOnChange = (e) => {
    const {name, value} = e.target;
    setVenue({
      ...venue,
      [name]: value,
    })
  }

  const handleEventVenues = () => {
    const newArray = [
      ...eventInfo.eventVenue,
      {
        id: Date.now(),
        eventNames: venue.eventNames,
        eventCity: venue.eventCity,
        eventState: venue.eventState,
        zip: venue.zip,
      },
    ]
    setEventInfo({
      ...eventInfo,
      eventVenue: newArray,
    })
  }

  const handleForm = () => {
    setEventInfo({
      ...eventInfo,
      // eventName: "",
      // eventPrise: "",
      // eventTime: "",
      // eventBegain: "",
    })
    setVenue({
      ...venue,
      id: "",
      eventNames: "",
      eventCity: "",
      eventState: "",
      zip: "",
    })
    console.log(eventInfo);
  }

  const deleteCardInfo = (id) => {
    const updatedVenue = eventInfo.eventVenue.filter((curEle) => {
      return curEle.id !== id;
    })
    setEventInfo({
      ...eventInfo,
      eventVenue: updatedVenue,
    })
  }

  const updateCardInfo = (id) => {
    const updatedVenue = eventInfo.eventVenue.filter((curEle) => {
      return curEle.id === id;
    })
    console.log(updatedVenue);
    updatedVenue.map((curEle) => {
      setVenue({
        ...venue,
        id: curEle.id,
        eventNames: curEle.eventNames,
        eventCity: curEle.eventCity,
        eventState: curEle.eventState,
        zip: curEle.zip,
      })
    })
  }

  const handleFormUpdate = () => {
    const updatedArrData = [...eventInfo.eventVenue];

    updatedArrData.map((curEle) => {
      if (venue.id == curEle.id) {
        curEle.id = venue.id;
        curEle.eventNames = venue.eventNames;
        curEle.eventCity = venue.eventCity;
        curEle.eventState = venue.eventState;
        curEle.zip = venue.zip;
      }
    })
    setVenue({
      ...venue,
      id: "",
      eventNames: "",
      eventCity: "",
      eventState: "",
      zip: "",
    })
  }

  const filterItems = (state) => {
    const updatedState = eventData.eventVenue.filter((fitlerElem) => {
      return fitlerElem.eventState == state;
    });

    setEventInfo({
      ...eventInfo,
      eventVenue: updatedState,
    })
  }

  const handleFiltering = (e) => {
    const sorting = e.target.value;
    console.log(sorting);

    if (sorting === "All") {
      setEventInfo({
        ...eventInfo,
        eventVenue: eventData.eventVenue,
      });
    }else if (sorting === "Maharashtra") {
      filterItems("Maharashtra");
    }else if (sorting === "Gujarat") {
      filterItems("Gujarat");
    }
  }

  return (
    <div className='container form-container' >
      <div className="row" >
        <div className="col-6 form-box" >
            <div className="row card form-dtls" >
                <div className="col-12 card-body" >
                  <MarathonForm 
                      venue={venue}
                      eventInfo={eventInfo}
                      handleOnChange={handleOnChange}
                      handleVenueOnChange={handleVenueOnChange}
                      handleEventVenues={handleEventVenues}
                      handleForm={handleForm}
                      deleteCardInfo={deleteCardInfo}
                      updateCardInfo={updateCardInfo}
                      handleFormUpdate={handleFormUpdate}
                      handleFiltering={handleFiltering}
                  />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EventForm;