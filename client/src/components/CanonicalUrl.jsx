import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://laalihills.com";

const CanonicalUrl = () => {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  return (
    <Helmet>
      <link rel="canonical" href={`${SITE_URL}${normalizedPath}`} />
    </Helmet>
  );
};

export default CanonicalUrl;
