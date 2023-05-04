import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import registerAvatar from "../assets/registerAvatar.png";

import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const [open, setOpen] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = () => {
    setRegisterError(validateForm(registerData));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(registerError).length === 0 && submit === true) {
      setLoader(true);
      if (registerData.email === "admin@agsft.com") {
        alert("user already exists, please login");
      } else {
        localStorage.setItem("registerDetails", JSON.stringify(registerData));
        setOpen(true);
        setTimeout(() => {
          setLoader(false);
          navigate("/votingPanel");
        }, 2000);
      }
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, registerError]);

  const validateForm = (registerData) => {
    const error = {};

    if (!registerData.firstname) {
      error.firstname = "First name is required!";
    }
    if (!registerData.lastname) {
      error.lastname = "Last name is required!";
    }
    if (!registerData.email) {
      error.email = "Email is required!";
    }
    if (
      registerData.email &&
      !registerData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error.email = "Email is not valid!";
    }
    if (!registerData.password) {
      error.password = "Password is required!";
    }

    return error;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "80%",
          height: "50rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "4px solid white",
            height: { xs: "75%", sm: "75%", md: "70%", lg: "75%" },
            width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
            borderRadius: "40px",
            padding: "10px",
            overflow: "hidden",

            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            WebkitBackdropFilter: "blur(8px)",
            background: "rgba(255, 255, 255, 0.662)",
            backdropFilter: "blur(18px)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: { md: "0", lg: "45%" },
              borderRadius: "30px",
              display: { xs: "none", md: "none", lg: "flex" },
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(40deg,#fe9999,#396ca7  )",
              border: "2px solid white",
              boxShadow:
                "rgba(136, 165, 191, 0.28) 6px 2px 6px 0px, rgba(255, 255, 255, 0.8) -6px -2px 6px 0px",
            }}
          >
            <img
              style={{
                objectFit: "contain",
              }}
              src={registerAvatar}
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: { sm: "100%", md: "100%", lg: "50%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  height: "28rem",
                  width: "100%",
                  padding: "2rem 1rem",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "26px",
                        md: "30px",
                        lg: "30px",
                      },
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    Welcome to our community!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "'Alata', sans-serif",
                    }}
                  >
                    Let's get started!
                  </Typography>
                </Box>
                <Box sx={{ padding: "3rem 0" }}>
                  <Stack
                    // gap={2}
                    sx={{ width: "70%", margin: "auto", textAlign: "left" }}
                  >
                    <Box
                      gap={1}
                      sx={{
                        width: "100%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                          md: "row",
                          lg: "row",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: "4.5rem",
                          width: {
                            xs: "100%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                          },
                        }}
                      >
                        <TextField
                          label="First name"
                          name="firstname"
                          value={registerData.firstname}
                          onChange={handleChange}
                          sx={{
                            background: "white",
                            width: "100%",
                            boxShadow:
                              " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            padding: "0",
                            margin: "0",
                            fontSize: "12px",
                          }}
                        >
                          {registerError.firstname}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "4.5rem",
                          width: {
                            xs: "100%",
                            sm: "50%",
                            md: "50%",
                            lg: "50%",
                          },
                        }}
                      >
                        <TextField
                          label="Last name"
                          sx={{
                            background: "white",
                            width: "100%",
                            boxShadow:
                              " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                          }}
                          name="lastname"
                          value={registerData.lastname}
                          onChange={handleChange}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            padding: "0",
                            margin: "0",
                            fontSize: "12px",
                          }}
                        >
                          {registerError.lastname}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ height: "4.5rem" }}>
                      <TextField
                        label="Email Address"
                        sx={{
                          width: "100%",
                          background: "white",
                          boxShadow:
                            " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                        }}
                        name="email"
                        value={registerData.email}
                        onChange={handleChange}
                      />
                      <Typography
                        sx={{
                          color: "red",
                          padding: "0",
                          margin: "0",
                          fontSize: "12px",
                        }}
                      >
                        {registerError.email}
                      </Typography>
                    </Box>
                    <Box sx={{ height: "4.5rem" }}>
                      <FormControl
                        sx={{
                          width: "100%",
                          background: "#ffff",
                          boxShadow:
                            " rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset",
                        }}
                        variant="outlined"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={registerData.password}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <Typography
                        sx={{
                          color: "red",
                          padding: "0",
                          margin: "0",
                          fontSize: "12px",
                        }}
                      >
                        {registerError.password}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                          lg: "14px",
                        },
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.4px",
                        color: "rgb(53, 53, 53)",
                        background:
                          " linear-gradient(40deg,  #88b9f1,#fdb7ac  )",

                        border: "2px solid #fff",
                        borderRadius: " 30px ",
                        padding: ".6rem 3rem",
                        width: {
                          xs: "8rem",
                          sm: "10rem",
                          md: "12rem",
                          lg: "12rem",
                        },
                        transition: "0.2s",
                        boxShadow:
                          " rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                        "&:hover": {
                          letterSpacing: "5px",
                          backgroundColor: " #bcb4ff",
                          boxShadow:
                            " rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                        },
                      }}
                      onClick={handleRegister}
                      disabled={loader}
                    >
                      {loader ? (
                        <span>Registering...</span>
                      ) : (
                        <span>Register</span>
                      )}
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2rem 0",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      Already a member?{" "}
                    </Typography>
                    &nbsp; &nbsp;
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: " #358efb ",
                        fontSize: "14px",
                      }}
                      component={Link}
                      to="/login"
                    >
                      Login
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar open={open} autoHideDuration={3000}>
        <Alert
          severity="success"
          sx={{ width: "100%", bgcolor: "green", color: "white" }}
        >
          Sucessfully Registered!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
