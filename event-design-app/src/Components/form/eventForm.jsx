import React from "react";
import Slider from "../card/silder";
import './eventForm.css';
import FormDetails from "./formDetails";

const eventData = [
    {
        eventId: 1,
        eventName: "Sunburn",
        eventVenue: "Goa",
        eventPin: 642634,
        eventBackImg: "./images/event-1.jpg",
    },
    {
        eventId: 2,
        eventName: "DJParty",
        eventVenue: "Goa",
        eventPin: 642673,
        eventBackImg: "./images/event-2.jpg",
    },
    {
        eventId: 3,
        eventName: "FriendShip Day",
        eventVenue: "Kolhapur",
        eventPin: 398675,
        eventBackImg: "./images/event-3.jpg",
    },
    {
        eventId: 4,
        eventName: "Cascilo Pub",
        eventVenue: "Pune",
        eventPin: 984520,
        eventBackImg: "./images/event-4.jpg",
    },
    {
        eventId: 5,
        eventName: "Event Jacks",
        eventVenue: "Pune",
        eventPin: 849352,
        eventBackImg: "./images/event-5.jpg",
    },
    {
        eventId: 6,
        eventName: "Agent Jacks",
        eventVenue: "Pune",
        eventPin: 497572,
        eventBackImg: "./images/event-6.jpg",
    },
    {
        eventId: 7,
        eventName: "Party Night",
        eventVenue: "Pune",
        eventPin: 574590,
        eventBackImg: "./images/event-7.jpg",
    },
    {
        eventId: 8,
        eventName: "Hardwell Max",
        eventVenue: "Pune",
        eventPin: 456902,
        eventBackImg: "./images/event-8.jpg",
    },
]

class EvenetForm extends React.Component {
    constructor() {
        super();

        this.state = {
            data: eventData,
            eventId: "",
            eventName: "",
            eventVenue: "",
            eventPin: "",
            eventBackImg: "",
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleForm = () => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    eventId: this.state.eventId,
                    eventName: this.state.eventName,
                    eventVenue: this.state.eventVenue,
                    eventPin: this.state.eventPin,
                    eventBackImg: this.state.eventBackImg,
                }
            ],
            eventId: "",
            eventName: "",
            eventVenue: "",
            eventPin: "",
            eventBackImg: "",
        }, () => {console.log(this.state.data)});
    }

    render() {
        return(
            <>
                <FormDetails
                    {...this.state}
                    handleChange={this.handleChange}
                    handleForm={this.handleForm}
                />

                <Slider 
                    {...this.state}
                />
            </>
        );
    }
}

export default EvenetForm;