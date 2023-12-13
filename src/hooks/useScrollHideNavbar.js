import { useState, useEffect } from "react";

const useScrollHideNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setIsScrolledDown(currentScrollY > scrollY);
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return { scrollY, isScrolledDown };
};

export default useScrollHideNavbar;
