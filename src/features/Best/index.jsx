import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Title from "@components/Title";
import BestList from "@features/Best/components/BestList";

import VietNamImage from "@assets/images/vietnam.jpg";
import TokyoImage from "@assets/images/tokyo.jpg";
import ParisImage from "@assets/images/paris.jpg";

const BestFeature = () => {
  const title = {
    titlePage: "Best Value Trips",
    titleTagline: "Best offers trips from us",
    colorTitlePage: "#000",
    colorTagLine: "#8D9199",
  };

  const bestList = [
    {
      id: 1,
      src: VietNamImage,
      title: "French Autumn",
      excerpt: "City Tours, Urban",
      price: 5000,
      discount: 0,
      ratings: 5,
      reviews: 4,
      days: 5,
    },
    {
      id: 2,
      src: TokyoImage,
      title: "Grand Switzerland",
      excerpt: "Shopping, Mountain, Snow & Ice",
      price: 6000,
      discount: 0,
      ratings: 3,
      reviews: 4,
      days: 6,
    },
    {
      id: 3,
      src: ParisImage,
      title: "Discover Japan",
      excerpt: "City Tours, Iconic",
      price: 2500,
      discount: 3000,
      ratings: 4,
      reviews: 4,
      days: 5,
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
        <BestList bestList={bestList} />
      </Box>
    </Box>
  );
};

export default BestFeature;
