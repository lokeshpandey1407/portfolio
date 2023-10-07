import { Card, CardContent, Skeleton, Stack } from "@mui/material";

const PostSkeleton = () => {
  return (
    <Card sx={{ maxWidth: "350px" }}>
      <CardContent>
        <Stack spacing={2}>
          <Skeleton variant="rounded" width={300} height={65} />
          <Skeleton variant="rounded" width={200} height={20} />
          <Skeleton variant="rounded" width={300} height={80} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PostSkeleton;
