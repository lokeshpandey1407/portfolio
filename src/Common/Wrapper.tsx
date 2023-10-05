import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
});
const navigationItems = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/works" },
  { title: "Blogs", link: "/blogs" },
  { title: "Contact", link: "/contact" },
];
const Wrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header navigationItems={navigationItems} />
      <Container maxWidth="lg" sx={{ minHeight: "70vh" }}>
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Wrapper;
