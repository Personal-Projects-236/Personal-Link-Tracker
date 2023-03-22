"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import LoginIcon from "@mui/icons-material/Login";

import { link } from "@/components/atom";

const pages = ["Dashboard", "Profile"];

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          disableGutters
        >
          <div style={{ display: "flex" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            {link(
              "/",
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                HOME
              </Typography>
            )}
          </div>
          <div style={{ display: "flex" }}>
            {pages.map((page, index) => (
              <div key={index} style={{ padding: "5px" }}>
                <Typography textAlign="center">{page}</Typography>
              </div>
            ))}
          </div>
          <LoginIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
