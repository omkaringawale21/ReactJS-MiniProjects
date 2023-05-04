import { Box, Slide } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { MessageText, PromotionContainer } from "../../styles/promotions";

const messages = [
  "20% off on your frist order!",
  "Summer sale starts now, visit ant store.",
  "Please like and subscribe :)",
];

const Promotions = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalid = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return (
    <PromotionContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        in={show}
        timeout={{
          enter: 500,
          exit: 100,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionContainer>
  );
};

export default Promotions;
