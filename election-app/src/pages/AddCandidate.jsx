import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert, Button, IconButton, Snackbar, TextField } from "@mui/material";
import imgCard from "../assets/participateImg.png";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddCandidate = () => {
  const [employee, setEmployee] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    empId: "",
  });

  const [addEmployeeError, setAddEmployeeError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };
  const handleAddEmployee = () => {
    setAddEmployeeError(validateForm(employee));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(addEmployeeError).length === 0 && submit === true) {
      const employeeData = JSON.parse(localStorage.getItem("empData")) || [];
      console.log(employeeData);
      const empEmail = employeeData.find(
        (item) => item.email === employee.email
      );
      console.log(empEmail);
      if (empEmail) {
        setOpenFailure(true);
      } else {
        setOpenSuccess(true);
        const employeeData = JSON.parse(localStorage.getItem("empData")) || [];
        const currentEmp = employee;
        currentEmp.id = Date.now();

        employeeData.push(currentEmp);
        localStorage.setItem("empData", JSON.stringify(employeeData));

        setTimeout(() => {
          setOpenSuccess(false);
        }, 2000);
        setEmployee({
          fname: "",
          lname: "",
          email: "",
          age: "",
          empId: "",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, addEmployeeError]);

  const validateForm = (employee) => {
    const error = {};

    if (!employee.fname) {
      error.fname = "first name is required!";
    }
    if (!employee.lname) {
      error.lname = "last name is required!";
    }
    if (!employee.email) {
      error.email = "email is required!";
    }
    if (!employee.empId) {
      error.empId = "employee id is required!";
    }
    if (
      employee.email &&
      !employee.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error.email = "email is not valid!";
    }
    if (!employee.age) {
      error.age = "age is required!";
    }

    return error;
  };

  return (
    <Card
      sx={{
        width: { sm: "80%", md: "70%", lg: " 67%" },
        borderRadius: "20px",
        margin: "auto",
        marginTop: "4rem",
        boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      }}
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
          Employee Registration Form
        </Typography>
      </CardContent>

      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ margin: "auto", width: { sm: "60%", lg: "40%" } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Firstname"
              size="medium"
              variant="outlined"
              name="fname"
              value={employee.fname}
              onChange={handleOnchange}
              sx={{ m: 1, width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Lastname"
              size="medium"
              name="lname"
              value={employee.lname}
              onChange={handleOnchange}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              type="email"
              size="medium"
              label="Email"
              name="email"
              value={employee.email}
              onChange={handleOnchange}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
              inputProps={{ style: { textTransform: "lowercase" } }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              type="number"
              size="medium"
              label="Age"
              name="age"
              value={employee.age}
              onChange={handleOnchange}
              variant="outlined"
              sx={{ m: 1, width: "100%" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="status"
                size="medium"
                value={employee.status}
                label="Status"
                onChange={handleOnchange}
              >
                <MenuItem value="ACTIVE">Active</MenuItem>
                <MenuItem value="INACTIVE">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Employee ID"
              size="medium"
              variant="outlined"
              name="empId"
              value={employee.empId}
              onChange={handleOnchange}
              sx={{ m: 1, width: "100%" }}
              inputProps={{ style: { textTransform: "uppercase" } }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              onClick={handleAddEmployee}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "12px",
                  lg: "12px",
                },
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.4px",
                color: "white",
                background: " #0b3155",

                border: "2px solid #fff",
                borderRadius: " 30px ",
                padding: {
                  xs: ".6rem .5rem",
                  sm: ".6rem 1rem",
                  lg: ".6rem 3rem",
                },
                width: {
                  xs: "8rem",
                  sm: "12rem",
                  md: "14rem",
                  lg: "14rem",
                },
                transition: "0.2s",
                margin: "auto",
                marginTop: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                "&:hover": {
                  backgroundColor: "#0b3155",
                  boxShadow:
                    " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                  transform: "translateY(-5px)",
                },
              }}
            >
              Add Employee
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: 400,
            alignItems: "center",
            display: { xs: "none", sm: "none", lg: "block" },
            margin: 2,
            width: "50%",
          }}
        >
          <img
            component="img"
            src={imgCard}
            style={{ height: "100%", transform: "scale(1.1)" }}
            alt="Live from space album cover"
          />
        </Box>
      </Box>
      <Snackbar open={openSuccess} autoHideDuration={3000}>
        <Alert severity="success">Emploee Added!</Alert>
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
          User already exists, please use another email address!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default AddCandidate;
