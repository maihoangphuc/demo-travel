import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Title from "@components/Title";
import TipList from "@features/Tip/components/TipList";

import VietNamImage from "@assets/images/vietnam.jpg";
import TokyoImage from "@assets/images/tokyo.jpg";
import ParisImage from "@assets/images/paris.jpg";

const TipFeature = () => {
  const title = {
    titlePage: "Articles & Tips",
    titleTagline: "Explore some of the best tips from around the world",
    colorTitlePage: "#000",
    colorTagLine: "#8D9199",
  };

  const tipList = [
    {
      id: 1,
      src: VietNamImage,
      date: "DECEMBER 10, 2016",
      title: "Memorial Day to Someone Told Me to Travel",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache",
    },
    {
      id: 2,
      src: TokyoImage,
      date: "DECEMBER 10, 2016",
      title: "7 Tips For Nomads On A Budget Trips",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache",
    },
    {
      id: 3,
      src: ParisImage,
      date: "DECEMBER 10, 2016",
      title: "Taking A Travel Blog Victory Lap",
      description:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache",
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
        <TipList tipList={tipList} />
      </Box>
    </Box>
  );
};

export default TipFeature;
