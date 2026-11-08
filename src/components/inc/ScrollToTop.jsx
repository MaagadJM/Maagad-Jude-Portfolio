import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the previous page's scroll position on navigation,
// so jump back to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
