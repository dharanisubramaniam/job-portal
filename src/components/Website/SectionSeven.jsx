import "./Website.scss";

const SectionSeven = () => {
  return (
    <div className="sectionSeven">
      <div className="sectionSevenWrapper">
        <div className="sectionSevenGradient__Circle">
          <div className="Circle1"></div>
          <div className="Circle2"></div>
          <div className="Circle3"></div>
          <div className="Circle4"></div>
        </div>
        <div className="sectionSevenGradient">
          <img src="assets/Path306.svg" className="imgOne" />
          <img src="assets/Path306.svg" className="imgTwo" />
        </div>
        <div className="sectionSevenContent">
          <h2>
            Begin the Journey to Convert Your Passion Into Profession Today!
          </h2>
          <div className="linkWrapper">
            <div>
              <a className="linkHomePage free">Access FREE Basics</a>
              <a className="linkHomePage experts">View Courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
