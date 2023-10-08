import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  navigationItems: prop[];
}
interface prop {
  title: string;
  link: string;
}

const Header = ({ navigationItems }: Props) => {
  const location = useLocation();
  const [url, setUrl] = useState<string>(location.pathname);

  const handleActiveLink = (link: string) => {
    if (url == link) {
      return "red";
    }
  };

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <Container maxWidth="xl">
      <Box marginTop={3} sx={{ flexGrow: 1 }}>
        <Stack direction={"row"} spacing={3} justifyContent={"flex-end"}>
          {navigationItems.map((item) => (
            <Button
              key={item.link}
              size="small"
              sx={{ color: handleActiveLink(item.link) }}
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
