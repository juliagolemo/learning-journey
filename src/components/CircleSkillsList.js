import CircleSkill from './CircleSkill';
import './CircleSkillsList.css';

const CircleSkillsList = ({ technologies }) => {
    return (
      <div className="circle-container">
      <div className="circle-content">
        {technologies.map((tech, index) => (
          <CircleSkill key={index} tech={tech} index={index}/>
        ))}
        <div className="circle-center">
          <h2>Tools</h2>
        </div>
      </div>
    </div>
    );
  };

  export default CircleSkillsList;