import CountUp from "react-countup";
import "./OurResults.scss";

const lineConcepts1 = [
  {
    icon: "far fa-user",
    text: "Thorough evaluation regarding your eligibility",
  },
  {
    icon: "far fa-chart-bar",
    text: "Comprehensive analysis of your claim",
  },
  {
    icon: "far fa-file-alt",
    text: "Guidance on the claiming process & documentation",
  },
];

const lineConcepts2 = [
  {
    icon: "far fa-check-circle",
    text: "Specific program expertise that a regular CPA or payroll processor might not be well-versed in",
  },
  {
    icon: "far fa-money-bill-alt",
    text: "A fast & smooth end to end process from eligibility to claiming & receiving funds",
  },
];

const OurResults = () => {
  return (
    <div className="pt-12 md:pt-16;">
      <div className="mx-auto text-center w-[80%] max-w-6xl">
        <h2 className="text-[38px] text-[#478A6B] font-medium">
          Our <strong>Results</strong>
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-3 pt-8">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl lg:text-6xl font-bold text-[#7FC241]">
              <CountUp end={12442} duration={2} separator="," decimal="," />{" "}
            </span>
            <span className="text-lg text-[#181818] leading-10 font-medium">
              BUSINESSES ENROLLED
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl lg:text-6xl font-bold text-[#7FC241]">
              <CountUp
                end={2189700000}
                duration={2}
                prefix="$"
                separator=","
                decimal=","
              />{" "}
            </span>
            <span className="text-lg text-[#181818] leading-10 font-medium">
              CREDITS RECOVERED
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl lg:text-6xl font-bold text-[#7FC241]">
              <CountUp end={234193} duration={2} separator="," decimal="," />{" "}
            </span>
            <span className="text-lg text-[#181818] leading-10 font-medium">
              EMPLOYEES QUALIFIED
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center w-[80%] max-w-6xl pt-12 md:pt-16">
        <h2 className="text-[38px] text-[#478A6B] font-medium pt-8 mb-5">
          Find Out For Free! Even If <strong>You Got Denied</strong>
        </h2>
        <p className="text-[#555555] text-lg text-center mb-5 font-medium tracking-wide">
          Founded in 2009, Bottom Line is North America’s leading
          contingency-based consulting firm. Bottom Line Concepts have worked
          with over 10,000 clients & have successfully brought in over $2.5
          Billion Dollars in Savings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {lineConcepts1.map((item, index) => {
            return (
              <div
                key={`lineConcepts1-${index}`}
                className="flex bg-[#006534] px-5 py-4 md:justify-between items-center border-b-4 border-[#7FC241] border-solid gap-4 m-1"
              >
                <span className="bg-white rounded-full text-2xl">
                  <i
                    className={`${item.icon} flex justify-center items-center w-12 h-12 text-[#006534]`}
                  ></i>
                </span>
                <h5 className="text-white text-lg font-semibold tracking-wider text-left">
                  {item.text}
                </h5>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {lineConcepts2.map((item, index) => {
            return (
              <div
                key={`lineConcepts2-${index}`}
                className="flex bg-[#006534] px-5 py-4 md:justify-between items-center border-b-4 border-[#7FC241] border-solid gap-4 m-1"
              >
                <span className="bg-white rounded-full text-2xl">
                  <i
                    className={`${item.icon} flex justify-center items-center w-12 h-12 text-[#006534]`}
                  ></i>
                </span>
                <h5 className="text-white text-lg font-semibold tracking-wider text-left">
                  {item.text}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurResults;
