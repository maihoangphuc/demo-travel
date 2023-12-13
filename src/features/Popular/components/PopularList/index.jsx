import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Popular from "@features/Popular/components/Popular";
import { useStyles } from "@styles/custom";

const PopularList = ({ popularList }) => {
  const classes = useStyles();
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        component="div"
        className={clsx(classes.container)}
        sx={{
          display: "grid",
          columnGap: "30px",
          rowGap: "20px",
          gridTemplateColumns: {
            sMobile: "repeat(1, 1fr)",
            tablet: "repeat(4, 1fr)",
          },
        }}
      >
        {popularList.map((popular) => (
          <Popular popular={popular} key={popular.id} />
        ))}
      </Box>
    </Box>
  );
};

PopularList.propTypes = {
  popularList: PropTypes.array.isRequired,
};

export default PopularList;
