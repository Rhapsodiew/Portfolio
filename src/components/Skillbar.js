import "./SkillbarStyles.css"
function Skillbar ({title, level}) {
    return (
        <div>
            <p>{title}</p>
            <div className="bar">
                    <div id="progress" className="skill" style={{width: level}}></div>
            </div>
        </div>
    )
}
export default Skillbar