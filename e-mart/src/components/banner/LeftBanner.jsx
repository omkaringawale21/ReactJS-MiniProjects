import { Box, Button } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/style.css";

const slides = [
  {
    id: 1,
    imgSrc: "./images/main-banner.jpg",
    title: "supercharged for pros",
    heading: "special sale",
    info: "from $999.00 or $41.62/mb for 24 mo. footnote",
  },
  {
    id: 2,
    imgSrc: "./images/main-banner-1.jpg",
    title: "supercharged for pros",
    heading: "iPad S13+ Pro",
    info: "from $999.00 or $41.62/mb for 24 mo. footnote",
  },
];

const LeftBanner = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
        },
        display: "flex",
        justifyContent: "center",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        marginRight: "15px",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              style={{
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={slide.imgSrc}
                alt={slide.imgSrc}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
                className="slide-img"
              />
              <Box
                sx={{
                  position: "absolute",
                  color: "red",
                  top: 30,
                  left: 50,
                  fontSize: "23px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
                className="slide-title"
              >
                {slide.title}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  color: "#000",
                  top: 80,
                  left: 50,
                  fontSize: "40px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                className="slide-heading"
              >
                {slide.heading}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  color: "#000",
                  top: 150,
                  left: 50,
                  fontSize: "20px",
                  width: "200px",
                  textTransform: "capitalize",
                }}
                className="slide-info"
              >
                {slide.info}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 230,
                  left: 50,
                  fontSize: "20px",
                }}
                className="slide-button"
              >
                <Button
                  sx={{
                    color: "#fff",
                    background: "#071533",
                    transition: "all 0.3s linear",
                    "&:hover": {
                      color: "#fff",
                      background: "#071533",
                      letterSpacing: "1.5px",
                    },
                  }}
                >
                  buy now
                </Button>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default LeftBanner;
