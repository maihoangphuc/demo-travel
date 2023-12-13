import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { useStyles } from "@styles/custom";
import theme from "@styles/theme";

const Popular = ({ popular }) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      className={clsx(classes.effectHover)}
      sx={{
        width: "100%",
        position: "relative",
        height: {
          sMobile: "300px",
          tablet: "180px",
          lTablet: "300px",
        },
      }}
    >
      <Link component="a" href="#">
        <Box
          component="img"
          src={popular.src}
          alt={popular.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            left: 0,
            bottom: 0,
            position: "absolute",
            padding: "10px 15px",
            color: theme.palette.texts.primary,
            fontSize: theme.typography.fontSizes.superHeading,
            fontWeight: theme.typography.fontWeights.extraBold,
          }}
        >
          {popular.title}
        </Typography>
      </Link>
    </Box>
  );
};

Popular.propTypes = {
  popular: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Popular;
