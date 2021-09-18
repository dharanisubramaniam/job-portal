import "./Website.scss";

const SectionSix = () => {
  return (
    <div className="sectionSix">
      <div className="sectionSixWrapper">
        <div className="sectionSixContent">
          <h1>
            Are You Looking for a <span>Creative Job?</span>
          </h1>
          <p>
            Understand the market and find jobs that suit your interest, even
            while learning.
          </p>
          <a className="linkHomePage experts">Explore Opportunities</a>
        </div>
        <div className="imgWrapper">
          <img src="/assets/Jobs.svg" />
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
