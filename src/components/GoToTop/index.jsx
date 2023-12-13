import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import useGoToTop from "@hooks/useGoToTop";
import theme from "@styles/theme";

const GoToTop = () => {
  const { handleClick, showGoToTop } = useGoToTop();

  return (
    <>
      {showGoToTop ? (
        <Button
          component="button"
          disableRipple
          onClick={handleClick}
          sx={{
            minWidth: "0",
            width: "45px",
            height: "45px",
            padding: "0",
            position: "fixed",
            bottom: "15px",
            right: "15px",
            zIndex: "1000",
            borderRadius: "50%",
            backgroundColor: theme.palette.backgrounds.buttonMain,
            fontSize: theme.typography.fontSizes.heading,
            color: theme.palette.texts.primary,
            "&:hover": {
              transform: "translateY(-4px)",
              backgroundColor: theme.palette.backgrounds.buttonMain,
            },
            "& svg": {
              fontSize: "inherit",
              color: "inherit",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      ) : (
        ""
      )}
    </>
  );
};

export default GoToTop;
