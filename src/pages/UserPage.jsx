import { Card, CardContent, Typography, CardActions, ButtonGroup, Button, Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { useUserDetails } from "../hooks/useUserDetails"

export const UserPage = () => {

  const {userId} = useParams()

  const {data, error, isError, isLoading} = useUserDetails(userId)

  return (
    <Box sx={{width: "100%", display: "flex",justifyContent: "center", marginTop: "100px"}}>
      <Card
        sx={{
          height: "250px",
          width: "50%",
          boxShadow: 'lg',
          background: "#13191c"
        }}
      >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center', display: "flex", flexDirection: "column", gap: "20px"}}>
          <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 1, mb: 0.5, color: "white" }}>
            Name: {data?.data.name}
          </Typography>
          <Typography sx={{ color: "white" }}>
            Gender: {data?.data.city}
          </Typography>
          <Typography sx={{ color: "white" }}>
            Email: {data?.data.email}
          </Typography>
          <Typography sx={{ color: "white" }}>
            Username: {data?.data.username}
          </Typography>
          <Typography sx={{ color: "white" }}>
            website: {data?.data.website}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
