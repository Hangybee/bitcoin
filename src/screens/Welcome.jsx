import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Input, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Welcome() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email.toLowerCase() === "test@gmail.com" &&
      formData.password === "Test@123"
    ) {
      navigate("Home");
    } else {
      // <Alert sx={{ width: '100%' }} severity="error">Wrong Credentials</Alert>
      setStatus(true);
    }
    // Handle login (e.g., send data to a backend)
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div>
          <h2>Login</h2>
          {status ? (
            <Alert sx={{ width: "100%" }} severity="error">
            Wrong Credentials
          </Alert>
          ) : null}
          
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
          <Typography variant="subtitle2" gutterBottom style={{ display: "" }}>
            Need Account ?
          </Typography>
          <Typography
            onClick={() => navigate("SignUp")}
            color="blue"
            variant="subtitle2"
            gutterBottom
            style={{ display: "" }}
          >
            SignUp
          </Typography>{" "}
        </div>
      </Container>
    </div>
  );
}

export default Welcome;
