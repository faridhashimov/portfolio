import './About.scss'
import me from '../../images/Me.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext'

const About = () => {
    const theme = useContext(ThemeContext)

    return (
        <div id="about" className="about">
            <div className="about__container">
                <div className="about__info">
                    <h1 className="about__info--title">About Me</h1>
                    <p className="about__info--desc">
                        Hello, my name is Farid Hashimov. I spend my time on
                        personal projects, learning more about full stack web
                        development and how to improve my skills. My passion is
                        creating accessible, user-friendly websites and web
                        applications. <br />
                        My skills include HTML, CSS (SASS), Javascript (ES6),
                        React, Typescript, Next, Redux, GIT, Github, Netlify.
                        However, I am constantly learning and open to new
                        technologies. If you think I'm a good fit for your team,
                        feel free to contact me so we can chat.
                    </p>
                    <div className="about__info--contacts">
                        <div className="contacts__container">
                            <span>faridhashimov@outlook.com</span>
                            <span>+7 925 790 41 90</span>
                        </div>
                    </div>
                </div>
                <div className="myImage">
                    <div className="myImage__wrapper">
                        <img src={me} alt="Portfolio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
