import Image from "next/image";
// Import images
import logo from "#/images/logo.png";
import googlePlay from "#/images/footer_google-play.png";
import appStore from "#/images/footer_app-store.png";
import { useTrans } from "@/locales/Helper";

const Footer = () => {
  const t= useTrans()

  return (
    <footer className="footer pt-5 pb-4 mb-lg-0">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center gap-4">
            <Image src={logo} alt="iNEWS" priority />
            <p
              className="text-black fw-bold text-center"
              style={{
                lineHeight: "30px",
              }}
            >
                           {t[ "General news covering Iraqi, regional and international , broadcast from the Republic of Iraq. On frequency H 11258."]}

            </p>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    d="M5.77643 0.036377C4.90757 0.036377 4.0743 0.38153 3.45992 0.995907C2.84554 1.61028 2.50039 2.44356 2.50039 3.31242V5.13638H0.747266C0.659432 5.13638 0.587891 5.20721 0.587891 5.29575V7.70408C0.587891 7.79192 0.658724 7.86346 0.747266 7.86346H2.50039V12.8041C2.50039 12.8919 2.57122 12.9635 2.65977 12.9635H5.0681C5.15593 12.9635 5.22747 12.8926 5.22747 12.8041V7.86346H6.99618C7.06914 7.86346 7.13289 7.81388 7.1506 7.74304L7.75268 5.33471C7.75861 5.31121 7.75909 5.28667 7.75411 5.26295C7.74912 5.23923 7.73879 5.21697 7.7239 5.19784C7.70901 5.17872 7.68995 5.16324 7.66818 5.15259C7.64641 5.14194 7.6225 5.1364 7.59827 5.13638H5.22747V3.31242C5.22747 3.24033 5.24167 3.16894 5.26926 3.10234C5.29685 3.03574 5.33728 2.97522 5.38826 2.92425C5.43924 2.87327 5.49975 2.83283 5.56636 2.80525C5.63296 2.77766 5.70434 2.76346 5.77643 2.76346H7.6181C7.70593 2.76346 7.77747 2.69263 7.77747 2.60409V0.195752C7.77747 0.107919 7.70664 0.036377 7.6181 0.036377H5.77643Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M7.57429 15.2903C12.9519 15.2903 15.8927 10.8354 15.8927 6.97183C15.8927 6.84536 15.8927 6.71949 15.8844 6.59421C16.4568 6.18016 16.9508 5.66746 17.3433 5.08015C16.8097 5.31685 16.2437 5.47216 15.6641 5.5409C16.2743 5.17532 16.7309 4.60056 16.949 3.92352C16.3752 4.264 15.7475 4.50396 15.0929 4.63305C14.6521 4.16431 14.0691 3.85392 13.4341 3.74991C12.7991 3.64591 12.1475 3.75408 11.5802 4.05769C11.0128 4.3613 10.5614 4.84342 10.2956 5.42946C10.0299 6.0155 9.96474 6.67277 10.1102 7.29958C8.94788 7.24133 7.81079 6.93931 6.77276 6.41313C5.73472 5.88695 4.81893 5.14837 4.08482 4.24533C3.71105 4.889 3.59663 5.65091 3.76485 6.37597C3.93307 7.10103 4.37129 7.73472 4.99029 8.14805C4.52497 8.13416 4.06981 8.00851 3.66326 7.78171V7.81911C3.66345 8.49409 3.89708 9.14823 4.32454 9.6706C4.752 10.193 5.34698 10.5514 6.00857 10.6851C5.57819 10.8024 5.12667 10.8194 4.68867 10.735C4.87546 11.316 5.23914 11.824 5.72885 12.1881C6.21855 12.5522 6.8098 12.7541 7.41992 12.7656C6.8137 13.2419 6.11955 13.5941 5.37715 13.8019C4.63475 14.0097 3.85866 14.0692 3.09326 13.9769C4.43012 14.8351 5.9857 15.2904 7.57429 15.2885"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.5683 9.19048C20.5683 9.19048 20.4183 8.19048 19.9683 7.7619C19.4183 7.19048 18.7683 7.19048 18.4683 7.14286C16.3683 7 13.2183 7 13.2183 7C13.2183 7 10.0683 7 7.96826 7.14286C7.66826 7.19048 7.01826 7.19048 6.46826 7.7619C6.01826 8.19048 5.86826 9.19048 5.86826 9.19048C5.86826 9.19048 5.71826 10.3333 5.71826 11.4762V12.5238C5.71826 13.6667 5.86826 14.8571 5.86826 14.8571C5.86826 14.8571 6.01826 15.8571 6.46826 16.2857C7.01826 16.8571 7.76826 16.8571 8.11826 16.9048C9.31826 16.9524 13.2183 17 13.2183 17C13.2183 17 16.3683 17 18.4683 16.8571C18.7683 16.8095 19.4183 16.8095 19.9683 16.2381C20.4183 15.8095 20.5683 14.8095 20.5683 14.8095C20.5683 14.8095 20.7183 13.6667 20.7183 12.5238V11.4762C20.7183 10.3333 20.5683 9.19048 20.5683 9.19048ZM11.6683 13.8571V9.85714L15.7183 11.8571L11.6683 13.8571Z"
                    fill="black"
                  />
                  <circle cx="12.7183" cy="12" r="11.5" stroke="black" />
                </svg>
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <g clipPath="url(#clip0_410_974)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.6424 2.76873C12.7968 2.70372 12.9659 2.6813 13.1319 2.7038C13.298 2.7263 13.455 2.7929 13.5866 2.89666C13.7182 3.00042 13.8195 3.13755 13.8801 3.29378C13.9407 3.45001 13.9583 3.61963 13.9311 3.78498L12.5136 12.3831C12.3761 13.2125 11.4661 13.6881 10.7055 13.275C10.0693 12.9294 9.12427 12.3969 8.27427 11.8412C7.84927 11.5631 6.54739 10.6725 6.70739 10.0387C6.84489 9.49685 9.03239 7.4606 10.2824 6.24998C10.773 5.77435 10.5493 5.49998 9.96989 5.93748C8.53052 7.02373 6.22114 8.6756 5.45739 9.1406C4.78364 9.5506 4.43239 9.6206 4.01239 9.5506C3.24614 9.4231 2.53552 9.2256 1.95552 8.98498C1.17177 8.65998 1.20989 7.58248 1.95489 7.26873L12.6424 2.76873Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_410_974">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.281738)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M6.61523 15.0417H4.24023V7.125H6.61523V15.0417ZM15.3236 15.0417H12.9486V10.8126C12.9486 9.71058 12.5559 9.16196 11.7777 9.16196C11.161 9.16196 10.7699 9.46912 10.5736 10.0842V15.0417H8.19857C8.19857 15.0417 8.23023 7.91667 8.19857 7.125H10.0732L10.2181 8.70833H10.2672C10.7541 7.91667 11.5323 7.37992 12.5994 7.37992C13.4109 7.37992 14.0672 7.60554 14.5683 8.17237C15.0726 8.74 15.3236 9.50158 15.3236 10.5711V15.0417Z"
                    fill="black"
                  />
                  <path
                    d="M5.42777 6.33325C6.10547 6.33325 6.65485 5.80159 6.65485 5.14575C6.65485 4.48991 6.10547 3.95825 5.42777 3.95825C4.75007 3.95825 4.20068 4.48991 4.20068 5.14575C4.20068 5.80159 4.75007 6.33325 5.42777 6.33325Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M11.2817 1.5H5.28174C4.35379 1.50099 3.46412 1.87006 2.80796 2.52622C2.1518 3.18238 1.78273 4.07205 1.78174 5V11C1.78273 11.928 2.1518 12.8176 2.80796 13.4738C3.46412 14.1299 4.35379 14.499 5.28174 14.5H11.2817C12.2097 14.499 13.0994 14.1299 13.7555 13.4738C14.4117 12.8176 14.7807 11.928 14.7817 11V5C14.7807 4.07205 14.4117 3.18238 13.7555 2.52622C13.0994 1.87006 12.2097 1.50099 11.2817 1.5ZM8.28174 11C7.68839 11 7.10838 10.8241 6.61503 10.4944C6.12168 10.1648 5.73716 9.69623 5.5101 9.14805C5.28304 8.59987 5.22363 7.99667 5.33938 7.41473C5.45514 6.83279 5.74086 6.29824 6.16042 5.87868C6.57998 5.45912 7.11452 5.1734 7.69647 5.05764C8.27841 4.94189 8.88161 5.0013 9.42979 5.22836C9.97797 5.45542 10.4465 5.83994 10.7761 6.33329C11.1058 6.82664 11.2817 7.40666 11.2817 8C11.2809 8.7954 10.9646 9.55798 10.4021 10.1204C9.83972 10.6828 9.07713 10.9992 8.28174 11ZM12.0317 5C11.8834 5 11.7384 4.95601 11.6151 4.8736C11.4917 4.79119 11.3956 4.67406 11.3388 4.53701C11.2821 4.39997 11.2672 4.24917 11.2961 4.10368C11.3251 3.9582 11.3965 3.82456 11.5014 3.71967C11.6063 3.61478 11.7399 3.54335 11.8854 3.51441C12.0309 3.48547 12.1817 3.50032 12.3188 3.55709C12.4558 3.61386 12.5729 3.70999 12.6553 3.83332C12.7378 3.95666 12.7817 4.10166 12.7817 4.25C12.7817 4.44891 12.7027 4.63968 12.5621 4.78033C12.4214 4.92098 12.2307 5 12.0317 5ZM10.2817 8C10.2817 8.39556 10.1644 8.78224 9.94468 9.11114C9.72491 9.44004 9.41256 9.69638 9.0471 9.84776C8.68165 9.99913 8.27952 10.0387 7.89156 9.96157C7.5036 9.8844 7.14723 9.69392 6.86752 9.41421C6.58782 9.13451 6.39734 8.77814 6.32017 8.39018C6.243 8.00222 6.2826 7.60009 6.43398 7.23463C6.58535 6.86918 6.8417 6.55682 7.1706 6.33706C7.4995 6.1173 7.88618 6 8.28174 6C8.81217 6 9.32088 6.21071 9.69595 6.58579C10.071 6.96086 10.2817 7.46957 10.2817 8Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 my-5 my-lg-0">
            <h5 className="fw-bold mb-3 d-flex"> {t["Download the application"]}</h5>
            <div className="d-flex flex-column justify-content-start align-items-center gap-3">
              <Image src={googlePlay} alt="download app for android" priority />
              <Image src={appStore} alt="download app for ios" priority />
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 pe-lg-0">
            <h5 className="fw-bold mb-3"> {t["Website Map"]}</h5>
            <div className="d-flex justify-content-start align-items-center gap-4">
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                <a href="#home">  {t["Home"]}
</a>
                <a href="#features">  {t["Application Features"]}
</a>
                <a href="#vision-message"> {t["Vision and Goals"]}</a>
                <a href="#download-app"> {t["Features of the iNews application"]}  </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-4 my-5 my-lg-0 px-5 px-lg-0">
            <h5 className="fw-bold mb-3"> {t["Contact with us"]}</h5>
            <a
              href="http://"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                  fill="#292929"
                />
              </svg>
              {t["Baghdad, Karrada, Iraq, 10069"]}
            </a>
            <a
              href="mailto:info@i-news.tv"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.95 5.25H5.55C4.56 5.25 3.759 6.09375 3.759 7.125L3.75 18.375C3.75 19.4062 4.56 20.25 5.55 20.25H19.95C20.94 20.25 21.75 19.4062 21.75 18.375V7.125C21.75 6.09375 20.94 5.25 19.95 5.25ZM19.95 9L12.75 13.6875L5.55 9V7.125L12.75 11.8125L19.95 7.125V9Z"
                  fill="#292929"
                />
              </svg>
              info@i-news.tv
            </a>
            <a
              href="tel:+9647730817679"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M13.952 11.5476L13.4464 12.0273C13.4464 12.0273 12.2431 13.1666 8.95978 10.0557C5.67647 6.94486 6.87979 5.80555 6.87979 5.80555L7.19757 5.50273C7.98312 4.75943 8.05756 3.56507 7.37201 2.69259L5.97202 0.910574C5.12314 -0.169435 3.48426 -0.312377 2.51205 0.608807L0.767613 2.26059C0.286505 2.718 -0.0357153 3.30883 0.00317331 3.9653C0.103173 5.64567 0.900945 9.25947 5.3498 13.4757C10.0687 17.9461 14.4964 18.124 16.3064 17.9631C16.8797 17.9122 17.3775 17.6348 17.7786 17.2536L19.3564 15.7586C20.423 14.7495 20.123 13.0183 18.7586 12.3121L16.6364 11.212C15.7408 10.7482 14.652 10.8848 13.952 11.5476Z"
                  fill="#292929"
                />
              </svg>
              +964 773 081 7679
            </a>
          </div>
        </div>
      </div>
      <div
        className="copy-right mt-4 py-4 text-center"
        style={{
          borderTop: "1px solid #D2D2D2",
        }}
      >
        <p>{t["All rights reserved © 2023 iNews Satellite Network"]}</p>
      </div>
    </footer>
  );
};

export default Footer;
