import "./ProjectStyles.css"
import taskforge from "../images/project/taskforge.png"
import franceinter from "../images/project/franceinter.png"
import primegenerator from "../images/project/prime_generator.png"
import rpg from "../images/project/rpg.png"
import thermos from "../images/project/thermos2.png"
import flix from "../images/project/flix5.png"


const ProjectData = [
    {
        id: 1,
        title : "FranceInter",
        img : franceinter,
        description : "Programme qui verifie si le nombre de personne dans la salle est respecté, un message audio est diffusé en francais et la langue traduit. (Microsoft Azure, Python fastapi, Nextjs)",
        git : "https://github.com/Rhapsodiew/FranceInter"
    },
    {
        id: 2,
        title : "TaskForge",
        img : taskforge,
        description : "Application de gestion de tâches pour une équipe, permettant la création de tâches, l'affectation à des utilisateurs, la définition de priorités et le suivi de leur état. L'application comprend un tableau de bord pour visualiser l'avancement global. (API REST, NestJs, NextJs",
        git : "https://github.com/Rhapsodiew/TaskForge"
    },
    {
        id: 3,
        title : "EtnaFlix",
        img :flix,
        description : "Application mobile permettant aux utilisateurs d'explorer un catalogue de films, visualiser les details d'un films, rechercher un film via une barre de recherche, via l'API TMDB. (React Native)",
        git : "https://github.com/Rhapsodiew/EtnaFlix"
    },
    {
        id: 4,
        title : "ThermOS",
        img : thermos,
        description : "Project découverte d'Arduino. Récuperation des données de température et d'humidité d'un capteur pour les afficher sur un ecran LCD avec diverse animation visuelle. (Arduino)",
        git : "https://github.com/Rhapsodiew/ThermOs"
    },
    {   
        id: 5,
        title : "RPG",
        img : rpg,
        description : "Première création d'un jeu dans l'univers de Zelda avec divers mod pour améliorer l'expérience de jeu. (Golang)",
        git : "https://github.com/Rhapsodiew/My_RPG"
    },
    {
        id: 6,
        title : "Prime Generator",
        img : primegenerator,
        description : "Application de géneration d'avis de recherche, format pdf, de personnage de l'univers de One Piece. (Golang)",
        git : "https://github.com/Rhapsodiew/PrimeGenerator"
    },
    {
        id: 7,
        title : "VR Blueprint",
        img : "",
        description: "Creation d'un premier jeu en VR avec Unreal Engine 5",
        git : "https://github.com/Rhapsodiew/VR-Blueprint"
    }
]

function ProjectCard ({title, img, description,git}) {
    // console.log(git)
    return (
        <div>
            <a href={git}>
            <div className="card-content">
                    <img  src={img} alt="/" className="card-img"/>    
                
                <div className="overlay">
                    <p className="description">{description}</p>
                </div>
                <h4 className="card-title">{title}</h4>
            </div>
            </a>
        </div>
    )
}

export {ProjectData, ProjectCard}