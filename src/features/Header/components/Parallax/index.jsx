import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Title from "@components/Title";

import Search from "@features/Header/components/Search";

const Parallax = ({ parallaxData }) => {
  const {
    title,
    parallax,
    searchCity,
    searchMoney,
    selectMonth,
    selectSort,
    selectCategory,
    selectDestination,
  } = parallaxData;

  const searchData = {
    searchCity,
    searchMoney,
    selectMonth,
    selectSort,
    selectCategory,
    selectDestination,
  };
  return (
    <>
      <Box
        component="video"
        autoPlay
        loop
        muted
        src={parallax.src}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          width: "80%",
          height: "auto",
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Title title={title} />
        <Search searchData={searchData} />
      </Box>
    </>
  );
};

Parallax.propTypes = {
  parallaxData: PropTypes.shape({
    parallax: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.shape({
      titlePage: PropTypes.string.isRequired,
      titleTagline: PropTypes.string.isRequired,
    }).isRequired,
    searchCity: PropTypes.object.isRequired,
    searchMoney: PropTypes.object.isRequired,
    selectMonth: PropTypes.object.isRequired,
    selectSort: PropTypes.object.isRequired,
    selectCategory: PropTypes.object.isRequired,
    selectDestination: PropTypes.object.isRequired,
  }),
};

export default Parallax;
