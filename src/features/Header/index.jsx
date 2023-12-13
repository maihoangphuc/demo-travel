import Navbar from "@features/Header/components/Navbar";
import Parallax from "@features/Header/components/Parallax";
import Box from "@mui/material/Box";

import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import TravelVideo from "@assets/medias/travel.mp4";
import LogoLightImage from "@assets/images/logo.png";
import LogoDarkImage from "@assets/images/logo2.png";

import theme from "@styles/theme";

const HeaderFeature = () => {
  const logo = {
    logoLight: LogoLightImage,
    logoDark: LogoDarkImage,
  };

  const menuList = [
    { id: 1, name: "Home" },
    { id: 2, name: "Tours" },
    { id: 3, name: "Booking" },
    { id: 4, name: "Destinations" },
    { id: 5, name: "Pages" },
    { id: 6, name: "Blog" },
    { id: 7, name: "Shortcodes" },
    { id: 8, name: "Shop" },
  ];

  const parallax = {
    src: TravelVideo,
  };

  const title = {
    titlePage: "Where do you want to go?",
    titleTagline: "Trips, experiences, and places. All in one service.",
    colorTitlePage: theme.palette.texts.primary,
    colorTagLine: theme.palette.texts.primary,
  };

  const searchCity = {
    placeholder: "Distination, city",
    icon: <SearchIcon />,
  };

  const searchMoney = {
    placeholder: "Max budget ex. 500",
    icon: <AttachMoneyIcon />,
  };

  const selectMonth = {
    optionList: [
      {
        value: "",
        label: "Any month",
      },
      {
        value: "january",
        label: "January",
      },
      {
        value: "february",
        label: "February",
      },
      {
        value: "march",
        label: "March",
      },
      {
        value: "april",
        label: "April",
      },
      {
        value: "may",
        label: "May",
      },
      {
        value: "june",
        label: "June",
      },
      {
        value: "july",
        label: "July",
      },
      {
        value: "august",
        label: "August",
      },
      {
        value: "september",
        label: "September",
      },
      {
        value: "october",
        label: "October",
      },
      {
        value: " november",
        label: " November",
      },
      {
        value: " december",
        label: " December",
      },
    ],
    icon: <CalendarTodayIcon />,
  };

  const selectSort = {
    optionList: [
      {
        value: "date",
        label: "Sort By Date",
      },
      {
        value: "price_low",
        label: "Price Low to Hight",
      },
      {
        value: "price_hight",
        label: "Price Hight to low",
      },
      {
        value: "name",
        label: "Sort By Name",
      },
      {
        value: "popular",
        label: "Sort By Popularity",
      },
      {
        value: "review",
        label: "Sort By Review Score",
      },
    ],
    icon: <SwapVertIcon />,
  };

  const selectCategory = {
    optionList: [
      {
        value: "",
        label: "All Categories",
      },
      {
        value: "mountain",
        label: "Mountain",
      },
      {
        value: "rural",
        label: "Rural",
      },
      {
        value: "snow-ice",
        label: "Snow & Ice",
      },
      {
        value: "wildlife",
        label: "Wildlife",
      },
    ],
    icon: <KeyboardArrowDownIcon />,
  };

  const selectDestination = {
    optionList: [
      {
        value: "",
        label: "Any Destinations",
      },
      {
        value: "277",
        label: "Tokyo",
      },
      {
        value: "278",
        label: "Seoul",
      },
      {
        value: "279",
        label: "Paris",
      },
      {
        value: "284",
        label: "London",
      },
    ],
    icon: <KeyboardArrowDownIcon />,
  };

  const parallaxData = {
    title,
    parallax,
    searchCity,
    searchMoney,
    selectMonth,
    selectSort,
    selectCategory,
    selectDestination,
  };

  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        width: "100%",
        height: "629px",
      }}
    >
      <Navbar menuList={menuList} logo={logo} />
      <Parallax parallaxData={parallaxData} />
    </Box>
  );
};

export default HeaderFeature;
