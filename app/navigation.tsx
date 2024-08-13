"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useState } from "react";
import Image from "next/image";
import { NavigationalMenuItem } from "./components/navigational-menu-item/navigational-menu-item";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/portfolio", label: "Portfolio" },
];

export const Navigation = () => {
  const currentPathName = usePathname();
  const matchingMenuItem = menuItems.find(({ url }) => url === currentPathName);
  console.log({ currentPathName, matchingMenuItem });
  const [selectedMenuItem, setSelectedMenuItem] = useState<number>(
    matchingMenuItem?.id || 1
  );
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const onNavigate = (id: number) => {
    setAnchorElNav(null);
    setSelectedMenuItem(id);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/logo-light.png" alt="logo" width={40} height={40} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MorkalorkDEV
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuItems.map(({ id, url, label }) => (
                <NavigationalMenuItem
                  key={id}
                  url={url}
                  label={label}
                  onClick={() => onNavigate(id)}
                  isSelected={selectedMenuItem === id}
                />
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MorkalorkDEV
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuItems.map(({ id, url, label }) => (
              <NavigationalMenuItem
                key={id}
                url={url}
                label={label}
                onClick={() => onNavigate(id)}
                isSelected={selectedMenuItem === id}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
