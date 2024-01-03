import Image from "next/image";
// Import images
import logo from "#/images/logo.png";
import { useEffect, useState } from "react";
import { useTrans } from "@/locales/Helper";

const Navbar = () => {
  const [hash, setHash] = useState("#home");
  const [Lang, setLang] = useState("EN");

  useEffect(() => {
    if (location.hash) {
      setHash(location.hash);
    }
  }, []);

  const handleClick = (hash) => {
    setHash(hash);
  };
  const t = useTrans();

  console.log(t, "ttttt");
  const [isArabic, setIsArabic] = useState(() => false);
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    setIsArabic(storedLanguage == "ar" ? false : true);
  }, []);

  const toggleLanguage = () => {
    localStorage.setItem("preferredLanguage", isArabic ? "ar" : "ar");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white position-fixed top-0 start-0 w-100 z-3">
      <div className="container">
        <a className="navbar-brand">
          <Image src={logo} alt="logo-img" priority />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4 gap-4">
            <li className="nav-item">
              <a
                className={`nav-link ${hash === "#home" ? "active" : ""}`}
                aria-current="page"
                href="#home"
                onClick={() => handleClick("#home")}
              >
                {t["Home"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${hash === "#features" ? "active" : ""}`}
                href="#features"
                onClick={() => handleClick("#features")}
              >
                {t["Application Features"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  hash === "#vision-message" ? "active" : ""
                }`}
                aria-current="page"
                href="#vision-message"
                onClick={() => handleClick("#vision-message")}
              >
                {t["Vision and Goals"]}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  hash === "#download-app" ? "active" : ""
                }`}
                aria-current="page"
                href="#download-app"
                onClick={() => handleClick("#download-app")}
              >
                {t["Download Application"]}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <button className="btn text-white rounded-0 px-4" type="submit">
              {t["Download Application"]}
            </button>
            <button
              onClick={toggleLanguage}
              className="btn text-white rounded-0 px-4 me-2"
              type="submit"
            >
              {isArabic ? "En" : "Ar"}{" "}
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
