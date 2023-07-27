import {Card,CardContent,Typography,Button,Box,Avatar,}from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { useUserDetails } from "../hooks/useUserDetails";

export const UserPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const { userId } = useParams();

  const { data, error, isError, isLoading } = useUserDetails(userId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const { name, email, city, website, username } = data?.data;

  const abreviation = name.replace(/[a-z]/g, "").replace(/ /, "");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          sx={{
            width: 620,
            maxWidth: "100%",
            boxShadow: "lg",
            background: "#333",
            color: "white",
            borderRadius: "26px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "5px"
            }}
          >
            <Button onClick={handleNavigate}>
              <CloseIcon color="error" />
            </Button>
          </Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Details of the user {name}
          </Typography>
          <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar sx={{ width: "60px", height: "60px" }}>
                {abreviation}
              </Avatar>
            </Box>
            <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 2, mb: 0.5 }}>
              {name}
            </Typography>
            <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 2, mb: 0.5 }}>
              {city}
            </Typography>
            <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 2, mb: 0.5 }}>
              {email}
            </Typography>
            <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 2, mb: 0.5 }}>
              {username}
            </Typography>
            <Typography fontSize="lg" fontWeight="lg" sx={{ mt: 2, mb: 0.5 }}>
              {website}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
