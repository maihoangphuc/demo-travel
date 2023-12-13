import Box from "@mui/material/Box";

import theme from "@styles/theme";

const BorderLine = () => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        opacity: "0.5",
        borderTop: `1px solid ${theme.palette.backgrounds.borderLine}`,
      }}
    ></Box>
  );
};

export default BorderLine;
