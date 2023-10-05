import { Container, IconButton, Stack, Typography } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Facebook } from "./Icons/facebook";
import { InstagramIcon } from "./Icons/instagram";
import { TwitterIcon } from "./Icons/twitter";
import { LinkedinIcon } from "./Icons/linkedin";

const Footer = () => {
  return (
    <CssVarsProvider>
      <Container
        maxWidth="lg"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          gap: 2,
          marginTop: "20px",
        }}
        component="footer"
      >
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <Facebook height={30} width={30} />
          </IconButton>
          <IconButton>
            <InstagramIcon height={30} width={30} />
          </IconButton>
          <IconButton>
            <TwitterIcon height={30} width={30} />
          </IconButton>
          <IconButton>
            <LinkedinIcon height={30} width={30} />
          </IconButton>
        </Stack>
        <Typography variant="caption">
          Copyright ©2020 All rights reserved
        </Typography>
      </Container>
    </CssVarsProvider>
  );
};

export default Footer;
