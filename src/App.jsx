import HeaderFeature from "@features/Header";
import PopularFeature from "@features/Popular";
import BestFeature from "@features/Best";
import ReasonFeature from "@features/Reason";
import TipFeature from "@features/Tip";
import ParallaxFeature from "@features/Parallax";
import FooterFeature from "@features/Footer";
import GoToTop from "@components/GoToTop";

function App() {
  return (
    <>
      <HeaderFeature />
      <PopularFeature />
      <BestFeature />
      <ReasonFeature />
      <ParallaxFeature />
      <TipFeature />
      <FooterFeature />
      <GoToTop />
    </>
  );
}

export default App;
