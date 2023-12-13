import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const Title = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: title.colorTitlePage,
          fontSize: theme.typography.fontSizes.massiveSize,
          fontWeight: theme.typography.fontWeights.extraBold,
        }}
      >
        {title.titlePage}
      </Typography>
      <Typography
        component="div"
        sx={{
          opacity: ".8",
          color: title.colorTagLine,
          fontWeight: theme.typography.fontWeights.medium,
          fontSize: theme.typography.fontSizes.medium,
        }}
      >
        {title.titleTagline}
      </Typography>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.shape({
    titlePage: PropTypes.string.isRequired,
    titleTagline: PropTypes.string.isRequired,
    colorTitlePage: PropTypes.string,
    colorTagLine: PropTypes.string,
  }).isRequired,
};

export default Title;
