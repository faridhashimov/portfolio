import { Link } from 'react-router-dom'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import site from '../../images/1.png'
import site2 from '../../images/3.png'

import './Projects.scss'

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div className="projects-container">
                <h1 className="main-title">My Projects</h1>
                <p>A selection of my current work</p>
                <div className="projects-container__works">
                    <div className="item-wrapper">
                        <h6 className="work-title">
                            Ecommerce Store
                            <span className="work-title__links">
                                <FiGithub />
                                <FiExternalLink />
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
                            <Link to="/project/22">
                                <img src={site} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <h6 className="work-title">
                            Admin Dashboard
                            <span className="work-title__links">
                                <FiGithub />
                                <FiExternalLink />
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
                            <Link to="/project/22">
                                <img src={site2} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="item-wrapper">
                        <h6 className="work-title">
                            Ecommerce Store
                            <span className="work-title__links">
                                <FiGithub />
                                <FiExternalLink />
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
                            <Link to="/project/22">
                                <img src={site} alt="" />
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects
