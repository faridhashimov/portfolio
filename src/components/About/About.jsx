import './About.scss'
import me from '../../images/Me.png'

const About = () => {

    return (
        <div id="about" className="about">
            <div className="about-container">
                <div className="about-container__info">
                    <h1 className="main-title">About Me</h1>
                    <p>
                        Hello, my name is Farid Hashimov. I spend my time on
                        personal projects, learning more about full stack web
                        development and how to improve my skills. My passion is
                        creating accessible, user-friendly websites and web
                        applications. <br /> <br />
                        My skills include HTML, CSS (SASS), Javascript (ES6),
                        React, Typescript, Next, Redux, GIT, Github, Netlify.
                        However, I am constantly learning and open to new
                        technologies. If you think I'm a good fit for your team,
                        feel free to contact me so we can chat.
                    </p>
                </div>
                <div className="about-container__img">
                    <div className="about-container__img_wrapper">
                        <img src={me} alt="Portfolio" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
