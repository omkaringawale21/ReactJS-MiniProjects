import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import "./slider.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;
        return(
            <div className="container" >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                    spaceBetween={5}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                    autoplay={{delay: 3500}}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                        
                    {
                        data.map((curElem) =>
                            (
                                <SwiperSlide key={curElem.eventId} >
                                    <div className="slide-content my-5" >
                                        <div className="user-content" >
                                            <div className="back-image" >
                                                <img src={curElem.eventBackImg} alt="background-image" />
                                            </div>
                                            <h1>Event Name:</h1>
                                            <h1>{curElem.eventName}</h1>
                                            <p>Venue: {curElem.eventVenue}</p>
                                            <p>Pin: {curElem.eventPin}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        )
                    }
                                
                </Swiper>
                </div>
        );
    }
}

export default Slider;