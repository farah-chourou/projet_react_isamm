import React, { useEffect, useState } from "react";
import CvUpdt from "../../../services/Cv.service";
import "./Cv.css";

function Cv() {
  const init_cv = {
    bio: "",
    localisation: "",
    linkedIn: "",
    style: 1,
    experiences: [],
    formations: [],
    languages: [],
    hard_skills: [],
    soft_skills: [],
    hobbys: [],
  };
  const [cv, setCv] = useState(init_cv);

  useEffect(() => {
    CvUpdt.GetCvByUser(
      (data) => {
        console.log(data);
        setCv({ ...data });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <div class="paper">
        <div class="part1">
          <div class="img"></div>
          <div>
            <h4>Summary</h4>
            <p>{cv.bio}</p>
            <hr />

            <h4>Language</h4>
            <h5>English - Good</h5>
            <h5>French - Medium</h5>
            <hr />

            <h4>Soft Skills</h4>
            <div class="skill">
              <h5>Problem-Solving</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Creativity</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Communication</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Teamwork</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Management</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Learning</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>
            <hr />

            <h4>Hard - Skills</h4>
            <div class="skill">
              <h5>Html</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Css</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>JavaScript</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Java</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Python</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>
            <hr />

            <h4>Frameworks</h4>
            <div class="skill">
              <h5>React Js</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Node JS</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Jee</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>

            <div class="skill">
              <h5>Spring Boot</h5>
              <div class="rates">
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-1"></span>
                <span class="r-0"></span>
                <span class="r-0"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="part2">
          <div class="header">
            <h2>Ben Echikh Hatem</h2>
            <h2 class="ital">Full Stack Web Developer</h2>

            <p class="info">
              <span class="material-icons icon">mail_outline</span>
              Hatembenechikh782@gmail.com
            </p>

            <p class="info">
              <span class="material-icons icon">phone_iphone</span>
              +216 58 217 529
            </p>
            <br />
            <p class="info">
              <span class="material-icons icon">map</span>
              26 street 4700 hrayreya 3 zohour 4 tunis - 2052
            </p>
            <hr />
          </div>

          <div class="Education">
            <h3>Education</h3>

            <p class="education">
              <span class="material-icons icon">school</span>
              Computer Science Engineering
            </p>

            <p class="university">
              <span class="material-icons icon">location_city</span>
              Institut Superieur Des Arts Et Multimedia Manouba
            </p>

            <p class="university">
              <span class="material-icons icon">event</span>
              2022 - 2024
            </p>

            <br />

            <p class="education">
              <span class="material-icons icon">school</span>
              Fundamental License in Computer Science and Multimedia
            </p>

            <p class="university">
              <span class="material-icons icon">location_city</span>
              Institut Superieur Des Arts Et Multimedia Manouba
            </p>

            <p class="university">
              <span class="material-icons icon">event</span>
              2019 - 2021
            </p>

            <br />

            <p class="education">
              <span class="material-icons icon">school</span>
              bachelor's degree in computer science
            </p>

            <p class="university">
              <span class="material-icons icon">event</span>
              2017 - 2018
            </p>
            <hr />
          </div>

          <div class="Experience">
            <h3>Experience</h3>

            <p class="post">Indigames Club - ISAMM 2018-2019</p>

            <p class="experience">
              Member , Graphic Design And Event Management
            </p>

            <br />

            <p class="post">Microsoft Club - ISAMM 2019-2020</p>

            <p class="experience">Member , Organizing Game Dev Sessions</p>

            <br />

            <p class="post">Orenda Junior Entreprise - ISAMM 2020-2021</p>

            <p class="experience">
              Junior Web Developer : A Part of A team of 4 developers In Order,
              Building An Association Platform
            </p>

            <br />

            <p class="post">Bright Digital Agency 2020-2021</p>

            <p class="experience">
              Final Year Project : Building A Rental Car Managemet Platform
            </p>

            <br />

            <p class="post">Pikoro Agency 2020-2021</p>

            <p class="experience">
              Summer internship : Building An Agency Website
            </p>
          </div>

          {/* 		
				<hr/>

			<div class="Courses">
				<h3>Courses</h3>

				<p class="courses">
					React-Js : Maximilian Schwarzmüller + Codevolution
				</p>
				<p class="courses">
					Node-Js : Code With Mosh
				</p>
				<p class="courses">
					Html + Css : Elzero Web School + Css Tricks
				</p>
				<p class="courses">
					Jee + Java : Isamm
				</p>
				<p class="courses">
					Spring Boot : Isamm + Spring Framework Guru
				</p>

				
			</div> */}
        </div>
      </div>
    </div>
  );
}

export default Cv;
