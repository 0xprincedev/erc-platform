import ReactPlayer from "react-player";
import "./HowItWorks.scss";

const HowItWorks = () => {
  return (
    <div id="howItWorks" className="how-it-works">
      <div className="mx-auto text-center w-[80%] max-w-6xl">
        <h1 className="text-[38px] text-[#478A6B] font-medium">
          How It <strong>Works</strong>
        </h1>
        <p className="text-[18px] text-[#555555] font-medium tracking-wide">
          Watch our video to understand more about the ERC program and how we
          can help your business.
        </p>
      </div>
      <div className="video-box w-[80%] max-w-6xl">
        {/* <iframe
          loading="lazy"
          title="Employee Retention Credit Program (ERC)"
          src="https://player.vimeo.com/video/736302036?autoplay=1&amp;amp;h=12d950bb2f&amp;dnt=1&amp;app_id=122963"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullscreen=""
          name="fitvid0"
        ></iframe> */}

        <div className="player-wrapper">
          <ReactPlayer
            url="https://player.vimeo.com/video/736302036"
            loop={true}
            playing={false}
            controls={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
