import React from 'react';
import Navbar from '../../components/Navbar';
import "./HomeStyles.css";
import hk from "../../images/hk.png"
import Skillbar from "../../components/Skillbar"
import { ProjectCard, ProjectData } from '../../components/Project';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { FaMusic } from "react-icons/fa";

const Home = () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
window.onload = (event) => {
  console.log(event)

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


  return (
    <div className='complete_page'>
      <div>
      <div className='col_pres'>
        <Navbar />
        <div className='pres'>
          <h2>HELLO</h2>
          <p>I'm Theo, a student .</p>
        </div>

      </div>
      <div className='about' id='about'>
        <div className='about_title'>
          <h2>ABOUT ME</h2>
        </div>
        <div className='col_about'>
          <div className='about_body'>

          <div className='col_1'>
            <div className='contact_body'>
              <div  className='contact_title'>
                <h4>Feel free to contact me</h4>
              </div>
              
              <div className='contact_body_inside'>
                <div className='logo_list'>
                  <a href='https://fr.linkedin.com/'>
                    <FaLinkedin className='logo_item'/>
                  </a>
                  <a href='https://github.com/Rhapsodiew'>
                    <FaGithub className='logo_item' />
                  </a>
                </div>
                
                <div className='mail'>
                  <p>semavo_t@etna-alternance.net </p>
                </div>
              </div>
            </div>

            <div className='fav_about'>
              <h4 className='fav_about_title'>Favorite Language</h4>
              <div className='fav_about_inside'>
                <SiTypescript className='logo_item'/>
                <FaPython className='logo_item'/>
                <FaGolang className='logo_item'/>
                <SiJavascript className='logo_item'/>
              </div>
            </div>

            <div className='hobby_about'>
              <h4 className='hobby_about_title'>Hobby</h4>
              <div className='hobby_about_inside'>

                <div className='hobby_about_inside_body'>
                  <p className='hobby_subtitle'>Music</p>
                  <div className='hobby_about_inside_detail'>
                    <p className='hobby_about_inside_detail_1'>Play instrument</p>
                    <p className='hobby_about_inside_detail_2'>Compose Music</p>
                  </div>
                </div>

                <div className='hobby_about_inside_body'>
                  <p className='hobby_subtitle'>Game</p>
                  <div className='hobby_about_inside_detail'>
                    <p className='hobby_about_inside_detail_1'>Play Competitively</p>
                    <p className='hobby_about_inside_detail_2'>Discover new things</p>
                  </div>
                </div>

                <div className='hobby_about_inside_body'>
                  <p className='hobby_subtitle'>Language</p>
                  <div className='hobby_about_inside_detail'>
                    <p className='hobby_about_inside_detail_1'>Learn Language</p>
                    <p className='hobby_about_inside_detail_2'>Currently learning japanese</p>
                  </div>
                </div>

                <div className='hobby_about_inside_body'>
                  <p className='hobby_subtitle'>Other</p>
                  <div className='hobby_about_inside_detail'>
                    <p className='hobby_about_inside_detail_1'>Enrich my insight</p>
                    <p className='hobby_about_inside_detail_2'>Loves learning new things of any kinds</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className='col_2'>
            <div className='placeholder'>

            </div>
            <div className='about_imgzone'>
              <img src={hk} alt="" className='about_img'/>
            </div>
          </div>

          <div className='col_3'>
            <div className='text_anime_zone'>
              <h4 className='text_anime'><span id='typewriter'></span><span id='cursor'>|</span></h4> 
            </div>

            <div className='experience'>
              <h4 className='experience_title'>Experience</h4>
              <h6 className='experience_subtitle'>No real experience yet, but waiting for new one</h6>
              <div className='experience_inside'>

              <div className='experience_inside_body'>
                  <p className='experience_date'>2023 - 2024</p>
                  <div className='experience_info'>
                    <p className='experience_info_name'>Worked as a handler</p>
                    <p className='experience_info_detail'>Interim</p>
                  </div>   
                </div>

              </div>
            </div>

            <div className='etude'>
              <h4 className='etude_title'>Studies</h4>
              <div className='etude_inside'>

                <div className='etude_inside_body'>
                  <p className='etude_date'>2024 - Now</p>
                  <div className='etude_info'>
                    <p className='etude_info_name'>Start of my Journey</p>
                    <p className='etude_info_detail'>@Etna</p>
                  </div>   
                </div>

                <div className='etude_inside_body'>
                  <p className='etude_date'>2022 - 2023</p>
                  <div className='etude_info'>
                    <p className='etude_info_name'>Joined an Art School</p>
                    <p className='etude_info_detail'>@New3dge</p>
                  </div>   
                </div>

                <div className='etude_inside_body'>
                  <p className='etude_date'>2021 - 2022</p>
                  <div className='etude_info'>
                    <p className='etude_info_name'>High School: The end</p>
                    <p className='etude_info_detail'>@Crepys-en-valois</p>
                  </div>   
                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>


      <div className='competence' id='skills'>
        <div className='competence_title'>
          <h2>COMPENTENCE</h2>
        </div>
        <div className='col_competence'>
          <div  className='competence_body'>
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