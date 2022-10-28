import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Testimonials.scss";

const testimonials = [
  {
    icon: "audemars_piguet.jpg",
    title: "DANIEL GRGORINIC, FINANCE & OPERATIONS DIRECTOR",
    subTitle: "AUDEMARS PIGUET",
    description:
      "Bottom Line Concepts has been an amazing partner who has helped with cost savings as well as tracking down funds which belong to us. Even with our thorough review of vendors and relationships they have been able to shed light in areas where we thought we could not improve any further. They have an extremely professional and reliable team that is always ready to help. Looking forward to building the relationship further and finding additional cost savings.",
  },
  {
    icon: "red_sox.jpg",
    title: "TIM ZUE, CFO",
    subTitle: "BOSTON REDSOX",
    description:
      "Bottom Line Concepts has been helping us identify cost savings in a number of different areas and in a short amount of time has already identified six figure savings. Their staff members have been great to work with and have made the process seamless and easy, requiring only a limited amount of time and energy from our internal staff to manage the process. They have been a great partner of the Boston Red Sox and we are very pleased with their services.",
  },
  {
    icon: "college_hunks.jpg",
    title: "COLLEGE H.U.N.K.S. HAULING JUNK & MOVING ",
    subTitle: "TRAVIS MELLISH",
    description:
      "The Government Programs that are part of the Cares Act can be very daunting and confusing to understand. Our franchisees were getting a lot of mixed messages and we were looking for a firm that could help educate them and guide them through the process. Bottom Line was extremely patient and diligent working individually with most of our franchisees to maximize their money during the pandemic. They were a great partner and we look forward to a long-lasting relationship.",
  },
  {
    icon: "dominos.jpg",
    title: "DAVID BRANDON, CHAIRMAN OF THE BOARD",
    subTitle: "DOMINO'S PIZZA, INC.",
    description:
      "Bottom Line Concepts has terrific leadership and fulfills its promise to add value by contributing to the bottom line of your organization. They promised us positive results and delivered on their promise! There are very few no risk/all reward opportunities available today in the business world. Bottom Line Concepts offers such a proposition!",
  },
  {
    icon: "nobu.jpg",
    title: "JOHN KENDRICK, CFO",
    subTitle: "NOBU RESTAURANTS",
    description:
      "We have worked with Bottom Line on a number of savings and refunds projects. Each of their programs required very little time and effort on our side, while delivering great results. Their team has always been courteous and attentive to our needs. Whenever we have needed something, they have gotten back to us right away. After all these years of working with them, we’re happy that we hired them.",
  },
  {
    icon: "martha_living.jpg",
    title: "KENNETH P. WEST, CFO ",
    subTitle: "MARTHA STEWART LIVING OMNIMEDIA, INC.",
    description:
      "We engaged the services of Bottom Line to assist us squeeze savings out of certain expense items – and they were successful in areas where we had no such awareness. While they scoured for additional savings opportunities, we initiated a major restructuring – and Bottom Line was both flexible and understanding of the impact that had on some of the savings’ opportunities that they were approaching. I highly recommend their services.",
  },
  {
    icon: "gnc.jpg",
    title: "TED SHMIT, SR. DIRECTOR FINANCIAL SHARED SERVICES",
    subTitle: "GNC HOLDINGS, LLC",
    description:
      "GNC started their partnership with Bottom Line Concepts in late 2019 with a simple call from the CEO and founder of the company, Josh Fox. The staff at Bottom Line Concepts made the contract and onboarding process easy. Since late 2019, Bottom Line Concepts has been able to recover a substantial amount of unclaimed property for GNC. GNC continues to explore additional opportunities with Bottom Line Concepts and I would like to thank them for their efforts and great partnership.",
  },
  {
    icon: "milwaukee_bucks.jpg",
    title: "MARC LASRY, OWNER",
    subTitle: "MILWAUKEE BUCKS",
    description:
      "When my firm invests in companies, we do our best internally to help those companies grow and become more profitable. We discovered that collaborating with Bottom Line enhanced that process for us. Each dollar saved, allows us to show a higher return to our investors over time. Bottom Line has worked with us on a number of our portfolio companies, in addition to our own internal costs. We continue to be impressed by the innovative ideas they share with us.",
  },
  {
    icon: "rolex.jpg",
    title: "MARK W. GOLDBERG, CFO",
    subTitle: "ROLEX WATCH U.S.A.",
    description:
      "We engaged Bottom Line Concepts to take an independent look at a few of our expense categories. In certain areas, we were pleased with the steps we had taken internally to achieve some level of cost savings on our own. In other areas, Bottom Line Concepts opened our eyes to creative solutions we never could have envisioned on our own. I would like to take this opportunity to recognize the efforts, and more importantly the results obtained by Bottom Line Concepts in working with Rolex. It is safe to say that their dedication, professionalism and most importantly the results obtained exceeded our expectations.",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    onMove: false,
    items: 3,
  },
  extraextralarge: {
    breakpoint: { max: 1920, min: 1024 },
    items: 3,
    onMove: false,
  },
  large: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  small: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Testimonial = ({ testimonial }) => {
  const { icon, title, subTitle, description } = testimonial;

  return (
    <div className="flex flex-col w-full px-4 pb-12">
      <div className="relative flex justify-center">
        <img
          className="w-36 h-36 object-contain"
          src={`./assets/images/${icon}`}
          alt="logo"
        />
      </div>
      <div className="block">
        <h4 className="font-bold text-[#333333] pb-3">{title}</h4>
        <h6 className="text-sm pb-3">{subTitle}</h6>
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      {" "}
      <div className="mx-auto w-[80%] max-w-6xl">
        <h1 className="text-2xl font-bold text-[#147144] mb-5">Testimonials</h1>
        <div className="gap-6">
          <Carousel
            responsive={responsive}
            infinite={true}
            draggable={true}
            autoPlaySpeed={3000}
            arrows={true}
            showDots={true}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <Testimonial key={"testimonial_" + index} testimonial={testimonial} />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
