import React from 'react';
import Navbar from '../../components/Navbar';
import "./HomeStyles.css";
import hk from "../../images/hk.png"
import Skillbar from "../../components/Skillbar"
import { ProjectCard, ProjectData } from '../../components/Project';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Home = () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
window.onload = (event) => {
  console.log(event)

  const phrases = [
    "My name is Theo, I'm 20 years old and I'm a student at ETNA.",
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
    <div>
      <div className='col_pres'>
        <Navbar />
        <div></div>
        <div className='divider'></div>
        <div className='pres'>
          <h2>Hello</h2>
          <p>I'M THEO SEMAVOINE</p>
        </div>

      </div>
      <div className='about' id='about'>
        <div className='about_title'>
          <h2>ABOUT ME</h2>
        </div>
        <div className='col_about'>
          <div className='divider'></div>
          <div className='about_body'>
            <div className='about_imgzone'>
              <img src={hk} alt="" className='about_img'/>
            </div>
            <div>
              <h4><span id='typewriter'></span><span id='cursor'>|</span></h4> 
            </div>
          </div>

        </div>
      </div>

      <div className='competence' id='skills'>
        <div className='competence_title'>
          <h2>COMPENTENCE</h2>
        </div>
        <div className='col_competence'>
          <div className='divider'></div>
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

      <div className='contact' id='contact'>
        <div className='contact_title'>
          <h2>FIND ME ON</h2>
          <h4>Feel free to contact me</h4>
        </div>
        <div className='contact_body'>
          <div className='logo_list'>
            <FaLinkedin className='logo_item'/>
            <FaGithub className='logo_item' />
          </div>
          <div className='mail_etc'>
            <p>semavo_t@etna-alternance.net </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home