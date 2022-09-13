import './About.scss'
import me from '../../images/Me.png'
import { AiOutlineMail, AiFillGithub, AiOutlineMobile } from 'react-icons/ai'

const About = () => {

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
                        React, Typescript, Next, Node.js, Express, Mongodb,
                        Mongoose, Tailwind Redux, Git, Github, Heroku. However,
                        I am constantly learning and open to new technologies.
                        If you think I'm a good fit for your team, feel free to
                        contact me so we can chat.
                    </p>
                    <div className="about__info--contacts">
                        <ul className="contacts__container">
                            <li>
                                <AiOutlineMail />
                                <a href="mailto:faridhashimov@outlook.com">
                                    faridhashimov@outlook.com
                                </a>
                            </li>
                            <li>
                                <AiFillGithub />
                                <a
                                    href="https://github.com/faridhashimov"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    github.com/faridhashimov
                                </a>
                            </li>
                            <li>
                                <AiOutlineMobile />
                                <a href="tel:+79257904190"> +7 925 790 41 90</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="myImage">
                    <div className="myImage__wrapper">
                        <img src={me} alt="Portfolio" />
                        <ul className="mobile__contacts">
                            <li>
                                <AiOutlineMail /> faridhashimov@outlook.com
                            </li>
                            <li>
                                <AiFillGithub />
                                <a
                                    href="https://github.com/faridhashimov"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    github.com/faridhashimov
                                </a>
                            </li>
                            <li>
                                <AiOutlineMobile />
                                +7 (925) 790-41-90
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
