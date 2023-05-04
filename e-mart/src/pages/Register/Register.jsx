import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Alert,
  Box,
  Button,
  Card,
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
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    fname: "",
    lname: "",
    emailId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSumit = () => {
    loginData.emailId === "" ? setShowEmail(true) : setShowEmail(false);
    loginData.password === "" ? setShowPass(true) : setShowPass(false);
    if (showEmail === false) {
      setSubmit(true);
    }
    if (loginData.emailId === "") {
      setSubmit(false);
    }
    if (showPass === false) {
      setSubmit(true);
    }
    if (loginData.password === "") {
      setSubmit(false);
    }
  };

  useEffect(() => {
    if (submit === true) {
      setLoading(true);
      localStorage.setItem("REGISDETAILS", JSON.stringify(loginData));
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 3000);
    }
  }, [submit]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "95vh",
      }}
    >
      <Card
        sx={{
          height: "33rem",
          width: "30rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "4px solid #fff",
          borderRadius: "20px",
          background: "#d2e7fa",
          boxShadow: "0rem 0rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="h2"
          sx={{
            color: "#38658f",
          }}
        >
          Registration
        </Box>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Frist Name"
            variant="outlined"
            name="fname"
            size="medium"
            onChange={handleOnChange}
            value={loginData.fname}
            sx={{
              width: 250,
            }}
          />
        </Box>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lname"
            size="medium"
            onChange={handleOnChange}
            value={loginData.lname}
            sx={{
              width: 250,
            }}
          />
        </Box>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          {showEmail ? (
            <Typography
              sx={{
                color: "red",
              }}
            >
              !Please enter your email id
            </Typography>
          ) : (
            <></>
          )}
          <TextField
            id="outlined-basic"
            label="Email id"
            variant="outlined"
            name="emailId"
            size="medium"
            onChange={handleOnChange}
            value={loginData.emailId}
            sx={{
              width: 250,
            }}
          />
        </Box>
        <Box
          sx={{
            margin: "10px 0px",
          }}
        >
          {showPass ? (
            <Typography
              sx={{
                color: "red",
              }}
            >
              !Please enter your password
            </Typography>
          ) : (
            <></>
          )}
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              size="medium"
              variant="outlined"
              name="password"
              label="Password"
              onChange={handleOnChange}
              value={loginData.password}
              sx={{
                width: 250,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Typography
          sx={{
            fontSize: "10px",
            margin: "10px 0px",
            cursor: "pointer",
          }}
        >
          Forget your password?
        </Typography>
        <Box>
          <Button
            sx={{
              background: "#38658f",
              color: "#ffffff",
              transition: "all 0.3s linear",
              width: 100,
              "&:hover": {
                background: "#38658f",
                color: "#ffffff",
                opacity: 0.7,
              },
            }}
            onClick={() => onSumit()}
            disabled={loading}
          >
            <Typography
              sx={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "#ffffff",
                fontSize: "0.9rem",
              }}
            >
              {loading ? <span>Varifying</span> : <span>Register</span>}
            </Typography>
          </Button>
        </Box>
      </Card>
      <Snackbar open={loading} autoHideDuration={3000}>
        <Alert
          severity="success"
          sx={{ width: "100%", bgcolor: "#d2e7fa", color: "green" }}
        >
          Registered in successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
