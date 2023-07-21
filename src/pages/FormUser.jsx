import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUser } from "../hooks/useAddUser";

export const FormUser = () => {

    const {mutate: addUser} = useAddUser()

    const [newUser, setNewUser] = useState({
        name: "",
        city: "",
        email: "",
        username: "",
        website: ""
    })

    const handleChange = (event) =>{
        const {name, value} = event.target
        setNewUser({
            ...newUser,
            [name] : value
        })
    }

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate("/")
        addUser(newUser)
    }

  return (
    <>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#262254", padding: 4 }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Add New User
        </Typography>
        <Grid container>
          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Name"
              type="text"
              placeholder="enter your name"
              fullWidth
              value={newUser.name}
              name="name"
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Gender"
              type="text"
              placeholder="enter your gender"
              fullWidth
              value={newUser.city}
              name="city"
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              placeholder="enter your email"
              fullWidth
              value={newUser.email}
              name="email"
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Username"
              type="text"
              placeholder="enter your username"
              fullWidth
              value={newUser.username}
              name="username"
              onChange={handleChange}
            />
          </Grid>

          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Website"
              type="text"
              placeholder="enter your Website"
              fullWidth
              value={newUser.website}
              name="website"
              onChange={handleChange}
            />
          </Grid>

          <Grid
            container
            sx={{
              direction: "row",
              justifyContent: "center",
              background: "#262254",
              color: "white",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            <Button onClick={handleNavigate} color="inherit">Add User</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
};
