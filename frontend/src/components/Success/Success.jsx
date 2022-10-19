import { useContext } from 'react'
import { FaRegCheckCircle, FaRegMeh } from 'react-icons/fa'
import { ThemeContext } from '../../context/themeContext'
import './Success.scss'

const Success = ({ status }) => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="success">
            {status === 'success' ? (
                <FaRegCheckCircle color="#2dd4bf" />
            ) : (
                <FaRegMeh color="#ed4337" />
            )}
            {status === 'success' ? (
                <>
                    <h3 style={{ color: darkMode ? '#fff' : '#1d3557' }}>
                        Thank you!
                    </h3>
                    <p>Your message has been sent.</p>
                </>
            ) : (
                <p color="#ed4337">Your message has been sent.</p>
            )}
        </div>
    )
}

export default Success
