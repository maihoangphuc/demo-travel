import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Tip from "@features/Tip/components/Tip";
import { useStyles } from "@styles/custom";

const TipList = ({ tipList }) => {
  const classes = useStyles();

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
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
            tablet: "repeat(3, 1fr)",
          },
        }}
      >
        {tipList.map((tip) => (
          <Tip tip={tip} key={tip.id} />
        ))}
      </Box>
    </Box>
  );
};

TipList.propTypes = {
  tipList: PropTypes.array.isRequired,
};

export default TipList;
