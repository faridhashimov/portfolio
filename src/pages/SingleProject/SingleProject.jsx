import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Contact, Footer } from '../../components'
import './SingleProject.scss'
import { project } from '../../data'

const SingleProject = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = useCallback(
        (direction) => {
            if (direction === 'left') {
                setSlideIndex(
                    slideIndex > 0 ? slideIndex - 1 : project.length - 1
                )
            } else {
                setSlideIndex(
                    slideIndex < project.length - 1 ? slideIndex + 1 : 0
                )
            }
        },
        [slideIndex]
    )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const infiniteSlider = setInterval(() => handleClick('right'), 3000)

        return () => {
            clearInterval(infiniteSlider)
        }
    }, [handleClick])

    console.log(slideIndex)

    return (
        <div className="sProject">
            <div className="sProject__container">
                <nav className="header">
                    <a href="/" className="header__logo">
                        fh
                    </a>
                </nav>
                <main className="project">
                    <h3 className="project__title">e-Commerce Store</h3>
                    <div className="project__images">
                        <div
                            onClick={() => handleClick('left')}
                            className="project__images--leftArrow"
                        >
                            <FaChevronLeft />
                        </div>
                        <div
                            onClick={() => handleClick('right')}
                            className="project__images--rightArrow"
                        >
                            <FaChevronRight />
                        </div>
                        <div className="project__images--container">
                            <div
                                style={{
                                    width: `${project.length * 896}px`,
                                    transform: `translateX(${
                                        slideIndex * -896
                                    }px)`,
                                }}
                                className="imageWrapper"
                            >
                                {project.map((item) => (
                                    <div key={item.id}>
                                        <img
                                            src={item.img}
                                            alt={`img${item.id}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="dots">
                            {project.map((item) => (
                                <div
                                    onClick={() => setSlideIndex(item.id)}
                                    style={{
                                        backgroundColor:
                                            slideIndex === item.id
                                                ? '#232323'
                                                : '#ccc',
                                    }}
                                    key={item.id}
                                    className="dot"
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="project__desc">
                        <p>
                            e-Commerce Store that i built in React and styled
                            with <strong>Styled Components</strong>. It's a
                            fully responsive modern e-Commerse website, with
                            PayPal payment. Also a website fetch all data from
                            Backend which I built using{' '}
                            <strong>Express.js</strong>, which is an amazing{' '}
                            <strong>Node.js </strong>
                            framework.
                        </p>
                    </div>
                </main>
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default SingleProject
