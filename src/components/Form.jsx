import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddUser } from "../hooks/useAddUser";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useUserDetails } from "../hooks/useUserDetails";

export const Form = ({title, titleButton, userId, data}) => {

  const [user, setUser] = useState({
      name: data?.name ? data?.name : "",
      city: data?.city ? data?.city : "",
      email: data?.email ? data?.email : "",
      username: data?.username ? data?.username : "",
      website: data?.website ? data?.website : ""
  })

  
  const {mutate: addUser} = useAddUser()

    const handleChange = (event) =>{
        const {name, value} = event.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const navigate = useNavigate()

    const handleAddUser = () =>{

        const newData = {
          ...user
        }

        console.log(newData)

        if(userId){
          editUser(data.id, newData)
          navigate("/")
        }else{
          addUser(user)
          navigate("/")
        }
    }

  return (
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
          {title}
        </Typography>
        <Grid container>
          <Grid item sx={{ mt: 2, width: "100%" }}>
            <TextField
              label="Name"
              type="text"
              placeholder="enter your name"
              fullWidth
              value={user.name}
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
              value={user.city}
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
              value={user.email}
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
              value={user.username}
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
              value={user.website}
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
            <Button onClick={handleAddUser} color="inherit">{titleButton}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
