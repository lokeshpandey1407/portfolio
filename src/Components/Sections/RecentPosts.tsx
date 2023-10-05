import { Box, Button, Stack, Typography } from "@mui/material";
import PostsCard from "../../Common/PostsCard";
import { Link } from "react-router-dom";

const recentCardData: CardData[] = [
  {
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    category: "Design, Pattern",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Development of a design system from scratch",
    date: "12 May 2023",
    category: "Development, Website",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export type CardData = {
  title: string;
  date: string;
  category: string;
  description: string;
};

const RecentPosts = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        minHeight: "300px",
        // border: "1px solid black",
      }}
    >
      <Stack
        direction={"row"}
        paddingY={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="body1">Recent Posts</Typography>
        <Button
          component={Link}
          variant="text"
          sx={{ color: "black" }}
          to="/blogs"
        >
          View all
        </Button>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={4}
        width={"100%"}
        sx={{
          justifyContent: { xs: "center", lg: "space-between" },
        }}
        alignItems={"center"}
      >
        {recentCardData.map((card) => (
          <PostsCard key={card.title} data={card} />
        ))}
      </Stack>
    </Box>
  );
};

export default RecentPosts;
