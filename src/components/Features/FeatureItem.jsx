import { useTrans } from "@/locales/Helper";
import Image from "next/image";

const FeatureItem = ({ data }) => {
  const t = useTrans();

  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
      <div className="feature-item py-3 px-4 d-flex flex-column justify-content-center align-items-start gap-3">
        <Image
          src={data.icon}
          width={80}
          height={80}
          alt="feature-img"
          priority
        />
        <h4 className="fw-bold">
          {data.title === "فعل زر التنبيهات"
            ? `${t["Activate notifications"]}`
            : null}

          {data.title === "اصنع قائمة متابعاتك"
            ? `${t["Make your shows list"]}`
            : null}
          {data.title === "تابع آخر الآخبار"
            ? `${t["Follow the latest news"]}`
            : null}
        </h4>
        <p>
          {data.desc ===
          "ابقى على اطلاع مع الاخبار العاجلة طوال اليوم من خلال التطبيق ."
            ? `${t["Stay watching breaking news throughout the day through the application"]}`
            : null}

          {data.desc ===
          "الاطلاع على المعلومات و آخر المستجدات بشأن اهتماماتك التي تحددها للتطبيق . "
            ? `${t["View information and the latest news regarding your interests that you specify for the application."]}`
            : null}
          {data.desc ===
          "الاطلاع على آخر المستجدات بشأن التوجهات اليومية الهامة، والأخبار وقت حدوثها خلال اليوم ."
            ? `${t["See the latest news regarding important daily trends during the day"]}`
            : null}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
