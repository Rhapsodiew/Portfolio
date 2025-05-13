import "./ProjectStyles.css";
import taskforge from "../images/project/taskforge.png";
import franceinter from "../images/project/franceinter.png";
import primegenerator from "../images/project/prime_generator.png";
import rpg from "../images/project/rpg.png";
import thermos from "../images/project/thermos2.png";
import flix from "../images/project/flix5.png";
import intervengo from "../images/project/intervengo.png";
import clicker_game from "../images/project/clicker_game.png";
import discordbot_rodolphe from "../images/project/discordbot_rodolphe.png";
import snake from "../images/project/snake.png"
import tetris from "../images/project/tetris.png"
import composemonvote from "../images/project/compose_mon_vote.png"

const Techno = {
    React: "React",
    TS: "TypeScript",
    JS: "JavaScript",
    Python: "Python",
    Go: "Golang",
    NestJs: "Nest.js",
    NextJs: "Next.js",
    NodeJs: "Node.js",
    Html: "HTML",
    Css: "CSS",
    FastApi: "FastApi",
    Postgre: "PostgreSQL",
    Mariadb: "MariaDB",
    Git: "Git",
    Arduino: "Arduino",
    Unreal: "Unreal Engine",
    Docker: "Docker"
}

const ProjectData = [
    {
        id: 1,
        title: "FranceInter",
        img: franceinter,
        description: "Program that checks if the room's occupancy limit is respected and plays an audio message in French along with a translated version.",
        // "Programme qui verifie si le nombre de personne dans la salle est respecté, un message audio est diffusé en francais et la langue traduit."
        git: "https://github.com/Rhapsodiew/FranceInter",
        techno: [Techno.Python, Techno.FastApi, Techno.NextJs]
    },
    {
        id: 2,
        title: "TaskForge",
        img: taskforge,
        description: "Task manager with progress tracking, built with NestJs, NextJs, and MariaDB.",
        git: "https://github.com/Rhapsodiew/TaskForge",
        techno: [Techno.NestJs, Techno.NextJs, Techno.Mariadb]
    },
    {
        id: 3,
        title: "EtnaFlix",
        img: flix,
        description: "React Native mobile app to explore a movie catalog via the TMDB API.",
        git: "https://github.com/Rhapsodiew/EtnaFlix",
        techno: [Techno.React]
    },
    {
        id: 4,
        title: "ThermOS",
        img: thermos,
        description: "Arduino project displaying temperature and humidity on an LCD screen with visual animations.",
        git: "https://github.com/Rhapsodiew/ThermOs",
        techno: [Techno.Arduino]
    },
    {   
        id: 5,
        title: "RPG",
        img: rpg,
        description: "Zelda-inspired game developed in Golang, featuring various mods for an enhanced experience.",
        git: "https://github.com/Rhapsodiew/My_RPG",
        techno: [Techno.Go]
    },
    {
        id: 6,
        title: "Prime Generator",
        img: primegenerator,
        description: "One Piece-style bounty poster generator in PDF, built with Golang.",
        git: "https://github.com/Rhapsodiew/PrimeGenerator",
        techno: [Techno.Go]
    },
    {
        id: 7,
        title: "VR Blueprint",
        img: "",
        description: "First VR game created using Unreal Engine 5.",
        git: "https://github.com/Rhapsodiew/VR-Blueprint",
        techno: [Techno.Unreal]
    },
    {
        id: 8,
        title: "IntervenGo",
        img: intervengo,
        description: "Web app built with NestJs, React, and PostgreSQL for managing interventions and generating PDF reports.",
        git: "https://github.com/Rhapsodiew/IntervenGo",
        techno: [Techno.Postgre, Techno.NestJs, Techno.React]
    },
    {
      id: 9,
      title: "ClickerGame",
      img: clicker_game,
      description: "Clicker game in NestJs, React, and PostgreSQL where you earn points by clicking and buy upgrades.",
      git: "https://github.com/Rhapsodiew/ClickerGame",
      techno: [Techno.NestJs, Techno.React, Techno.Postgre]
    },
    {
      id: 10,
      title: "DiscordBot Rodolphe",
      img: discordbot_rodolphe,
      description: "JavaScript Discord bot retrieving user info from the ETNA Intranet.",
      git: "https://github.com/Rhapsodiew/DiscordBot_Rodolphe",
      techno: [Techno.JS]
    },
    {
      id: 11,
      title: "Snake",
      img: snake,
      description: "A basic Python implementation of the classic Snake game",
      git: "https://github.com/Rhapsodiew/Snake",
      techno: [Techno.Python]
    },
    {
      id: 12,
      title: "Tetris",
      img: tetris,
      description: "A simple Python version of the classic Tetris game where the player arranges falling blocks to complete lines and score points.",
      git: "https://github.com/Rhapsodiew/Tetris",
      techno: [Techno.Python]
    },
    {
      id: 13,
      title: "Compose Mon Vote",
      img: composemonvote,
      description: "A containerized web application designed to manage and visualize polls in real-time, using Docker and Docker Compose to enable communication between different services.",
      git: "https://github.com/Rhapsodiew/ComposeMonVote",
      techno: [Techno.Docker]
    }
];

const ProjectCard = ({ title, img, description, git, techno }) => {
    return (
      <a href={git} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">        
          <div className="card-image" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.9) 100%), url(${img})` }}></div>
          <div className="card-overlay">
            <div className="card-content">
              <h4 className="card-title">{title}</h4>
              <p className="card-description">{description}</p>
              <div className="card-tech">
                {techno.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="learn-more-container">
                <p className="learn-more">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
};

export {ProjectData, ProjectCard};