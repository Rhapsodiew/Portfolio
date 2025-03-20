import "./ProjectStyles.css";
import taskforge from "../images/project/taskforge.png";
import franceinter from "../images/project/franceinter.png";
import primegenerator from "../images/project/prime_generator.png";
import rpg from "../images/project/rpg.png";
import thermos from "../images/project/thermos2.png";
import flix from "../images/project/flix5.png";
import intervengo from "../images/project/intervengo.png";

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
    Unreal: "Unreal Engine"
}

const ProjectData = [
    {
        id: 1,
        title: "FranceInter",
        img: franceinter,
        description: "Programme qui verifie si le nombre de personne dans la salle est respecté, un message audio est diffusé en francais et la langue traduit. (Microsoft Azure, Python fastapi, Nextjs)",
        git: "https://github.com/Rhapsodiew/FranceInter",
        techno: [Techno.Python, Techno.FastApi, Techno.NextJs]
    },
    {
        id: 2,
        title: "TaskForge",
        img: taskforge,
        description: "Application de gestion de tâches pour une équipe, permettant la création de tâches, l'affectation à des utilisateurs, la définition de priorités et le suivi de leur état. L'application comprend un tableau de bord pour visualiser l'avancement global. (API REST, NestJs, NextJs",
        git: "https://github.com/Rhapsodiew/TaskForge",
        techno: [Techno.NestJs, Techno.NextJs, Techno.Mariadb]
    },
    {
        id: 3,
        title: "EtnaFlix",
        img: flix,
        description: "Application mobile permettant aux utilisateurs d'explorer un catalogue de films, visualiser les details d'un films, rechercher un film via une barre de recherche, via l'API TMDB. (React Native)",
        git: "https://github.com/Rhapsodiew/EtnaFlix",
        techno: [Techno.React]
    },
    {
        id: 4,
        title: "ThermOS",
        img: thermos,
        description: "Project découverte d'Arduino. Récuperation des données de température et d'humidité d'un capteur pour les afficher sur un ecran LCD avec diverse animation visuelle. (Arduino)",
        git: "https://github.com/Rhapsodiew/ThermOs",
        techno: [Techno.Arduino]
    },
    {   
        id: 5,
        title: "RPG",
        img: rpg,
        description: "Première création d'un jeu dans l'univers de Zelda avec divers mod pour améliorer l'expérience de jeu. (Golang)",
        git: "https://github.com/Rhapsodiew/My_RPG",
        techno: [Techno.Go]
    },
    {
        id: 6,
        title: "Prime Generator",
        img: primegenerator,
        description: "Application de géneration d'avis de recherche, format pdf, de personnage de l'univers de One Piece. (Golang)",
        git: "https://github.com/Rhapsodiew/PrimeGenerator",
        techno: [Techno.Go]
    },
    {
        id: 7,
        title: "VR Blueprint",
        img: "",
        description: "Creation d'un premier jeu en VR avec Unreal Engine 5",
        git: "https://github.com/Rhapsodiew/VR-Blueprint",
        techno: [Techno.Unreal]
    },
    {
        id: 8,
        title: "IntervenGo",
        img: intervengo,
        description: "Application web permettant de Planifier des interventions, Enregistrer des interventions en cours, Gerer l'historique des interventions, Generer des rapports PDF",
        git: "https://github.com/Rhapsodiew/IntervenGo",
        techno: [Techno.Postgre, Techno.NestJs, Techno.React]
    },
    {
      id: 9,
      title: "ClickerGame",
      img: "",
      description: "Jeu Clicker qui consiste a gagner des points en cliquant et acheter des améliorations avec des points.",
      git: "https://github.com/Rhapsodiew/ClickerGame",
      techno: [Techno.NestJs, Techno.React, Techno.Postgre]
    }
    
];

const openGitRepo = async (git) => {
}

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