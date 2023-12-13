import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Title from "@components/Title";
import ReasonList from "@features/Reason/components/ReasonList";

import MapImage from "@assets/images/map.png";
import EarthImage from "@assets/images/earth.png";
import BalloonImage from "@assets/images/hot_air_balloon.png";

const ReasonFeature = () => {
  const title = {
    titlePage: "Why Choose Us",
    titleTagline: "Here are reasons you should plan trip with us",
    colorTitlePage: "#000",
    colorTagLine: "#8D9199",
  };

  const reasonList = [
    {
      id: 1,
      src: MapImage,
      title: "Handpicked Hotels",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
      id: 2,
      src: EarthImage,
      title: "World Class Service",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
    {
      id: 3,
      src: BalloonImage,
      title: "Best Price Guarantee",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    },
  ];

  return (
    <Box component="div" sx={{ marginTop: "70px" }}>
      <Stack
        component="div"
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title title={title} />
      </Stack>
      <Box component="div" sx={{ marginTop: "50px" }}>
        <ReasonList reasonList={reasonList} />
      </Box>
    </Box>
  );
};

export default ReasonFeature;
