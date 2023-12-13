import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const MenuFooter = ({ menu }) => {
  return (
    <Stack
      component="a"
      href="#"
      sx={{
        flexDirection: "row",
        columnGap: "3px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="p"
        sx={{
          fontSize: theme.typography.fontSizes.tiny,
          fontWeight: theme.typography.fontWeights.regular,
          color: theme.palette.texts.small,
        }}
      >
        {menu.label}
      </Typography>
    </Stack>
  );
};

MenuFooter.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuFooter;
