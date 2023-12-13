import clsx from "clsx";
import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import { useStyles } from "@styles/custom";
import theme from "@styles/theme";

import useScrollHideNavbar from "@hooks/useScrollHideNavbar";
import MenuHeader from "@features/Header/components/MenuHeader";

const Navbar = (props) => {
  const classes = useStyles();
  const { scrollY, isScrolledDown } = useScrollHideNavbar();
  const { logo, menuList } = props;

  return (
    <AppBar
      sx={{
        display: isScrolledDown ? "none" : "block",
        transition: "transform 2s ease",
        boxShadow: scrollY === 0 ? theme.shadows[0] : theme.shadows[1],
        backgroundColor:
          scrollY === 0
            ? theme.palette.backgrounds.transparent
            : theme.palette.backgrounds.primary,
      }}
    >
      <Toolbar
        disableGutters
        className={clsx(classes.container)}
        sx={{
          height: "76px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="div" sx={{ width: "92px", height: "22px" }}>
          <Link component="a" href="#">
            <Box
              component="img"
              alt="logo"
              src={scrollY === 0 ? logo.logoLight : logo.logoDark}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Link>
        </Box>

        <Stack
          component="div"
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "10px",
          }}
        >
          <Box component="div">
            <Stack
              component="ul"
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                columnGap: "20px",
                display: {
                  sMobile: "none",
                  lTablet: "flex",
                },
              }}
            >
              {menuList.map((menu) => (
                <Box component="li" key={menu.id}>
                  <MenuHeader menu={menu} />
                </Box>
              ))}
            </Stack>
          </Box>
          <Box
            component="div"
            sx={{
              " svg": {
                fontSize: theme.typography.fontSizes.medium,
                fontWeight: theme.typography.fontWeights.medium,
                color:
                  scrollY === 0
                    ? theme.palette.texts.primary
                    : theme.palette.texts.secondary,
              },
            }}
          >
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
            <IconButton>
              <Badge
                badgeContent={0}
                invisible={false}
                max={999}
                showZero
                color="error"
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  logo: PropTypes.shape({
    logoLight: PropTypes.string.isRequired,
    logoDark: PropTypes.string.isRequired,
  }).isRequired,
  menuList: PropTypes.array.isRequired,
};

export default Navbar;
