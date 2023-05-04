import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, Typography } from "@mui/material";

const EventCard = ({ el }) => {
  let totalCandidates = el?.candidateList.length;
  totalCandidates--;

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateArr = [];

    for (let i = 1; i < el?.candidateList.length; i++) {
      candidateArr.push(el.candidateList[i][0]);
    }
    setCandidates(candidateArr);
  }, [el]);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px solid white",
          padding: " .6rem ",
          borderRadius: "16px",
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          WebkitBackdropFilter: "blur(8px)",
          background: "rgba(255, 255, 255, 0.862)",
          backdropFilter: "blur(18px)",
          height: { xs: "4rem", sm: "5rem", md: "5.5rem", lg: "5.5rem" },
          mt: "1rem",
          transition: "all .3s ease",
          cursor: "pointer",
          "&:hover": {
            transition: "all .3s ease",
            transform: "scale(1.05)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            textAlign: "left",
            height: "100%",

            width: "80%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: {
                xs: "5rem",
                sm: "7rem",
                md: "7rem",
                lg: "7rem",
              },

              overflow: "hidden",
              border: "2px solid white",
              borderRadius: "16px",
            }}
          >
            <img
              style={{
                height: "100%",
                objectFit: "cover",
              }}
              src="https://designstripe-secure.imgix.net/scene-snapshots/79d77d89-98f7-41b5-b61d-da0279c72dcd/1637162893425/default?auto=format&h=1080&s=0b8430b0d6bd28a9b1d10cc384322d0a"
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: { xs: "55%", sm: "40%", md: "40%", lg: "40%" },
              height: "100%",
              padding: {
                xs: "0 .4rem",
                sm: "0 1rem",
                md: "0 1rem",
                lg: "0 1rem",
              },
              display: "flex",

              flexDirection: "column",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "18px" },
                fontWeight: "600",
                color: "rgb(80, 90, 100)",
                fontFamily: "'Alata', sans-serif",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {el?.eventTitle}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: "600",
                color: "#c1c1c2",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              {el?.date}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                fontWeight: "600",
                color: "#fff",
                letterSpacing: "1px",

                width: { xs: "5rem", sm: "6rem", md: "6rem", lg: "6rem" },
                textAlign: "center",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 132, 255, 0.679)",
                padding: "0 .2rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Prize ₹{el?.prize}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "2rem",
            width: { xs: "4rem", sm: "7rem", md: "8rem", lg: "8rem" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemButton
            onClick={handleClick}
            sx={{
              width: "100%",

              display: "flex",
              justifyContent: "space-between",
              borderRadius: "30px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonIcon
                sx={{ color: "#c1c1c2", fontSize: { xs: "14px", sm: "20px" } }}
              />{" "}
              &nbsp;
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "14px" },
                  fontWeight: "700",
                  color: "slategray",
                  letterSpacing: "1px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%",
                }}
              >
                {totalCandidates}
              </Typography>
            </Box>
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Box>
      </Box>

      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          //   border: "2px solid white ",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        }}
      >
        {candidates?.map((element, i) => {
          return (
            <List
              key={element}
              component="div"
              disablePadding
              sx={{
                borderTop: "1px solid   white ",
                bgcolor: "rgba(85, 170, 255, 0.344)",
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: { xs: "10px", sm: "14px" },
                    fontWeight: "700",
                  }}
                >
                  {++i}.{" "}
                </Typography>{" "}
                &nbsp;
                <Typography
                  sx={{
                    fontSize: { xs: "10px", sm: "14px" },
                    fontWeight: "700",
                    color: "black",
                    letterSpacing: ".5px",
                  }}
                >
                  {element}
                </Typography>
              </ListItemButton>
            </List>
          );
        })}
      </Collapse>
    </>
  );
};

export default EventCard;
