import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const Award = ({ award }) => {
  return (
    <Stack
      component="div"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "10px",
        width: "100%",
        height: "auto",
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: theme.typography.fontSizes.xxLarge,
          fontWeight: theme.typography.fontWeights.bold,
          color: theme.palette.texts.primary,
        }}
      >
        Our Awards
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: theme.typography.fontSizes.xRegular,
          lineHeight: theme.typography.lineHeights.xLarge,
          color: theme.palette.texts.small,
        }}
      >
        London is a megalopolis of people, ideas and frenetic energy. The
        capital and largest city of the United Kingdom.
      </Typography>
      <Box
        component="div"
        sx={{
          maxWidth: "246px",
          maxHeight: "113px",
          width: "100%",
          height: "auto",
          marginTop: "20px",
        }}
      >
        <Box
          component="img"
          src={award.src}
          alt="awards"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Stack>
  );
};

Award.propTypes = {
  award: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default Award;
