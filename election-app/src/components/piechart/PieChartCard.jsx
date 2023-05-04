import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import PollIcon from "@mui/icons-material/Poll";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const PieChartCard = ({ el }) => {
  const options = {
    title: el?.eventTitle,
    is3D: true,
    height: "90%",
  };

  let emploeeAvailable = false;
  for (let i = 1; i < el.candidateList.length; i++) {
    if (el.candidateList[i][1] >= 1) {
      emploeeAvailable = true;
    }
  }

  //logic for finding the first,second and third emploees
  let first = -Infinity;
  let winner = null;
  let second = -Infinity;
  let secondPerson = null;
  let third = -Infinity;
  let thirdPerson = null;

  //check for first person
  let firstCheck;
  for (let i = 1; i < el.candidateList.length; i++) {
    if (el.candidateList[i][1] === first) {
      firstCheck = el.candidateList[i][1];
    }
    if (el.candidateList[i][1] > first) {
      first = el.candidateList[i][1];
      winner = el.candidateList[i][0];
    }
  }
  if (firstCheck === first) {
    winner = null;
  }
  //if first exists then
  if (winner) {
    //check for second person
    let secondCheck;
    for (let i = 1; i < el.candidateList.length; i++) {
      if (el.candidateList[i][1] === second) {
        secondCheck = el.candidateList[i][1];
      }
      if (el.candidateList[i][1] > second && el.candidateList[i][1] < first) {
        second = el.candidateList[i][1];
        secondPerson = el.candidateList[i][0];
      }
    }
    if (secondCheck === second) {
      secondPerson = null;
    }
    //if secondPerson exists then
    if (secondPerson) {
      //check for third person
      let thirdCheck;
      for (let i = 1; i < el.candidateList.length; i++) {
        if (el.candidateList[i][1] === third) {
          thirdCheck = el.candidateList[i][1];
        }
        if (el.candidateList[i][1] > third && el.candidateList[i][1] < second) {
          third = el.candidateList[i][1];
          thirdPerson = el.candidateList[i][0];
        }
      }
      if (thirdCheck === third) {
        thirdPerson = null;
      }
    }
  }

  const [deadlineReached, setDeadlineReached] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = el?.date;

  const [timer, setTimer] = useState(Date.parse(deadline) - Date.now());

  useEffect(() => {
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
      setTimer(time);

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    const interval = setInterval(() => getTime(deadline), 1000);

    if (timer <= 0) {
      clearInterval(interval);
      setDeadlineReached(true);
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deadline]);

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        borderRadius: "20px",
        overflow: "hidden",
        height: 340,
        position: "relative",
      }}
      key={el?.id}
    >
      {!deadlineReached && emploeeAvailable && (
        <Chart
          key={el?.id}
          style={{
            width: "100%",
            height: "100%",
          }}
          chartType="PieChart"
          data={el?.candidateList}
          options={options}
          classeventTitle="chart-details"
        />
      )}
      {!deadlineReached && !emploeeAvailable && (
        <Box
          sx={{
            padding: "1rem 0",
            backgroundColor: "rgba(255, 255, 255)",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "'Alata', sans-serif",
              paddingTop: "20px",
            }}
          >
            Start Voting for{" "}
            <span
              style={{
                fontWeight: "700",
                color: "#55abff",
                fontSize: "20px",
                letterSpacing: "1px",
              }}
            >
              {el.eventTitle}
            </span>
          </Typography>
          <Box>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_aaleelx7.json"
              background="transparent"
              speed="2"
              style={{ width: "100%", height: "16rem" }}
              autoplay
              loop
            ></lottie-player>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-2%",
              right: { xs: "28%", sm: "30%", md: "40%", lg: "25%" },
            }}
          >
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_ctyyicne.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "5rem" }}
              autoplay
            ></lottie-player>
          </Box>
        </Box>
      )}
      {!deadlineReached && (
        <>
          <Box
            sx={{
              height: "2rem",
              position: "absolute",
              width: "5rem",
              zIndex: "50",
              bottom: "2%",
              right: "2%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              backgroundColor: "rgb(0, 187, 93)",
              color: "white",
              borderRadius: "20px",
              padding: "0 .2rem",
              transition: "all .3s ease",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              "&:hover": {
                transform: "translateY(-4px)",
                transition: "all .4s ease",
                backgroundColor: "rgb(7, 196, 0)",
              },
            }}
            component={Link}
            to={`/voting_panel/${el?.eventTitle}`}
          >
            <PollIcon />{" "}
            <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
              VOTE
            </Typography>
          </Box>
          <Stack
            direction="column"
            sx={{
              height: "3rem",
              position: "absolute",
              bottom: "1%",
              width: "90%",
              left: "-3%",
              color: "white",
              padding: ".5rem",
            }}
          >
            {winner && (
              <Typography
                sx={{
                  fontSize: "12px",
                  height: "33%",
                  width: "60%",
                  backgroundColor: "red",
                  transition: "all .4s ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  position: "absolute",
                  bottom: "80%",
                  fontWeight: "600",
                  cursor: "pointer",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  background: "rgba(255, 0, 0, 0.516)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: "0",
                  padding: "0 .6rem",
                }}
              >
                First- {winner}*
              </Typography>
            )}
            {secondPerson && (
              <Typography
                sx={{
                  fontSize: "12px",
                  height: "33%",
                  width: "50%",
                  transition: "all .4s ease",
                  backgroundColor: "green",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  position: "absolute",
                  bottom: "40%",
                  fontWeight: "600",
                  cursor: "pointer",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  WebkitBackdropFilter: "blur(8px)",
                  background: "rgba(180, 168, 0, 0.848)",
                  backdropFilter: "blur(18px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 .6rem",
                }}
              >
                Second- {secondPerson}*
              </Typography>
            )}
            {thirdPerson && (
              <Typography
                sx={{
                  fontSize: "12px",

                  height: "33%",
                  transition: "all .4s ease",
                  width: "40%",
                  backgroundColor: "blue",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  position: "absolute",
                  bottom: "0%",
                  fontWeight: "600",
                  cursor: "pointer",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",

                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  WebkitBackdropFilter: "blur(8px)",
                  background: "rgba(0, 102, 255, 0.616)",
                  backdropFilter: "blur(18px)",
                  padding: "0 .6rem",
                }}
              >
                Third- {thirdPerson}*
              </Typography>
            )}
          </Stack>
        </>
      )}
      {deadlineReached && (
        <Box
          sx={{
            height: "100%",
            background: "white",
            display: "relative",
            paddingTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "'Alata', sans-serif",
            }}
          >
            The event has{" "}
            <span style={{ color: "red", fontWeight: "600" }}> Ended!</span>
          </Typography>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_ucUcKt.json"
            background="transparent"
            speed="2"
            style={{ width: "100%", height: "50%" }}
            autoplay
            loop
          ></lottie-player>
          <Box sx={{ position: "absolute", top: "0" }}>
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_al219bxl.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "100%" }}
              autoplay
              loop
            ></lottie-player>
          </Box>
          {winner && (
            <Box
              sx={{
                bgcolor: "#a68bd5",
                color: "white",
                position: "absolute",
                bottom: { xs: "12%", md: "14%", lg: "16%" },
                width: "60%",
                left: "0",
                right: "0",
                margin: "auto",
                borderRadius: "10px",

                padding: "0 .5rem",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: { xs: "1.6rem", md: "2rem", lg: "2.5rem" },
              }}
            >
              <EmojiEventsIcon
                sx={{ fontSize: { xs: "16px", md: "18px", lg: "24px" } }}
              />
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "14px", md: "16px", lg: "18px" },
                  width: "50%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  padding: "0 .5rem",
                  fontFamily: "'Alata', sans-serif",
                }}
              >
                {winner}
              </Typography>
              <Box
                sx={{
                  width: "8rem",
                  height: { xs: "1.6rem", md: "2rem", lg: "2.5rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "-100%",
                  left: "0",
                  right: "0",
                  margin: "auto",
                  borderRadius: "30px",
                  backgroundColor: "#0b3155",
                  border: "2px solid white",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: " 'Kanit', sans-serif",
                    fontSize: { xs: "18px", md: "20px", lg: "24px" },
                    fontWeight: "600",
                  }}
                >
                  1
                </Typography>
              </Box>
            </Box>
          )}
          {!winner && (
            <Box sx={{ marginTop: "2rem" }}>
              <Typography
                sx={{
                  color: "slategray",
                  fontFamily: "'Alata', sans-serif",
                  fontSize: { xs: "20px", md: "20px", lg: "28px" },
                  fontWeight: "600",
                }}
              >
                No winner found!
              </Typography>
            </Box>
          )}
          {secondPerson && thirdPerson && (
            <Box
              sx={{
                display: "flex",
                height: { xs: "1.6rem", md: "2rem", lg: "2.5rem" },
                position: "absolute",
                bottom: " 2%",
                width: "80%",
                left: "0",
                right: "0",
                margin: "auto",
                justifyContent: "space-between",
                padding: "0 .2rem",
              }}
            >
              {secondPerson && (
                <Box
                  sx={{
                    bgcolor: "#a68bd5",
                    color: "white",

                    borderRadius: "10px",
                    width: { xs: "40%", md: "40%", lg: "42%" },
                    padding: "0 .5rem",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "12px", md: "14px", lg: "16px" },
                      width: "90%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0 .5rem",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    {secondPerson}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "2rem", md: "2rem", lg: "3rem" },
                      height: { xs: "2rem", md: "2rem", lg: "3rem" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "-100%",
                      left: { xs: "-7%", sm: "-9%", md: "-10%", lg: "-9%" },
                      borderRadius: "50%",
                      backgroundColor: "#0b3155",
                      border: "4px solid white",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: " 'Kanit', sans-serif",
                        fontSize: { xs: "18px", md: "20px", lg: "24px" },
                        fontWeight: "600",
                      }}
                    >
                      2
                    </Typography>
                  </Box>
                </Box>
              )}
              {thirdPerson && (
                <Box
                  sx={{
                    bgcolor: "#a68bd5",
                    color: "white",

                    borderRadius: "10px",

                    padding: "0 .5rem",
                    width: { xs: "40%", md: "40%", lg: "42%" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "12px", md: "14px", lg: "16px" },
                      width: "90%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0 .5rem",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    {thirdPerson}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "2rem", md: "2rem", lg: "3rem" },
                      height: { xs: "2rem", md: "2rem", lg: "3rem" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: "-100%",
                      right: { xs: "-16%", sm: "-20%", md: "-24%", lg: "-20%" },
                      borderRadius: "50%",
                      backgroundColor: "#0b3155",
                      border: "4px solid white",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontFamily: " 'Kanit', sans-serif",
                        fontSize: { xs: "18px", md: "20px", lg: "24px" },
                        fontWeight: "600",
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          )}
          {secondPerson && !thirdPerson && (
            <Box
              sx={{
                display: "flex",
                height: { xs: "1.6rem", md: "2rem", lg: "2.5rem" },
                position: "absolute",
                bottom: " 3%",
                width: "90%",
                left: "0",
                right: "0",
                margin: "auto",
                justifyContent: "center",
                padding: "0 .2rem",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#a68bd5",
                  color: "white",

                  borderRadius: "10px",
                  width: { xs: "80%", md: "80%", lg: "80%" },
                  padding: "0 .5rem",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "12px", md: "14px", lg: "16px" },
                    width: "90%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "0 .5rem",
                    fontFamily: "'Alata', sans-serif",
                  }}
                >
                  {secondPerson}
                </Typography>
                <Box
                  sx={{
                    width: { xs: "2rem", md: "2rem", lg: "3rem" },
                    height: { xs: "2rem", md: "2rem", lg: "3rem" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "0%",
                    bottom: "0%",
                    margin: "auto",
                    left: { xs: "-7%", sm: "-9%", md: "-10%", lg: "-9%" },
                    borderRadius: "50%",
                    backgroundColor: "#0b3155",
                    border: "4px solid white",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: " 'Kanit', sans-serif",
                      fontSize: { xs: "18px", md: "20px", lg: "24px" },
                      fontWeight: "600",
                    }}
                  >
                    2
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      )}
      {!deadlineReached && (
        <Box
          sx={{
            position: "absolute",
            top: "-3%",
            left: "0",
            right: "0",
            margin: "auto",
            background: "#55abff",
            p: ".2rem  1rem",
            paddingTop: ".5rem",
            borderRadius: "20px",
            width: "60%",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 8px -2px, rgba(0, 0, 0, 0.3) 0px 3px 4px -3px",
          }}
        >
          {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
            <Typography
              sx={{
                fontFamily: "'Alata', sans-serif",
                fontWeight: "500",
                color: "white",
              }}
            >
              loading timer...
            </Typography>
          ) : (
            <Typography
              sx={{
                fontFamily: "'Alata', sans-serif",
                fontWeight: "500",
                color: "white",
              }}
            >
              {days}d-{hours}h-{minutes}m-{seconds}s
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default PieChartCard;
