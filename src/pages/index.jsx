import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home/HomeSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import ChannelVisionSection from "@/components/ChannelVision/ChannelVisionSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer";
import Phones from "@/components/Phones";
import SocialMediaIcons from "@/components/Utilities/SocialMediaIcons";
import FollowUs from "@/components/FollowUs";
import { useEffect, useState } from "react";
// import DownloadModal from "@/components/DownloadModal";

const Home = () => {
  const [show, setShow] = useState(true);
  ;
  const [language, setLanguage] = useState('en'); // Default language is English
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Fetch language from localStorage on initial load
    const storedLanguage = localStorage.getItem('preferredLanguage');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []); // Run only once on component mount


  return (
    <div dir={direction} className={direction}>
      <Navbar />
      <HomeSection />
      <Phones />
      <FeaturesSection />
      <ChannelVisionSection />
      <DownloadAppSection />
      <Footer />
      <SocialMediaIcons />
      {show && <FollowUs setShow={setShow} />}
      {/* {show && <DownloadModal setShow={setShow} />} */}
    </div>
  );
};

export default Home;
