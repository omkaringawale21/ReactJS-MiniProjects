import styled from "@emotion/styled";
import { Button, Modal, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const VotingCard = ({ variant, selectedEvent, index }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { sm: 200, md: 400, lg: 400 },
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme,
    paddingLeft: 20,
    borderRadius: 50,
    borderStyle: "outset",
    marginTop: 8,
    height: "2.4rem",
    display: "flex",
    alignItems: "center",
  }));

  let eventList = JSON.parse(localStorage.getItem("events"));

  const handleOpen = () => {
    setOpen(true);

    const voteCount = selectedEvent[0]?.candidateList?.find((el) => {
      return el[0] === variant[0];
    });

    voteCount[1]++;
    const currentEvent = selectedEvent[0];
    currentEvent.candidateList[++index] = voteCount;

    let currIndex = eventList.findIndex((el) => {
      return el?.id === selectedEvent[0]?.id;
    });

    eventList[currIndex] = currentEvent;

    localStorage.setItem("events", JSON.stringify(eventList));

    setTimeout(() => {
      setOpen(false);
      navigate("/dashboard/statistics");
    }, 2000);
  };
  return (
    <>
      <Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          textTransform: "capitalize",

          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          background: " linear-gradient(40deg,  #5aa2f5,#fdb7ac  )",
          color: "white",
          border: "2px solid #fff",
          position: "relative",
        }}
      >
        {variant[0]}

        <Button
          variant="contained"
          style={{
            marginRight: 5,
            marginTop: 8,
            marginBottom: 8,
            borderRadius: 50,
            border: "2px solid slategray",
            height: "80%",
            backgroundColor: "rgba(255, 255, 255",

            fontWeight: "600",
            color: "slategray",
          }}
          onClick={handleOpen}
        >
          vote
        </Button>
      </Item>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src="https://img.icons8.com/fluency/512/ok.png"
            alt="Italian Trulli"
            style={{ width: 95 }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            style={{ paddingTop: 20 }}
            component="h2"
          >
            Successfully Voted!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you for your vote
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default VotingCard;
