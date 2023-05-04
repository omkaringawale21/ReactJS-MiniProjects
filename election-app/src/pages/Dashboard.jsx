import React, { useEffect, useState } from "react";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/dashboard.css";
import { Box, ListItemText, ListItem } from "@mui/material";
import { Routes, Route, Link, useParams } from "react-router-dom";
import AddCandidate from "./AddCandidate";
import EmployeeList from "./EmployeeList";
import EventForm from "./EventForm";
import EventList from "../pages/EventList";
import { styled } from "@mui/material/styles";

const data = [
  {
    id: 1,
    name: "Dashboard",
    link: "statistics",
  },
  {
    id: 2,
    name: "Add Employee",
    link: "add_employee",
  },
  {
    id: 3,
    name: "Employee List",
    link: "employee_list",
  },
  {
    id: 4,
    name: "Add Event",
    link: "event_form",
  },
  {
    id: 5,
    name: "Event List",
    link: "event_list",
  },
];

const SelectListItem = styled(ListItem)(() => ({
  backgroundColor: "rgb(246, 249, 255)",
  borderBottom: "1px solid white",
  transition: "all .3s ease",
  "&:hover, &.Mui-selected": {
    background: "#0b3155",
    color: "white",
    transition: "all .3s ease",
  },
  "&:hover": {
    background: "#0d4274",
    color: "white",
    transition: "all .3s ease",
  },
}));

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const params = useParams();

  useEffect(() => {
    const selectedSection = data.find((el) => {
      return el.link === params["*"];
    });
    let selectedId = selectedSection?.id;

    setSelectedIndex(--selectedId);
  }, [params]);

  const onActive = (event, index) => {
    setSelectedIndex(index);
  };

  const getList = () => (
    <Box
      onClick={() => setOpen(false)}
      sx={{
        width: 250,
      }}
    >
      {data.map((item, index) => (
        <Link
          style={{
            textDecoration: "none",
            color: "#000000",
          }}
          to={`/dashboard/${item.link}`}
          key={index}
        >
          <SelectListItem
            selected={selectedIndex === index}
            onClick={(e) => onActive(e, index)}
          >
            <ListItemText primary={item.name} />
          </SelectListItem>
        </Link>
      ))}
    </Box>
  );

  const handleSlider = () => {
    const sidbarWrapper = document.getElementById("sidbar-wrapper");
    sidbarWrapper.classList.toggle("active");
    setOpen(true);
  };

  return (
    <Box className="home-wrapper">
      <Navbar handleSlider={handleSlider} />
      <Box sx={{ height: "4.2rem" }}></Box>

      <Box className="sidbar-additem_wrapper">
        <Box
          className="sidbar-wrapper"
          id="sidbar-wrapper"
          sx={{
            minHeight: "80rem",
            marginTop: -0.1,
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
            borderRight: {
              sm: "0",
              md: "2px solid slategray",
              lg: "2px solid slategray",
            },
            boxShdow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <Sidebar getList={getList} setOpen={setOpen} open={open} />
        </Box>
        <Box
          sx={{
            width: "16rem",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        ></Box>
        <Box
          className="dashboard-additem-wrapper"
          sx={{
            margin: "auto",
            width: { xs: "93%", sm: "90%", md: "80%", lg: "40%" },
          }}
        >
          <Routes>
            <Route path="/statistics" element={<DashboardComponent />} />
            <Route path="/add_employee" element={<AddCandidate />} />
            <Route path="/employee_list" element={<EmployeeList />} />
            <Route path="/event_form" element={<EventForm />} />
            <Route path="/event_list" element={<EventList />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
