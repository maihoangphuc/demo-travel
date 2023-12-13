import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Parallax = ({ parallax }) => {
  return (
    <Box component="div" sx={{ width: "100%", height: "60vh" }}>
      <Box
        component="img"
        src={parallax.src}
        alt={parallax.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

Parallax.propTypes = {
  parallax: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Parallax;
