import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const MenuHeader = ({ menu }) => {
  return (
    <Stack
      component="a"
      href="#"
      sx={{
        flexDirection: "row",
        columnGap: "3px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: theme.typography.fontSizes.regular,
        fontWeight: theme.typography.fontWeights.medium,
        color:
          scrollY === 0
            ? theme.palette.texts.primary
            : theme.palette.texts.secondary,
        " span": {
          fontSize: "inherit",
          fontWeight: "inherit",
          color: "inherit",
        },
        " svg": {
          fontSize: theme.typography.fontSizes.medium,
          fontWeight: "inherit",
          color: "inherit",
        },
      }}
    >
      <Typography component="span">{menu.name}</Typography>
      <KeyboardArrowDownIcon />
    </Stack>
  );
};

MenuHeader.propTypes = {
  menu: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuHeader;
