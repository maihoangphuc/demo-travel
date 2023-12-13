import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import theme from "@styles/theme";

const SelectCustom = ({ select }) => {
  return (
    <TextField
      select
      defaultValue={select.optionList[0].value}
      SelectProps={{
        native: true,
        IconComponent: () => null,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{select.icon}</InputAdornment>
        ),
        sx: {
          "& .MuiOutlinedInput-input": {
            padding: "10px 15px",
          },
        },
      }}
      sx={{
        width: "100%",
        borderRadius: "5px",
        color: theme.palette.texts.main,
        "& .MuiOutlinedInput-root": {
          fontSize: theme.typography.fontSizes.xRegular,
          color: theme.palette.texts.input,
          backgroundColor: theme.palette.backgrounds.primary,
          "& fieldset": {
            border: "1px solid #dce0e0",
          },
          "&:hover fieldset": {
            border: "1px solid #dce0e0",
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.backgrounds.input,
            "& fieldset": {
              border: "1px solid #dce0e0",
            },
          },
          "& .MuiSvgIcon-root": {
            cursor: "context-menu",
            opacity: ".5",
            color: theme.palette.texts.input,
            fontSize: theme.typography.fontSizes.xRegular,
            fontWeight: theme.typography.fontWeights.regular,
          },
        },
      }}
    >
      {select.optionList.map((option, index) => (
        <Box component="option" key={index} value={option.value}>
          {option.label}
        </Box>
      ))}
    </TextField>
  );
};

SelectCustom.propTypes = {
  select: PropTypes.shape({
    optionList: PropTypes.array.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

export default SelectCustom;
