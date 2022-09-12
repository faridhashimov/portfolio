import React, { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Slider.scss'

const Slider = ({ project }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [slideSize, setSlideSize] = useState(896)

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
        [slideIndex, project.length]
    )

    useEffect(() =>{
        if(window.innerWidth < 500) {
            setSlideSize(330)
        } else {
            setSlideSize(896)
        }
    }, [window.innerWidth])

    useEffect(() => {
        const infiniteSlider = setInterval(() => handleClick('right'), 3000)

        return () => {
            clearInterval(infiniteSlider)
        }
    }, [handleClick])

    return (
        <div className="slider">
            <div
                onClick={() => handleClick('left')}
                className="slider__leftArrow"
            >
                <FaChevronLeft />
            </div>
            <div
                onClick={() => handleClick('right')}
                className="slider__rightArrow"
            >
                <FaChevronRight />
            </div>
            <div className="slider__container">
                <div
                    style={{
                        width: `${project.length * slideSize}px`,
                        transform: `translateX(${slideIndex * -slideSize}px)`,
                    }}
                    className="imageWrapper"
                >
                    {project.map((item, i) => (
                        <div key={i}>
                            <img
                                src={item}
                                alt={`img_${item.slice(77, 100)}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots">
                {project.map((item, i) => (
                    <div
                        onClick={() => setSlideIndex(i)}
                        style={{
                            backgroundColor:
                                slideIndex === i ? '#232323' : '#ccc',
                        }}
                        key={i}
                        className="dot"
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider
