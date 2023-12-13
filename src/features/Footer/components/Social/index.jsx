import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";

import theme from "@styles/theme";

const Social = ({ social }) => {
  return (
    <Stack
      component="a"
      href="#"
      sx={{
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        color: theme.palette.texts.primary,
        " svg": {
          fontSize: theme.typography.fontSizes.xLarge,
        },
        backgroundColor:
          (social.title === "facebook" && theme.palette.backgrounds.facebook) ||
          (social.title === "twitter" && theme.palette.backgrounds.twitter) ||
          (social.title === "youtube" && theme.palette.backgrounds.youtube) ||
          (social.title === "pinterest" &&
            theme.palette.backgrounds.pinterest) ||
          (social.title === "instagram" && theme.palette.backgrounds.instagram),
      }}
    >
      {social.icon}
    </Stack>
  );
};

Social.propTypes = {
  social: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Social;
