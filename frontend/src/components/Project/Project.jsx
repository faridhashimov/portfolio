import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Project.scss'

const Project = ({ project }) => {
    return (
        <div key={project._id} className="item-wrapper">
            <h6 className="work-title">
                {project.title}
                <span className="work-title__links">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.githubLink}
                    >
                        <FiGithub />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.externalLink}
                    >
                        <FiExternalLink />
                    </a>
                </span>
            </h6>
            <div className="item">
                <div className="item__header">
                    <div className="item__header_left">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="item__header_right"></div>
                </div>
                <Link to={`/project/${project._id}/`}>
                    <img src={project.mainImg} alt={project.title} />
                </Link>
            </div>
        </div>
    )
}

export default Project
