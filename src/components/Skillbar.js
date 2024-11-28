import addLoadEvent from "./func";
import "./SkillbarStyles.css"
function jobserver(){
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('progress');
            return;
          }
      
          entry.target.classList.remove('progress');
        });
      });
      
      // Get multiple elements instead of a single one using "querySelectorAll"
      const squares = document.querySelectorAll('.skill');
      
      // Loop over the elements and add each one to the observer
      squares.forEach((element) => observer.observe(element));
}

function Skillbar ({title, level}) {
    addLoadEvent(jobserver)
    return (
        <div className="skill_content">
            <p>{title}</p>
            <div className="bar">
                    <div className="skill" style={{width: level}}></div>
            </div>
        </div>
    )
}
export default Skillbar