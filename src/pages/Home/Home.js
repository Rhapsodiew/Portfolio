import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import addLoadEvent from "../../components/func"
import "./HomeStyles.css";
import hk from "../../images/hk.png"
import Skillbar from "../../components/Skillbar"
import { ProjectCard, ProjectData } from '../../components/Project';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

const Home = () => {

  window.onresize = function(event) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log('xy',w,h)
 
};

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
  function autowritter(){
    console.log("a")
    const phrases = [
      "Hello my name is Theo, I'm 20 years old and I'm a student at ETNA.",
      "I'm interested in programming and I'm learning how to code with React.",
      "I speak mostly french and i'm quite fluent in english.",
      ]
  
    const el = document.getElementById("typewriter")
    let timer = 35;
    let index = 0;
    const write = async () => {
      while (true) {
        let word = phrases[index];
  
        for (let i = 0; i< word.length; i++){
        el.innerText = word.substring(0,i+1)
        await sleep(timer);
        }
    
        await sleep(timer*30)
    
        for (let i = word.length; i> 0; i--){
        el.innerText = word.substring(0,i-1)
        await sleep(timer);
        }
        await sleep(timer * 20);
    
        if (index === phrases.length -1) {
        index = 0 
        } else {
        index++
        }
      }
    }
    write();
  }
  addLoadEvent(autowritter)


  return (
    <div className='complete-page'>
      <div>
        <div className='pres'>
          <Navbar />
          <div className='pres-content'>
            <h2>HELLO</h2>
            <p>I'm Theo, a student .</p>
          </div>
        </div>

        <div className='about' id='about'>
          <div className='about-title'>
            <h2>ABOUT ME</h2>
          </div>
          <div className='about-content'>
            <div className='about-body'>

            <div className='col-1'>
              <div className='contact'>
                <div  className='contact-title'>
                  <h4>Feel free to contact me</h4>
                </div>     
                <div className='contact-content'>
                  <div className='logo-list'>
                    <a href='https://fr.linkedin.com/'>
                      <FaLinkedin className='contact-logo'/>
                    </a>
                    <a href='https://github.com/Rhapsodiew'>
                      <FaGithub className='contact-logo' />
                    </a>
                  </div>
                  <div className='mail'>
                    <p>semavo_t@etna-alternance.net </p>
                  </div>
                </div>
              </div>

              <div className='fav'>
                <h4 className='fav-title'>Favorite Language</h4>
                <div className='fav-content'>
                  <SiTypescript className='fav-logo'/>
                  <FaPython className='fav-logo'/>
                  <FaGolang className='fav-logo'/>
                  <SiJavascript className='fav-logo'/>
                </div>
              </div>

              <div className='hobby'>
                <h4 className='hobby-title'>Hobby</h4>
                <div className='hobby-content'>

                  <div className='hobby-section'>
                    <p className='hobby-section-title'>Music</p>
                    <div className='hobby-section-detail'>
                      <p className='hobby-section-detail-pri'>Play instrument</p>
                      <p className='hobby-section-detail-sub'>Compose Music</p>
                    </div>
                  </div>

                  <div className='hobby-section'>
                    <p className='hobby-section-title'>Game</p>
                    <div className='hobby-section-detail'>
                      <p className='hobby-section-detail-pri'>Play Competitively</p>
                      <p className='hobby-section-detail-sub'>Discover new things</p>
                    </div>
                  </div>

                  <div className='hobby-section'>
                    <p className='hobby-section-title'>Language</p>
                    <div className='hobby-section-detail'>
                      <p className='hobby-section-detail-pri'>Learn Language</p>
                      <p className='hobby-section-detail-sub'>Currently learning japanese</p>
                    </div>
                  </div>

                  <div className='hobby-section'>
                    <p className='hobby-section-title'>Other</p>
                    <div className='hobby-section-detail'>
                      <p className='hobby-section-detail-pri'>Enrich my insight</p>
                      <p className='hobby-section-detail-sub'>Loves learning new things of any kinds</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className='col-2'>
              <div className='placeholder'>

              </div>
              <div className='imgprofile'>
                <img src={hk} alt="" className='img'/>
              </div>
            </div>

            <div className='col-3'>
              <div className='textanime'>
                <h4 className='textanime-content'><span id='typewriter'></span><span id='cursor'>|</span></h4> 
              </div>

              <div className='experience'>
                <h4 className='experience-title'>Experience</h4>
                <h6 className='experience-subtitle'>No real experience yet, but waiting for new one</h6>
                <div className='experience-content'>
                  <div className='experience-section'>
                    <p className='experience-date'>2023 - 2024</p>
                    <div className='experience-info'>
                      <p className='experience-info-name'>Worked as a handler</p>
                      <p className='experience-info-detail'>Interim</p>
                    </div>   
                  </div>

                </div>
              </div>

              <div className='etude'>
                <h4 className='etude-title'>Studies</h4>
                <div className='etude-content'>
                  <div className='etude-section'>
                    <p className='etude-date'>2024 - Now</p>
                    <div className='etude-info'>
                      <p className='etude-info-name'>Start of my Journey</p>
                      <p className='etude-info-detail'>@Etna</p>
                    </div>   
                  </div>

                  <div className='etude-section'>
                    <p className='etude-date'>2022 - 2023</p>
                    <div className='etude-info'>
                      <p className='etude-info-name'>Joined an Art School</p>
                      <p className='etude-info-detail'>@New3dge</p>
                    </div>   
                  </div>

                  <div className='etude-section'>
                    <p className='etude-date'>2021 - 2022</p>
                    <div className='etude-info'>
                      <p className='etude-info-name'>High School: The end</p>
                      <p className='etude-info-detail'>@Crepys-en-valois</p>
                    </div>   
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>


        <div className='competence' id='skills'>
          <div className='competence-title'>
            <h2>COMPENTENCE</h2>
          </div>
          <div className='competence-content'>
            <div  className='competence-section'>
              <Skillbar title={"React"} level={"50%"}/>
              <Skillbar title={"Python"} level={"60%"}/>
              <Skillbar title={"Golang"} level={"55%"}/>
              <Skillbar title={"TS/JS"} level={"50%"}/>
              <Skillbar title={"SQL"} level={"55%"}/>
              <Skillbar title={"Html"} level={"40%"}/>
              <Skillbar title={"Css"} level={"45%"}/>
            </div>
          </div>
        </div>


        <div className='project' id='project'>
          <div className='project_title'>
            <h2>PROJECT</h2>
          </div>
          <div className='project_body'>
              {ProjectData.map ((proj) => {
                return (
                  <div key={proj.id}>
                    <ProjectCard title={proj.title} img={proj.img} description={proj.description} git={proj.git}/>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home