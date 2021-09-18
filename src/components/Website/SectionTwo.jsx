import "./Website.scss";

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <h1>What You Get?</h1>
      <div className="sectionTwoWrapper">
        <div className="iconContainerWrapper">
          <div className="iconContainer up">
            <div className="iconTextContainer">
              <div></div>
              <img src="/assets/ExpertLedCourses.svg" />
              <span>Expert-Led Courses</span>
            </div>
          </div>
          <div className="iconContainer down">
            <div className="iconTextContainer">
              <div></div>
              <img src="/assets/ProjectsandQuizzes.svg" className="imgDown1" />
              <span>Projects & Quizzes</span>
            </div>
          </div>
          <div className="iconContainer up">
            <div className="iconTextContainer">
              <div></div>
              <img src="/assets/ActiveDiscussionForum.svg" />
              <span>Active Discussion Forum</span>
            </div>
          </div>
          <div className="iconContainer down">
            <div className="iconTextContainer">
              <div></div>
              <img
                src="/assets/ProfessionalReviewing.svg"
                className="imgDown2"
              />
              <span>Professional Reviewing</span>
            </div>
          </div>
          <div className="iconContainer up">
            <div className="iconTextContainer">
              <div></div>
              <img src="/assets/VerifiedCreativeJobs.svg" />
              <span>Verified Creative Jobs</span>
            </div>
          </div>
        </div>
        <div className="premiereProBasics__Container">
          <div className="sectionTwoGradient__Circle">
            <div className="Circle1"></div>
            <div className="Circle2"></div>
            <div className="Circle3"></div>
          </div>
          <div className="sectionTwoGradient">
            <img src="assets/Path306.svg" className="imgOne" />
            <img src="assets/Path306.svg" className="imgTwo" />
            <img src="assets/Path306.svg" className="imgThree" />
            <img src="assets/PremierePro.svg" className="imgFour" />
          </div>
          <div className="premiereProBasics">
            <h1>FREE Premiere Pro Basics</h1>
            <p>
              We provide you with a complete introduction to video creation and
              its techniques at ₹0
            </p>
            <a className="linkHomePage free">Get Started for FREE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
