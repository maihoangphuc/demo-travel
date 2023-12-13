import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useStyles } from "@styles/custom";
import theme from "@styles/theme";

const Best = ({ best }) => {
  const classes = useStyles();

  return (
    <Box
      component="div"
      className={clsx(classes.effectHover)}
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        borderRadius: "5px",
        border: "1px solid #dce0e0",
        "&:hover .price": {
          left: "-3px",
          padding: "6px 18px",
        },
      }}
    >
      <Box
        component="div"
        sx={{ width: "100%", height: "245px", position: "relative" }}
      >
        <Link component="a" href="#">
          <Box
            component="img"
            src={best.src}
            alt={best.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
            }}
          />
          {best.discount !== 0 && (
            <Stack
              component="div"
              sx={{
                textAlign: "center",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                padding: "10px 7px",
                top: "-14px",
                right: "-14px",
                fontSize: theme.typography.fontSizes.small,
                fontWeight: theme.typography.fontWeights.bold,
                color: theme.palette.texts.primary,
                backgroundColor: theme.palette.backgrounds.buttonMain,
              }}
            >
              Sale
            </Stack>
          )}

          <Box
            component="div"
            className={clsx("price")}
            sx={{
              padding: "3px 10px",
              position: "absolute",
              left: "0",
              bottom: "10px",
              transitionDuration: "0.2s",
              color: theme.palette.texts.primary,
              backgroundColor: theme.palette.backgrounds.buttonPrimary,
            }}
          >
            {best.discount !== 0 && (
              <Typography
                component="span"
                sx={{
                  opacity: ".6",
                  marginRight: "5px",
                  textDecoration: "line-through",
                  fontSize: theme.typography.fontSizes.small,
                  fontWeight: theme.typography.fontWeights.regular,
                }}
              >
                ${best.discount}
              </Typography>
            )}
            <Typography
              component="span"
              sx={{
                fontSize: theme.typography.fontSizes.large,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              ${best.price}
            </Typography>
          </Box>
        </Link>
      </Box>

      <Box
        component="div"
        sx={{ width: "100%", height: "auto", padding: "10px 15px" }}
      >
        <Box component="div">
          <Link component="a" href="#">
            <Typography
              component="h4"
              sx={{
                color: theme.palette.texts.secondary,
                fontSize: theme.typography.fontSizes.subheading,
                fontWeight: theme.typography.fontWeights.bold,
              }}
            >
              {best.title}
            </Typography>
          </Link>
          <Typography
            component="p"
            sx={{
              marginTop: "5px",
              color: theme.palette.texts.main,
              fontSize: theme.typography.fontSizes.small,
            }}
          >
            {best.excerpt}
          </Typography>
        </Box>

        <Stack
          component="div"
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "start",
            marginTop: "20px",
          }}
        >
          <Stack
            component="div"
            sx={{
              flexWrap: "wrap",
              gap: "5px",
              flexDirection: {
                sMobile: "row",
                tablet: "column",
                lTablet: "row",
              },
              alignItems: {
                sMobile: "center",
                tablet: "start",
                lTablet: "center",
              },
            }}
          >
            <Rating
              name="read-only"
              value={best.ratings}
              readOnly
              max={5}
              sx={{
                fontSize: theme.typography.fontSizes.medium,
                "& .MuiRating-iconFilled": {
                  color: theme.palette.texts.buttonMain,
                },
              }}
            />
            <Typography
              component="p"
              sx={{
                color: theme.palette.texts.main,
                fontSize: theme.typography.fontSizes.tiny,
                fontWeight: theme.typography.fontWeights.semiBold,
              }}
            >
              {best.reviews} reviews
            </Typography>
          </Stack>
          <Stack
            component="div"
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
              color: theme.palette.texts.main,
              fontSize: theme.typography.fontSizes.tiny,
              fontWeight: theme.typography.fontWeights.semiBold,
              " span svg": {
                fontSize: theme.typography.fontSizes.medium,
              },
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon />
            </Typography>
            {best.days} days
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

Best.propTypes = {
  best: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }).isRequired,
};

export default Best;
