import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Container,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Card, Button, CardContent } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/system";
import eventLogo from "../assets/eventLogo3.png";
import CloseIcon from "@mui/icons-material/Close";

const EventForm = (props) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);

  const [eventList, setEventList] = useState([]);

  const [emploeeList, setEmploeeList] = useState([]);

  useEffect(() => {
    setEventList(JSON.parse(localStorage.getItem("events")));
    let emploeeData = JSON.parse(localStorage.getItem("empData"));

    let emploeeArr = [];

    for (let i = 0; i < emploeeData?.length; i++) {
      emploeeArr.push(`${emploeeData[i].fname} ${emploeeData[i].lname}`);
    }
    setEmploeeList(emploeeArr);
  }, []);

  const [event, setEvent] = useState({
    eventTitle: "",
    prize: "",
    date: "",
    candidateList: [["Candidate Name", "Voting Count"]],
  });

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setEvent({
      ...event,
      [name]: value,
    });
  };

  const btnClick = () => {
    if (inputValue) {
      setEvent({
        ...event,
        candidateList: [...event.candidateList, [inputValue, 0]],
      });
      setValue(null);
      setInputValue(null);
    } else {
      setOpenFailure(true);
      setFailureMessage("Please enter candidate name");
    }
  };

  console.log("candidatelist:", event.candidateList);

  const publishEvent = () => {
    if (event.eventTitle && event.prize && event.date) {
      if (event.candidateList.length >= 2) {
        event.id = Date.now();
        eventList.push(event);

        localStorage.setItem("events", JSON.stringify(eventList));
        setOpenFailure(false);
        setOpenSuccess(true);
        setEvent({
          eventTitle: "",
          prize: "",
          date: "",
          candidateList: [["Candidate Name", "Voting Count"]],
        });
      } else {
        setOpenFailure(true);
        setFailureMessage("please select at least one candidate");
      }
    } else {
      setOpenFailure(true);
      setFailureMessage("Please fill all the fields");
    }
  };

  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Card
          component="form"
          sx={{
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            margin: "auto",
            marginTop: 10,
          }}
          noValidate
          autoComplete="off"
        >
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#0b3155",
            }}
          >
            <Typography
              component="div"
              sx={{
                fontWeight: "600",
                fontSize: { sm: "22px", lg: "28px" },
                fontFamily: "'Alata', sans-serif",
                color: "white",
              }}
            >
              Event Registration Form
            </Typography>
          </CardContent>
          <Box sx={{ padding: "3rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "space-between",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "40%",
                  },
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column ",
                }}
              >
                <Stack gap={2}>
                  <TextField
                    type="text"
                    size="medium"
                    name={"eventTitle"}
                    value={event.eventTitle}
                    onChange={handleOnChange}
                    placeholder="Event Title"
                  />
                  <TextField
                    type="number"
                    size="medium"
                    name={"prize"}
                    value={event.prize}
                    onChange={handleOnChange}
                    placeholder="prize"
                  />
                  <TextField
                    type="date"
                    size="medium"
                    name={"date"}
                    value={event.date}
                    onChange={handleOnChange}
                    placeholder="date"
                  />

                  <Autocomplete
                    multiple
                    onInputChange={(e) => {
                      setInputValue(value);
                    }}
                    id="controllable-states-demo"
                    options={emploeeList}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Candidate" />
                    )}
                  />

                  {/* <Autocomplete
                    value={value}
                    onInputChange={(e) => {
                      setInputValue(e.target.value);
                    }}
                    id="controllable-states-demo"
                    options={emploeeList}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="medium"
                        label="Select Candidate"
                      />
                    )}
                  /> */}
                </Stack>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  overflow: "hidden",
                  height: "20rem",
                  display: { xs: "none", sm: "none", lg: "block" },
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    transform: "scale(1.1)",
                  }}
                  src={eventLogo}
                  alt="eventLogo"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto",
                marginTop: {
                  xs: 0,
                  sm: 2,
                  md: 2,
                  lg: 2,
                },

                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "50%",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                },
                alignItems: "center",
              }}
            >
              <Button
                className="buttons"
                onClick={btnClick}
                type="button"
                sx={{
                  backgroundColor: "#0b3155",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                    lg: "14px",
                  },
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  color: "white",
                  width: {
                    xs: "100%",
                    sm: "45%",
                    md: "45%",
                    lg: "45%",
                  },
                  border: "2px solid #fff",
                  borderRadius: " 30px ",
                  padding: ".6rem ",
                  margin: ".5rem ",
                  transition: "0.2s",
                  boxShadow:
                  " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                  "&:hover": {
                    backgroundColor: "#0b3155",
                    boxShadow:
                      " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                    transform: "translateY(-5px)",
                  },
                }}
              >
                Add Candidate
              </Button>

              <Button
                className="buttons"
                type="button"
                sx={{
                  backgroundColor: "#0b3155",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                    lg: "14px",
                  },
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.4px",
                  color: "white",
                  width: {
                    xs: "100%",
                    sm: "45%",
                    md: "45%",
                    lg: "45%",
                  },
                  border: "2px solid #fff",
                  borderRadius: "30px",
                  padding: ".6rem",

                  transition: "0.2s",
                  boxShadow:
                    " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                  "&:hover": {
                    backgroundColor: "#0b3155",
                    boxShadow:
                      " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                    transform: "translateY(-5px)",
                  },
                }}
                onClick={publishEvent}
              >
                Publish Event
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
      <Snackbar open={openSuccess} autoHideDuration={3000}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Event Added!
        </Alert>
      </Snackbar>
      <Snackbar open={openFailure} autoHideDuration={1000}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenFailure(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {failureMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
export default EventForm;
