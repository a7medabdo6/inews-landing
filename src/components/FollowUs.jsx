import Image from "next/image";
// Images
import logo from "#/images/logo.png";

const FollowUs = ({ setShow }) => {
  const data = [
    {
      id: 1,
      img: "/icons/google_play.svg",
      txt: "  حمِّل تطبيق قناة آي نيوز من جوجل بلي      ",
      link: "https://play.google.com/store/apps/details?id=com.abualgaitinews.app",
    },
    {
      id: 2,
      img: "/icons/app_store.svg",
      txt: "   حمِّل تطبيق قناة آي نيوز من تطبيق آبل ستور      ",
      link: "https://apps.apple.com/us/app/%D9%82%D9%86%D8%A7%D8%A9-%D8%A7%D9%8A-%D9%86%D9%8A%D9%88%D8%B2-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A6%D9%8A%D8%A9/id1532198502",
    },
    {
      id: 3,
      img: "/icons/earth.svg",
      txt: "تصفَّح الموقع الرسمي للقناة من هنا ",
      link: "",
    },
    {
      id: 4,
      img: "/icons/facebook.png",
      txt: "تابعنا عبر الفيسبوك       ",
      link: "https://www.facebook.com/inewschannel1",
    },
    {
      id: 5,
      img: "/icons/instagram.png",
      txt: "  تابعنا عبر الإنستغرام      ",
      link: "https://www.instagram.com/inewschanneltv/",
    },
    {
      id: 6,
      img: "/icons/telegram.png",
      txt: "  تابعنا عبر التلجرام ",
      link: "https://t.me/inewschannel_tv",
    },
  ];

  return (
    <div className="modal position-fixed top-0 start-0 z-3 w-100 h-100 bg-black d-flex justify-content-center align-items-center text-white">
      <div className="bg-white">
        <div className="head d-flex justify-content-center align-items-center gap-4 px-2">
          <h4>تابعنا عبر المنصات الخاصة بنا</h4>
          <button
            className="btn mb-5"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.6666 16.6668L3.33325 3.3335M16.6666 3.3335L3.33325 16.6668"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center gap-4 py-4">
          <Image src={logo} alt="inews" priority />

          {data.map((item) => (
            <a
              href={item?.link}
              className="d-flex justify-content-start align-items-center py-2"
              style={{
                width: "90%",
                color: "var(--main-color)",
                border: "2px solid var(--main-color)",
                padding: "0.5rem 2.6rem",
              }}
            >
              <Image
                src={item.img}
                alt={item.txt}
                width={24}
                height={24}
                priority
              />
              <h5 className="me-3">{item.txt}</h5>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
