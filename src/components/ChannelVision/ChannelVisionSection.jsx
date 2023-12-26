import Image from "next/image";
// Import images
import vision from "#/icons/vision.svg";
import message from "#/icons/message.svg";
import { useTrans } from "@/locales/Helper";

const ChannelVisionSection = () => {
  const t = useTrans();

  return (
    <section id="vision-message" className="vision-message">
      <div className="container">
        <div className="d-block d-lg-flex align-items-center">
          <div
            className="nav flex-row flex-lg-column flex-nowrap flex-lg-wrap justify-content-center gap-3 nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              className="nav-link bg-transparent text-white pe-0 position-relative active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <Image
                src={vision}
                alt="vision-icon"
                width={24}
                height={24}
                priority
                className="ms-2"
              />
              {t["Inews TV visions"]}
            </div>
            <div
              className="nav-link bg-transparent pe-0 text-white position-relative"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <Image
                src={message}
                alt="message-icon"
                width={24}
                height={24}
                priority
                className="ms-2 text-white"
              />
              {t["Inews TV goals"]}
            </div>
          </div>
          <div
            className="tab-content d-flex align-items-center"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabIndex={0}
            >
              قناة أي نيوز ، هي قناة تلفزيونية عراقية بدأت بثها لأول مرة من
              بغداد عام ... ويقع مقرها في عاصمة العراق بغداد، وهي احد القنوات
              الإخبارية المهمة في الشارع العراقي والعربي . تمتاز بتغطياتها
              الاخبارية عبر نشراتها المتعددة على مدار الساعة لتنقل الأحداث أول
              باول انطلاقا من شعارها "نعلم.. لتعلم" .
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabIndex={0}
            >
              تبث القناة برامج حوارية سياسية واجتماعية ورياضية وثقافية فيها بصمة
              الصراحة والجرأة والمصداقية بعد استقطاب شخصيات إعلامية عراقية
              وعربية بارزة في الوسط لتقديم تلك البرامج . تمتلك القناة نخبة جيدة
              من المراسلين في اغلب محافظات العراق وبعض الدول العربية والعالمية .
              وتبثّ القناة نشراتها اليومية وبرامجها عبر القمر الصناعي نايل سات،
              كما يمكن مشاهدتها من خلال البث المباشر على مواقع التواصل الاجتماعي
              "الفيس بوك" .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelVisionSection;
