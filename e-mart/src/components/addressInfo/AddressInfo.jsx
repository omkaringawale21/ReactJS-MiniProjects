import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SyncIcon from "@mui/icons-material/Sync";

const AddressInfo = () => {
  const [addressDetails, setAddressDetails] = useState([]);
  const [addressData, setAddressData] = useState({
    id: "",
    fristName: "",
    lastName: "",
    email: "",
    address: "",
    pincode: "",
  });
  const [submit, setSubmit] = useState(false);
  const navigation = useNavigate();

  const handleAddressChange = (event) => {
    const { value, name } = event.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  useEffect(() => {
    const detailsLogin = JSON.parse(localStorage.getItem("LOGDETAILS"));
    const detailsRegister = JSON.parse(localStorage.getItem("REGISDETAILS"));
    if (
      detailsLogin !== "" &&
      detailsRegister !== "" &&
      detailsRegister.emailId === detailsLogin.emailId
    ) {
      setAddressData({
        ...addressData,
        email: detailsLogin.emailId,
        fristName: detailsRegister.fname,
        lastName: detailsRegister.lname,
        address: "",
        pincode: "",
        id: "",
      });
    }
    localStorage.setItem("Address", JSON.stringify([]));
  }, []);

  const addDataAdress = (link) => {
    if ("/finalProducts" === link) {
      setTimeout(() => {
        navigation("/finalProducts");
        setSubmit(false);
      }, 3000);
    };
    addressData.id = Date.now();
    addressDetails.push(addressData);
    localStorage.setItem("Address", JSON.stringify(addressDetails));
    setSubmit(true);
  };

  return (
    <Box>
      <Container>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "#e8ebe9",
            marginBottom: "30px",
            padding: "20px 0px",
          }}
        >
          <Box
            sx={{
              display: "block",
              width: "100%",
              background: "#071533",
              padding: "10px 0px",
              marginTop: "-20px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                textTransform: "capitalize",
                color: "#fff",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              add address
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                height: "20rem",
                width: "20rem",
                display: {
                  lg: "block",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
              }}
            >
              <Box
                component="img"
                src="./images/eventLogo.png"
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <FormControl
              sx={{
                display: "block",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  width: 300,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Frist Name"
                  variant="outlined"
                  name="fristName"
                  size="small"
                  value={addressData.fristName}
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleAddressChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  width: 300,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={addressData.lastName}
                  size="small"
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleAddressChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  width: 300,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  size="small"
                  value={addressData.email}
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleAddressChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                  width: 300,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  name="address"
                  size="small"
                  value={addressData.address}
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleAddressChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 300,
                  marginBottom: "10px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Pin Code"
                  variant="outlined"
                  name="pincode"
                  size="small"
                  value={addressData.pincode}
                  sx={{
                    width: "100%",
                  }}
                  onChange={handleAddressChange}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: 300,
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      background: "#071533",
                      "&:hover": {
                        color: "#fff",
                        background: "#071533",
                        opacity: 0.7,
                      },
                    }}
                    onClick={() => addDataAdress("/finalProducts")}
                  >
                    {submit ? <SyncIcon /> : "Submit"}
                  </Button>
                </NavLink>
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AddressInfo;
