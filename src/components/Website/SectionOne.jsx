import "./Website.scss";

const SectionOne = () => {
  return (
    <div className="sectionOne">
      <div className="sectionOneGradient__Green">
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
      </div>
      <div className="sectionOneGradient">
        <img src="assets/Circle1.svg" className="imgOne" />
        <img src="assets/Path305.svg" className="imgTwo" />
        <img src="assets/Circle3.svg" className="imgThree" />
        <img src="assets/Circle2.svg" className="imgFour" />
        <img src="assets/Path305.svg" className="imgFive" />
        <img src="assets/SemiCircle.svg" className="imgSix" />
      </div>
      <div className="sectionOneMobile__GradientCirle">
        <div className="Circle1"></div>
      </div>
      <div className="sectionOneMobile__Gradient">
        <img src="assets/Path301.svg" className="imgOne" />
        <img src="assets/Path301.svg" className="imgTwo" />
      </div>
      <div className="sectionOneWrapper">
        <div className="wrapper">
          <div className="textContent">
            <h1>
              Join hundreds of Learners in Mastering{" "}
              <span>Animation, Editing and VFX</span>&nbsp;
            </h1>
            <p>
              Premium content for Designers and Content Creators Upgrade your
              Creative Skills and become Job-Ready
            </p>
            <div className="linkHomeWrapper">
              <a className="linkHomePage free">Get Started for FREE</a>
              <a className="linkHomePage experts">Learn from Experts!</a>
            </div>
          </div>
          <div className="videoContent">
            <video
              src="/assets/showreel.mp4"
              autoplay="true"
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
