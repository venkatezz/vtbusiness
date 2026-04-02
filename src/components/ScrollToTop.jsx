import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser default restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Comprehensive scroll reset
    const handleScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Execute immediately and after a tiny delay for safety
    handleScroll();
    const timeout = setTimeout(handleScroll, 20);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;



