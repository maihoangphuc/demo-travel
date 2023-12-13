import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Best from "@features/Best/components/Best";
import { useStyles } from "@styles/custom";

const BestList = ({ bestList }) => {
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
          gridAutoRows: "1fr",
          gridTemplateColumns: {
            sMobile: "repeat(1, 1fr)",
            tablet: "repeat(3, 1fr)",
          },
        }}
      >
        {bestList.map((best) => (
          <Best best={best} key={best.id} />
        ))}
      </Box>
    </Box>
  );
};

BestList.propTypes = {
  bestList: PropTypes.array.isRequired,
};

export default BestList;
