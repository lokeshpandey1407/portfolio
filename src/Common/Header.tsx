import { Box, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  navigationItems: prop[];
}
interface prop {
  title: string;
  link: string;
}

const Header = ({ navigationItems }: Props) => {
  return (
    <Container maxWidth="xl">
      <Box marginTop={3} sx={{ flexGrow: 1 }}>
        <Stack direction={"row"} spacing={3} justifyContent={"flex-end"}>
          {navigationItems.map((item) => (
            <Button
              key={item.link}
              size="small"
              sx={{ color: "black" }}
              component={Link}
              to={item.link}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Header;
