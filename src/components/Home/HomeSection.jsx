import Image from "next/image";
// Import images
import phoneSm from "#/images/phone_home_sm.png";
import phoneLg from "#/images/phone_home_lg.png";
import { useTrans } from "@/locales/Helper";

const HomeSection = () => {
  const t = useTrans();

  return (
    <section id="home" className="home text-white py-5">
      <div className="bar px-5 py-3 mt-5">
        <div className="container">
          <h2> {t["we Know to you know"]}</h2>
        </div>
      </div>
      <div className="container position-relative mt-5">
        <p className="fs-5">
          {
            t[
              "INews Channel is a general news channel concerned with Iraqi, regional and international affairs in all its details, broadcast from the Republic of Iraq"
            ]
          }
        </p>

        <a href="#download-app">
          <button className="btn rounded-0 text-white border py-2 my-4">
            {t["Download Application"]}
          </button>
        </a>

        <div className="position-absolute d-none d-lg-block custom-pos">
          <Image src={phoneSm} alt="phone-app-img" priority />
        </div>
        <div className="position-absolute d-none d-lg-block custom-pos-two">
          <Image src={phoneLg} alt="phone-app-img" priority />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
