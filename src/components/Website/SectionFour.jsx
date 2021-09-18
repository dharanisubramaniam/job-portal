import "./Website.scss";

const SectionFour = () => {
  return (
    <div className="sectionFour">
      <h1>Featured Courses</h1>
      <div className="sectionFourWrapper">
        <div className="sectionFourGradient__Circle">
          <div className="Circle1"></div>
          <div className="Circle2"></div>
          <div className="Circle3"></div>
          <div className="Circle4"></div>
        </div>

        <div className="courseWrapper">
          <div className="courseContainer">
            <div className="logo">
              <img src="/assets/Course_thumbnail.png" />
            </div>
            <div>
              <h1>
                The Ultimate <span>UI Animation</span> for Beginners
              </h1>
              <p>
                Navigate through the world of After Effects and learn all you
                need to convert your passion for video creation into a
                profession.
              </p>
              <a className="linkHomePage free">Develop Your Skills</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
