import { useEffect, useState } from 'react'
import { Project, ProjectsSkeleton } from '../../components'

import './Projects.scss'

const Projects = () => {
    const [allProjects, setAllProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    useEffect(() => {
        setLoading(true)
        const getProjects = async (url) => {
            await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setAllProjects(data)
                    setErrMsg(false)
                    setLoading(false)
                })
                .catch((err) => {
                    setAllProjects(null)
                    setErrMsg(true)
                    setLoading(false)
                })
        }
        getProjects('http://localhost:5000/api')
    }, [])

    const projects =
        !errMsg &&
        !loading &&
        allProjects.map((project) => (
            <Project key={project._id} project={project} />
        ))
    const skeletons = loading
        ? [...new Array(3)].map((_, index) => <ProjectsSkeleton key={index} />)
        : null

    return (
        <div id="projects" className="projects">
            <div className="projects-container">
                <h1 className="main-title">My Projects</h1>
                <p>A selection of my current work</p>
                {errMsg ? (
                    <div className="errorMsg">
                        <p>Something went wrong, please try later...</p>
                    </div>
                ) : (
                    <div className="projects-container__works">
                        {skeletons}
                        {projects}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
