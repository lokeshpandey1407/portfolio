import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

type Props = {
  data: { title: string; date: string; category: string; description: string };
};

const PostsCard = ({ data }: Props) => {
  return (
    <Card sx={{ maxWidth: "350px" }}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          color="text.primary"
          gutterBottom
        >
          {data.title}
        </Typography>
        <Stack direction={"row"} spacing={2} marginY={3}>
          <Typography variant="caption">{data.date}</Typography>
          <Divider
            sx={{ border: ".5px solid black" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Typography variant="caption">{data.category}</Typography>
        </Stack>
        <Typography variant="subtitle2">{data.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostsCard;
