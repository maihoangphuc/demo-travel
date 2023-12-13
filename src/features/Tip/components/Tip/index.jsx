import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useStyles } from "@styles/custom";
import theme from "@styles/theme";

const Tip = ({ tip }) => {
  const classes = useStyles();

  return (
    <Stack
      component="div"
      className={clsx(classes.effectHover)}
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: "5px",
        position: "relative",
        flexDirection: "column",
        border: "1px solid #dce0e0",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "245px",
          position: "relative",
          flexShrink: "0",
        }}
      >
        <Link component="a" href="#">
          <Box
            component="img"
            src={tip.src}
            alt={tip.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
            }}
          />
        </Link>
      </Box>

      <Stack
        component="div"
        sx={{
          width: "100%",
          height: "auto",
          padding: "20px 30px",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <Box component="div">
          <Link component="a" href="#">
            <Typography
              component="span"
              sx={{
                textTransform: "uppercase",
                fontSize: theme.typography.fontSizes.tiny,
                fontWeight: theme.typography.fontWeights.semiBold,
                lineHeight: theme.typography.lineHeights.regular,
                color: theme.palette.texts.secondary,
              }}
            >
              {tip.date}
            </Typography>
            <Typography
              component="h6"
              sx={{
                marginTop: "5px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontSize: theme.typography.fontSizes.superHeading,
                fontWeight: theme.typography.fontWeights.bold,
                lineHeight: theme.typography.lineHeights.regular,
                color: theme.palette.texts.secondary,
              }}
            >
              {tip.title}
            </Typography>
          </Link>
        </Box>

        <Box
          component="div"
          sx={{
            marginTop: "auto",
          }}
        >
          <Typography
            component="p"
            sx={{
              margin: "30px 0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              opacity: ".8",
              fontSize: theme.typography.fontSizes.xRegular,
              lineHeight: theme.typography.lineHeights.large,
              color: theme.palette.texts.secondary,
            }}
          >
            {tip.description}
          </Typography>

          <Button
            component="button"
            disableRipple
            href="#"
            sx={{
              padding: "0",
              opacity: ".5",
              textTransform: "capitalize",
              fontSize: theme.typography.fontSizes.xRegular,
              fontWeight: theme.typography.fontWeights.regular,
              color: theme.palette.texts.main,
              "&:hover": {
                opacity: "1",
                color: theme.palette.texts.secondary,
                backgroundColor: theme.palette.backgrounds.transparent,
              },
              "& svg": {
                marginLeft: "5px",
                fontSize: theme.typography.fontSizes.small,
              },
            }}
          >
            Read More
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

Tip.propTypes = {
  tip: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tip;
