import * as React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Card } from "@mui/material";
import VotingCard from "../components/votingPanel/VotingCard";
import { useParams } from "react-router";

const lightTheme = createTheme({ palette: { mode: "light" } });

export default function VotingPanel() {
  const [eventName, setEventName] = React.useState("Yearly");

  const params = useParams();

  React.useEffect(() => {
    setEventName(params?.id);
  }, [params]);

  let eventList = JSON.parse(localStorage.getItem("events"));

  const [selectedEvent, setSelectedEvent] = React.useState({});
  const [emploees, setEmploees] = React.useState(null);

  React.useEffect(() => {
    if (eventList) {
      setSelectedEvent(
        eventList?.filter((el) => {
          return el.eventTitle === eventName;
        })
      );
      let currEvent = eventList?.filter((el) => {
        return el.eventTitle === eventName;
      });

      const emploeeData = currEvent[0]?.candidateList?.filter((el) => {
        return el[0] !== "Candidate Name";
      });
      setEmploees(emploeeData);
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName]);

  return (
    <>
      <Container spacing={0}>
        {[lightTheme].map((theme, index) => (
          <Container
            xs={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {emploees && (
              <ThemeProvider theme={theme}>
                <Card
                  sx={{
                    padding: "2rem 1rem",
                    borderRadius: "20px",
                    bgcolor: "background.default",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2,
                    width: "28rem",
                    border: "4px solid white",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                    WebkitBackdropFilter: "blur(8px)",
                    background: "rgba(255, 255, 255, 0.662)",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "slategray",
                      fontSize: "30px",
                      fontWeight: "700",
                      position: "fixed",
                      width: "100%",
                      borderBottom: "2px solid slategray",
                      top: "0",
                      left: "0",
                      padding: "1rem 0",
                      backgroundColor: "white",
                      boxShadow:
                        " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                    }}
                  >
                    Candidate List
                  </Box>
                  <Box
                    sx={{
                      marginTop: "2rem",
                      maxHeight: "65vh",
                      overflow: "scroll",
                      overflowX: "hidden",
                      padding: "0 1rem",
                      "&::-webkit-scrollbar": {
                        width: "0.4em",
                      },
                      "&::-webkit-scrollbar-track": {
                        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,.4)",
                        outline: "1px solid slategrey",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    {emploees?.map((variant, index) => (
                      <VotingCard
                        key={variant[0]}
                        index={index}
                        variant={variant}
                        selectedEvent={selectedEvent}
                      />
                    ))}
                  </Box>
                </Card>
              </ThemeProvider>
            )}
          </Container>
        ))}
      </Container>
    </>
  );
}
