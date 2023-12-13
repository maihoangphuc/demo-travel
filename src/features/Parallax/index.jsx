import Box from "@mui/material/Box";

import Parallax from "@features/Parallax/components/Parallax";
import BridgeImage from "@assets/images/bridge.jpg";

const ParallaxFeature = () => {
  const parallax = {
    src: BridgeImage,
    title: "Parallax background",
  };
  return (
    <Box component="div" sx={{ marginTop: "70px" }}>
      <Parallax parallax={parallax} />
    </Box>
  );
};

export default ParallaxFeature;
