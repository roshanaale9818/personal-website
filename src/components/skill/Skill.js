import React from "react";
const Skill = ()=>{

    return <React.Fragment>
              <section className="myskills-section bg-color-1 site-section" id="skills-wrap">
                    <div className="container">
                        <div className="myskills-heading txt-center">
                            <div className="heading-wrap">
                                <h1 className="heading-title">My Skills</h1>
                            </div>
                            <div className="heading-paragraph">
                                <p>
                                    Skills that I have are
                                </p>
                            </div>
                            <div className="heading-line">
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-md-6 col-12">
                                <div className="sub-heading">
                                    <h2> Technical Skills</h2>
                                </div>
                                <div className="skill-list">
                                    <ul>
                                        <li>Typescript</li>
                                        <li>Angular</li>
                                        <li>Javascript</li>
                                        <li>HTML , CSS</li>
                                        <li>Ionic 4</li>
                                        <li>Object Oriented Programming</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="sub-heading">
                                    <h2>Addittional Skills</h2>
                                </div>
                                <div className="skill-list">
                                    <ul>
                                        <li>Keen to learn new technology</li>
                                        <li>Quick Learner</li>
                                        <li>Teamwork and leadership</li>
                                        <li>Active Listening</li>
                                        <li>Problem Solving</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </React.Fragment>
}
export {Skill};