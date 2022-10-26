import { useContext, useEffect, useState } from 'react'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { ThemeContext } from '../../context/themeContext'
import { useParams } from 'react-router-dom'
import {
    Slider,
    SingleProjectSkeleton,
    Contact,
    Footer,
} from '../../components'
import { baseURL } from '../../config'
import './SingleProject.scss'

const SingleProject = () => {
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const { dispatch } = useContext(ThemeContext)
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setLoading(true)
        const getProjects = async (url) => {
            await fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setProject(data)
                    setErrMsg(false)
                    setLoading(false)
                })
                .catch((err) => {
                    setProject(null)
                    setErrMsg(true)
                    setLoading(false)
                })
        }
        getProjects(`${baseURL}/api/` + id)
    }, [id])

    const onToggleMode = () => {
        dispatch({ type: 'TOGGLE' })
    }

    const descr = () => {
        return <div dangerouslySetInnerHTML={{ __html: project.desc }} />
    }

    return (
        <div className="sProject">
            <div className="sProject__container">
                <nav className="header">
                    <a href="/" className="header__logo">
                        fh
                    </a>
                    <div
                        onClick={onToggleMode}
                        className={
                            darkMode ? 'toggle-darkmode' : 'toggle-lightmode'
                        }
                    >
                        {darkMode ? <FiSun /> : <FaRegMoon />}
                    </div>
                </nav>
                {!errMsg && !loading && project ? (
                    <main className="project">
                        <h3 className="project__title">{project?.title}</h3>
                        <Slider project={project?.images} />
                        <div className="project__desc">{descr()}</div>
                    </main>
                ) : loading ? (
                    <SingleProjectSkeleton />
                ) : (
                    <div className="error">
                        Something went wrong... Please try later
                    </div>
                )}
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default SingleProject
