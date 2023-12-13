import clsx from "clsx";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Reason from "@features/Reason/components/Reason";
import { useStyles } from "@styles/custom";

const ReasonList = ({ reasonList }) => {
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
          columnGap: "47px",
          rowGap: "20px",
          gridTemplateColumns: {
            sMobile: "repeat(1, 1fr)",
            tablet: "repeat(3, 1fr)",
          },
        }}
      >
        {reasonList.map((reason) => (
          <Reason reason={reason} key={reason.id} />
        ))}
      </Box>
    </Box>
  );
};

ReasonList.propTypes = {
  reasonList: PropTypes.array.isRequired,
};

export default ReasonList;
