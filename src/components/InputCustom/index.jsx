import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import theme from "@styles/theme";

const InputCustom = ({ input }) => {
  return (
    <TextField
      placeholder={input.placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{input.icon}</InputAdornment>
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
            opacity: ".5",
            cursor: "context-menu",
            color: theme.palette.texts.input,
            fontSize: theme.typography.fontSizes.heading,
            fontWeight: theme.typography.fontWeights.regular,
          },
        },
      }}
    />
  );
};

InputCustom.propTypes = {
  input: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

export default InputCustom;
