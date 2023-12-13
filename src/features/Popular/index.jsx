import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Title from "@components/Title";
import PopularList from "@features/Popular/components/PopularList";

import VietNamImage from "@assets/images/vietnam.jpg";
import TokyoImage from "@assets/images/tokyo.jpg";
import ParisImage from "@assets/images/paris.jpg";
import USAImage from "@assets/images/usa.jpg";

const PopularFeature = () => {
  const title = {
    titlePage: "Popular Destinations",
    titleTagline: "World's best tourist destinations",
    colorTitlePage: "#000",
    colorTagLine: "#8D9199",
  };

  const popularList = [
    { id: 1, src: VietNamImage, title: "VietNam" },
    { id: 2, src: TokyoImage, title: "Tokyo" },
    { id: 3, src: ParisImage, title: "Paris" },
    { id: 4, src: USAImage, title: "USA" },
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
        <PopularList popularList={popularList} />
      </Box>
    </Box>
  );
};

export default PopularFeature;
