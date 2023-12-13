import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  //container
  container: {
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.up("sMobile")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lTablet")]: {
      width: "95%",
    },
    [theme.breakpoints.up("laptop")]: {
      width: "85%",
    },
  },
  //effect Hover
  effectHover: {
    transitionDuration: "0.2s",
    "&:hover": {
      transform: "translateY(-4px) !important",
      boxShadow: `${theme.shadows[4]} !important`,
    },
  },
}));
