import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Website.scss";
import { FaQuoteLeft } from "react-icons/fa";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const SectionFive = () => {
  return (
    <div className="sectionFive">
      <div className="sectionFiveWrapper">
        <h1>What Learners are saying?</h1>

        <AliceCarousel
          autoPlay
          autoPlayInterval="1500"
          infinite
          disableButtonsControls
          responsive={responsive}
        >
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              You have got a gentle tone of voice, and your explanation was
              clear-cut. Very helpful and awesome!
            </p>
            <h4>Nalleswaran</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              It is unlikely to explain Adobe Premiere Pro in a video, but you
              have done it. Awesome! You have explained it in such a way that I
              may not have any doubts anymore. Thank you!
            </p>
            <h4>Veera</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              Excellent! A perfect tutorial! It was very easy to understand.
            </p>
            <h4>Chandru</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              Excellent! A perfect tutorial! It was very easy to understand.
            </p>
            <h4>Chandru</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              Excellent! A perfect tutorial! It was very easy to understand.
            </p>
            <h4>Chandru</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              Excellent! A perfect tutorial! It was very easy to understand.
            </p>
            <h4>Chandru</h4>
          </div>
          <div className="reviewContent">
            <FaQuoteLeft className="reviewIcon" />
            <p>
              Excellent! A perfect tutorial! It was very easy to understand.
            </p>
            <h4>Chandru</h4>
          </div>
        </AliceCarousel>
      </div>
    </div>
  );
};

export default SectionFive;
