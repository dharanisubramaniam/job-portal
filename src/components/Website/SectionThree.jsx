import "./Website.scss";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <h1>Why Filmy Effects?</h1>
      <div className="sectionThreeWrapper">
        <div className="sectionThreeGradient__Circle">
          <div className="Circle1"></div>
          <div className="Circle2"></div>
          <div className="Circle3"></div>
          <div className="Circle4"></div>
        </div>
        <div className="sectionThreeGradient">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="cardWrapper">
          <div className="cardContainer">
            <div className="cardContainerWrapper Left">
              <div className="card">
                <div>
                  <h2>
                    Industry-Standard Learning Materials{" "}
                    <CheckCircleOutlineIcon className="tickIcon" />
                  </h2>
                </div>
                <p>
                  Multiple creative professionals have come together to craft
                  the courses of Filmy Effects. They are in simple languages and
                  formats, which a beginner with no prior experience can easily
                  comprehend.
                </p>
              </div>

              <div className="card">
                <div>
                  <h2>
                    Active Discussion Forum{" "}
                    <CheckCircleOutlineIcon className="tickIcon" />
                  </h2>
                </div>

                <p>
                  We have multiple discussion forums, including Facebook, where
                  hundreds of active participants discuss, debate, and learn up
                  to date trends and techniques of video creation.
                </p>
              </div>
            </div>
          </div>

          <div className="cardContainer Right">
            <div className="cardContainerWrapper Right">
              <div className="card">
                <div>
                  <h2>
                    Project Reviews by Professionals{" "}
                    <CheckCircleOutlineIcon className="tickIcon" />
                  </h2>
                </div>

                <p>
                  While you are learning, keep a tab on creative job
                  openings—full-time and part-time—at top companies and
                  startups. A dedicated team of Filmy Effects manually verifies
                  these jobs at regular intervals.
                </p>
              </div>

              <div className="card">
                <div>
                  <h2>
                    Verified Creative Jobs{" "}
                    <CheckCircleOutlineIcon className="tickIcon" />
                  </h2>
                </div>

                <p>
                  While you are learning, keep a tab on creative job
                  openings—full-time and part-time—at top companies and
                  startups. A dedicated team of Filmy Effects manually verifies
                  these jobs at regular intervals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
