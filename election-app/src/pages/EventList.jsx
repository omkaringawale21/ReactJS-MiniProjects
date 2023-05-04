import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { events } from "../context/context";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Stack } from "@mui/system";
import EventCard from "../components/eventList/EventCard";

const EventList = () => {
  let eventList = JSON.parse(localStorage.getItem("events")) || events;

  const [sortEvent, setSortEvent] = useState("");
  const [eventListArr, setEventListArr] = useState([]);

  useEffect(() => {
    setEventListArr(eventList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSort = (sortVal) => {
    setSortEvent(sortVal);
    if (sortVal === "participantsCountLowToHigh") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return a.candidateList.length - b.candidateList.length;
      });
      setEventListArr(arr);
    }
    if (sortVal === "participantsCountHighToLow") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return b.candidateList.length - a.candidateList.length;
      });
      setEventListArr(arr);
    }
    if (sortVal === "prizeLowToHigh") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return a.prize - b.prize;
      });
      setEventListArr(arr);
    }
    if (sortVal === "prizeHighToLow") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return b.prize - a.prize;
      });
      setEventListArr(arr);
    }
    if (sortVal === "latest") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setEventListArr(arr);
    }
    if (sortVal === "oldest") {
      let eventArray = eventListArr;
      let arr = eventArray.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      setEventListArr(arr);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "80%", md: "80%", lg: "80%" },
        margin: "auto",
        mt: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid white",
          padding: ".4rem 1rem ",
          borderRadius: "16px",
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -30px",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.662)",
          backdropFilter: "blur(18px)",
          height: "3rem",
        }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "600", color: "slategray" }}
          >
            Events
          </Typography>
          &nbsp;
          <EmojiEventsIcon sx={{ color: "slategray" }} />
        </Box>
        <FormControl
          sx={{ minWidth: { xs: 100, sm: 180 }, bgcolor: "white" }}
          size="small"
        >
          <InputLabel id="demo-select-small">Sort by</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Sort by"
            value={sortEvent}
            onChange={(e) => {
              handleSort(e.target.value);
            }}
          >
            <MenuItem value={""}>none</MenuItem>
            <MenuItem value={"participantsCountLowToHigh"}>
              participants count low to high
            </MenuItem>
            <MenuItem value={"participantsCountHighToLow"}>
              participants count high to low
            </MenuItem>
            <MenuItem value={"prizeLowToHigh"}>Prize low to high</MenuItem>
            <MenuItem value={"prizeHighToLow"}>Prize high to low</MenuItem>
            <MenuItem value={"latest"}>Latest</MenuItem>
            <MenuItem value={"oldest"}>Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Stack sx={{ width: "100%", margin: "auto", mt: "2rem" }}>
        {eventListArr?.map((el) => {
          return <EventCard key={el?.id} el={el} />;
        })}
      </Stack>
    </Box>
  );
};

export default EventList;
