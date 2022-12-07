import './Skills.scss'

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <div className="skills-container">
                <h1 className="skills-container__title">
                    Here are a few technologies I’ve been working with recently:
                </h1>
                <ul className="skills-container__list">
                    <li>JavaScript (ES6+)</li>
                    <li>Mongoose</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>Mongodb</li>
                    <li>Typescript</li>
                    <li>Express</li>
                    <li>Sass</li>
                    <li>CSS</li>
                    <li>Webpack</li>
                    <li>Git</li>
                    <li>Redux</li>
                    <li>Github</li>
                    <li>Tailwind</li>
                </ul>
                <div className="skills-container__logos">
                    <ul className="skills-container__logos_wrapper">
                        <li>
                            <i className="devicon-javascript-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-react-original colored"></i>
                        </li>
                        <li>
                            <i className="devicon-typescript-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                        </li>
                        <li>
                            <i className="devicon-redux-original colored"></i>
                        </li>
                        <li>
                            <i className="devicon-mongodb-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-html5-plain-wordmark colored"></i>
                        </li>
                        <li>
                            <i className="devicon-express-original colored"></i>
                        </li>
                        <li>
                            <i className="devicon-tailwindcss-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-nodejs-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-github-original colored"></i>
                        </li>
                        <li>
                            <i className="devicon-sass-original colored"></i>
                        </li>
                        <li>
                            <i className="devicon-git-plain colored"></i>
                        </li>
                        <li>
                            <i className="devicon-webpack-plain colored"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
