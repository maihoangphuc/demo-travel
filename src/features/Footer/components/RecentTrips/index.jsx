import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import theme from "@styles/theme";

const RecentTrips = ({ recentTripsList }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        rowGap: "10px",
        width: "100%",
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
        Recent Trips
      </Typography>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "1fr",
          rowGap: "9px",
          columnGap: "8px",
          overflow: "hidden",
        }}
      >
        {recentTripsList.map((recentTrip) => (
          <Box
            component="div"
            key={recentTrip.id}
            sx={{
              position: "relative",
              paddingBottom: "100%",
              overflow: "hidden",
            }}
          >
            <Link component="a" href="#">
              <Box
                component="img"
                src={recentTrip.src}
                alt={recentTrip.title}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

RecentTrips.propTypes = {
  recentTripsList: PropTypes.array.isRequired,
};

export default RecentTrips;
