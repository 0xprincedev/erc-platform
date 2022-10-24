import { useEffect, useState } from "react";
import Header from "components/layout/header";
import Footer from "components/layout/footer";
import Banner from "components/banner";
import OurResults from "components/our_results";
import HowItWorks from "components/how_it_works";
import WhyUs from "components/why_us";
import GetStarted from "components/get_started";
import Faq from "components/faq";
import ContactUs from "components/contact_us";
import Testimonials from "components/testimonials";
import BottomLineConcepts from "components/bottom_line_concepts";
import SubmissionForm from "components/submission_form";
import Abouterc from "components/about_erc";

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window?.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    let lastScrollTop = 0;
    const currentScrollTop = window?.pageYOffset;

    if (!visible && currentScrollTop > lastScrollTop) {
      setVisible(true);
    } else if (currentScrollTop === 0) {
      setVisible(false);
    }
    lastScrollTop = currentScrollTop;
  };

  return (
    <>
      <Header />
      <Banner />
      <OurResults />
      <HowItWorks />
      <Abouterc />
      <WhyUs />
      <GetStarted />
      <Faq />
      <ContactUs />
      <Testimonials />
      <BottomLineConcepts />
      <SubmissionForm />
      <Footer visible={visible} />
      
    </>
  );
};

export default Home;
