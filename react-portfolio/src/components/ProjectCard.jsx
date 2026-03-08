import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, reverse, isTodo }) => {
    return (
        <div className={`project glass ${reverse ? 'row-reverse' : ''}`}>
            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <div className="project-info">
                <div className="text">{title}</div>
                <p>{description}</p>
                <div className="buttons">
                    {isTodo ? (
                        <Link to="/todo">
                            <button className="btn btn-primary">Check out...</button>
                        </Link>
                    ) : (
                        <button className="btn btn-secondary">Learn More</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
