import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const Reason = ({ reason }) => {
  return (
    <Stack
      component="div"
      sx={{
        width: "100%",
        height: "auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component="div" sx={{ width: "150px", height: "150px" }}>
        <Box
          component="img"
          src={reason.src}
          alt={reason.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Typography
        component="h4"
        sx={{
          color: "#000000",
          textAlign: "center",
          marginTop: "28px",
          fontSize: theme.typography.fontSizes.heading,
          fontWeight: theme.typography.fontWeights.bold,
          lineHeight: theme.typography.lineHeights.medium,
        }}
      >
        {reason.title}
      </Typography>
      <Typography
        component="p"
        sx={{
          textAlign: "center",
          marginTop: "10px",
          color: theme.palette.texts.main,
          fontSize: theme.typography.fontSizes.xRegular,
          lineHeight: theme.typography.lineHeights.medium,
        }}
      >
        {reason.description}
      </Typography>
    </Stack>
  );
};

Reason.propTypes = {
  reason: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reason;
