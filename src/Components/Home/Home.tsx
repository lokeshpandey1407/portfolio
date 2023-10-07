import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import RecentPosts from "../Sections/RecentPosts";
import Loader from "../../Common/Loaders/Loader";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleResumeDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        flexWrap={"wrap-reverse"}
        minHeight={"200px"}
        marginTop={"50px"}
        gap={2}
        alignItems={"center"}
        sx={{ justifyContent: { xs: "center", sm: "space-between" } }}
      >
        <Stack spacing={2} width={"500px"}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            sx={{
              whiteSpace: "pre-line",
              textAlign: { xs: "center", sm: "justify" },
            }}
          >
            {` Hi, I am John,\n Creative Technologist`}
          </Typography>
          <Typography
            variant="body2"
            flexWrap={"wrap"}
            sx={{ textAlign: { xs: "center", sm: "justify" } }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
        </Stack>

        <img
          style={{ aspectRatio: "1 / 1", height: "200px" }}
          src="./face.png"
          alt="image"
        />
      </Stack>
      <Box
        width={"100%"}
        sx={{
          display: "flex",
          marginY: "20px",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
        }}
      >
        <Button
          sx={{
            backgroundColor: "orangered",
            color: "white",
            "&:hover": {
              backgroundColor: "pink",
              color: "black",
            },
            "&:disabled": {
              backgroundColor: "grey",
              color: "white",
            },
          }}
          onClick={handleResumeDownload}
          disabled={isDownloading}
        >
          {" Download Resume "}
          {isDownloading && <Loader size={22} />}
        </Button>
      </Box>
      <RecentPosts />
    </Box>
  );
};

export default Home;
