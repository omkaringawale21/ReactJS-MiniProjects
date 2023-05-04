import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ eventVenue, deleteCardInfo, updateCardInfo }) => {
    // const [slots, setSlots] = useState({
    //     start: 0,
    //     end: eventVenue.length > 5 ? 5 : eventVenue.length,
    // });

    // useEffect(() => {
    //     setInterval(() => {
    //         setSlots({
                
    //             start:
    //                 eventVenue.length === slots.end
    //                 ? 0 :
    //                 slots.start + 5,
    //             end:
    //                 slots.end === eventVenue.length
    //                 ? 5 :
    //                 (eventVenue.length - slots.end) < 5
    //                 ? slots.end + (eventVenue.length - slots.end)
    //                 : slots.end + 5,
    //         })
    //     }, 5000);
    // });
    // .slice(slots.start, slots.end)
    
    return(
        <table>
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Event City</th>
                <th>Event State</th>
                <th>Event Zip</th>
                <th>Action</th>
            </tr>
        </thead>
        {
            eventVenue
            .map((curEle) => {
                return(
                    <tbody key={curEle.id} >
                        <tr>
                            <td>{curEle.eventNames}</td>
                            <td>{curEle.eventCity}</td>
                            <td>{curEle.eventState}</td>
                            <td>{curEle.zip}</td>
                            <td>
                                <div>
                                    <span className='fas fa-close' onClick={() => deleteCardInfo(curEle.id)} ></span>
                                </div>
                                <div>
                                    <span className='fas fa-edit' onClick={() => updateCardInfo(curEle.id)} ></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                )
            })
        }
        </table>
    )
}

export default Card;