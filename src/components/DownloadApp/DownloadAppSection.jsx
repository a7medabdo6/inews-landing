import Image from "next/image";
// Import images
import googlePlay from "#/images/google-play.png";
import appStore from "#/images/app-store.png";
import phoneSm from "#/images/phone_download_sm.png";
import phoneLg from "#/images/phone_download_lg.png";
import { useTrans } from "@/locales/Helper";

const DownloadAppSection = () => {
  const t = useTrans();

  return (
    <section id="download-app" className="download-app">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center align-content-center gap-4">
              <h2 className="fw-bold">
                {
                  t[
                    "Download the iNews application now and enjoy all latest news"
                  ]
                }
              </h2>
              <p className="fs-5">
                تغطي "اي نيوز" الاحداث اليومية المهمة من خلال نشراتها المتعددة
                والموزعة على فترات محددة حيث تتضمن 5 نشرات موجزة (النشرة العاشرة
                والحادية عشر والثانية عشر والرابعة والسادسة) و4 نشرات طويلة
                (ساعة تلفزيونية) هي نشرات (الواحدة والثالثة والثامنة) اضافة الى
                نشرة مفصلة (حصاد أي نيوز) في الساعة الحادية عشر ليلا، كما تقدم
                نشرة واحدة اقتصادية ونشرتان رياضية.
              </p>

              <div className="download-app-links d-flex justify-content-start align-items-center gap-3">
                <a href="https://play.google.com/store/apps/details?id=com.abualgaitinews.app">
                  <Image
                    className="android"
                    src={googlePlay}
                    width={220}
                    height={65}
                    alt="download app for android"
                    priority
                  />
                </a>
                <a href="https://apps.apple.com/us/app/%D9%82%D9%86%D8%A7%D8%A9-%D8%A7%D9%8A-%D9%86%D9%8A%D9%88%D8%B2-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A6%D9%8A%D8%A9/id1532198502">
                  <Image
                    className="ios"
                    src={appStore}
                    width={220}
                    height={80}
                    alt="download app for ios"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="phones-box position-relative">
              <div>
                <Image src={phoneSm} alt="phone-app-img" priority />
              </div>
              <div
                className="large-phone-box position-absolute"
                style={{
                  top: "-50px",
                  left: "150px",
                }}
              >
                <Image src={phoneLg} alt="phone-app-img" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
