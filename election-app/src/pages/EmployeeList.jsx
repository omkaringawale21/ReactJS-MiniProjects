import React, { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

import {
  Table,
  TableCell,
  tableCellClasses,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { emploees } from "../context/context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0b3155",
    color: "white",
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px !important"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F7F7F7",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#F7F7F7",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function EmployeeList() {
  let employeeDetails = JSON.parse(localStorage.getItem("empData"));

  const [deleteEmp, setDeleteEmp] = useState(employeeDetails);

  const [updateEmp, setUpdateEmp] = useState(employeeDetails);

  const [employee, setEmployee] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    empId: "",
  });

  const [showInput, setShowInput] = useState(false);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value
    })
  }

  const deleteEmployee = (removeindex) => {
    setDeleteEmp((employee) =>
      employee.filter((_, index) => index !== removeindex)
    );
    localStorage.setItem("empData", JSON.stringify(deleteEmp));
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const UpdateDataEmployeeDetails = () => {
    setUpdateEmp(
      updateEmp.map((curEle, i) => {
        if (curEle.empId === employee.empId) {
          curEle.fname = employee.fname;
          curEle.lname = employee.lname;
          curEle.age = employee.age;
          curEle.email = employee.email;
        }
        return curEle;
      }),
      setEmployee({
        fname: "",
        lname: "",
        email: "",
        age: "",
        empId: "",
      }),
    );
    console.log("Update Data : => ", updateEmp);
    localStorage.setItem("empData", JSON.stringify(updateEmp));
    setShowInput(false);
  }

  const getData = (id) => {
    let getDtls = updateEmp?.filter((emp, i) => emp.id === id);
    getDtls?.map((curItem) => 
      setEmployee({
        ...employee,
        fname: curItem.fname,
        lname: curItem.lname,
        email: curItem.email,
        age: curItem.age,
        empId: curItem.empId,
      })
    )
    setShowInput(true);
  }
  console.log("Update data : ", employee);

  return (
    <>
      <Container container spacing={2} >
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 5, marginTop:"70px" }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
            style={{ maxHeight: 550 }}
          >
            <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell> FULL NAME</StyledTableCell>
                  <StyledTableCell>EMAIL ADDRESS</StyledTableCell>
                  <StyledTableCell>AGE</StyledTableCell>
                  <StyledTableCell>EMPLOYEE ID</StyledTableCell>
                  <StyledTableCell >ACTIONS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeDetails?.map((emp, i) => (
                  <>
                  {
                    showInput?
                    <Dialog
                      open={showInput}
                      onClose={showInput}
                      aria-labelledby="form-dialog-title"
                      BackdropProps={{ 
                        style: { backgroundColor: "transparent" } 
                      }}
                    >
                      <DialogTitle id="form-dialog-title">Update Employee Details</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          To update your todo, please enter a new task.
                        </DialogContentText>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              width: "250px",
                            }}
                          >
                            <TextField 
                              id="outlined-basic"
                              size="small"
                              name="fname"
                              value={employee.fname}
                              onChange={handleOnchange}
                              variant="outlined"
                              sx={{ m: 1, width: "50%" }}
                            />
                            <TextField 
                              id="outlined-basic"
                              size="small"
                              name="lname"
                              value={employee.lname}
                              onChange={handleOnchange}
                              variant="outlined"
                              sx={{ m: 1, width: "50%" }}
                            />
                          </Box>
                          <Box>
                            <TextField 
                              id="outlined-basic"
                              size="small"
                              name="email"
                              value={employee.email}
                              onChange={handleOnchange}
                              variant="outlined"
                              sx={{ m: 1, width: "50%" }}
                            />
                          </Box>
                          <Box>
                            <TextField 
                              id="outlined-basic"
                              size="small"
                              name="age"
                              value={employee.age}
                              onChange={handleOnchange}
                              variant="outlined"
                              sx={{ m: 1, width: "50%" }}
                            />
                          </Box>
                          <Box>
                            <TextField 
                              id="outlined-basic"
                              size="small"
                              name="empId"
                              value={employee.empId}
                              onChange={handleOnchange}
                              variant="outlined"
                              sx={{ m: 1, width: "50%" }}
                            />
                          </Box>
                        </DialogContent>
                      <DialogActions>
                        <Button 
                          sx={{
                            border: "2px solid rgba(0, 0, 0, 0.4)",
                            color: "rgba(0, 0, 0, 0.4)",
                            fontWeight: "bold",
                            "&:hover": {
                              color: "#fff",
                              background: "rgb(11, 136, 42)",
                              border: "2px solid #fff",
                            }
                          }}
                          onClick={() =>
                            UpdateDataEmployeeDetails()
                          }
                        >Update</Button>
                      </DialogActions>
                    </Dialog>
                    :
                    <></>
                  }
                  
                  <StyledTableRow key={emp.id}>
                    <StyledTableCell component="td" >
                      {capitalizeFirstLetter(emp.fname)} {capitalizeFirstLetter(emp.lname)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {(emp.email).toLowerCase()}
                    </StyledTableCell>
                    <StyledTableCell>
                      {emp.age} Years
                    </StyledTableCell>
                    <StyledTableCell>
                      {(emp.empId).toUpperCase()}
                    </StyledTableCell>

                    <StyledTableCell>
                      <EditIcon sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                          lg: "14px",
                        },
                        marginLeft: "10px",
                        color: "#467ad4",
                        padding: "10px",
                        transition: "0.2s",
                        boxShadow:
                          " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                        "&:hover": {
                          letterSpacing: "5px",
                          backgroundColor: "#467ad4",
                          color: "white",
                          boxShadow:
                            " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                        },
                      }} 
                      onClick={
                        () => {getData(emp.id)}
                      }
                    />

                      <ClearIcon sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                          lg: "14px",
                        },
                        color: "#467ad4",
                        transition: "0.2s",
                        padding: "10px",
                        boxShadow:
                          " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                        "&:hover": {
                          backgroundColor: " rgb(255, 61, 61,.7)",
                          color: "white",
                          boxShadow:
                            " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                        },
                      }}
                        onClick={() => {
                          deleteEmployee(i);
                        }} />
                    </StyledTableCell>
                  </StyledTableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}