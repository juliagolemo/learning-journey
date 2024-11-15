import { Link } from 'react-router-dom';
import './CircleSkill.css';

const CircleSkill = ({ tech, index }) => {
    return (
      <div key={index} className={`circle-item item-${index + 1}`}>
          <Link to={`/technologies/${tech.path}`} className="circle-link">
          <div className="circle-item-inner">
            <img src={tech.image} alt={tech.name} className="circle-image" />
            <p className="circle-name">{tech.name}</p>
            <div className="circle-description">
              {tech.description}
            </div>
          </div>
        </Link>
      </div>
    );
  };

  export default CircleSkill;