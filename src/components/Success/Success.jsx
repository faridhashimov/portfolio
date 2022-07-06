import { useContext } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { ThemeContext } from '../../context/themeContext'
import './Success.scss'

const Success = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="success">
            <FaRegCheckCircle color="#2dd4bf" />
            <h3 style={{ color: darkMode ? '#fff' : '#1d3557' }}>Thank you!</h3>
            <p>Your message has been sent.</p>
        </div>
    )
}

export default Success
