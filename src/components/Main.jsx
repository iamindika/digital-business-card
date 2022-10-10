import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { FaLinkedin } from 'react-icons/fa';
import { 
  MdDarkMode, 
  MdLightMode,
  MdEmail
} from "react-icons/md";
import PropTypes from "prop-types";

const Main = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <main className={`main container ${theme}`}>
      {theme === "dark"
        ? <MdLightMode 
            className="toggle"
            color="yellow"
            onClick={toggleTheme}
          />
        : <MdDarkMode 
            className="toggle"
            color="black"
            onClick={toggleTheme}
          />}
      <h1 
        className={`main-name ${theme === 'light' && 'dark'}`}
      >Laura Smith</h1>
      <h3 
        className={`main-occupation ${theme === 'dark' ? 'light' : 'dark'}`}
      >Frontend Developer</h3>
      <a 
        href="#" 
        className={`main-website ${theme === 'dark' ? 'light' : 'dark'}`}
      >laurasmith.website</a>

      <section className="links">
        <button className="btn btn-email">
          <MdEmail className="icon-email"/>
          <span className="email-text">Email</span>
        </button>
        <button className="btn btn-social">
          <FaLinkedin className="icon-social"/>
          <span className="social-text">LinkedIn</span>
        </button>
      </section>

      <section className="info">
        <h4 
          className={`info-title ${theme === 'dark' ? 'light' : 'dark'}`}
        >About</h4>
        <p 
          className={`info-text ${theme === 'dark' ? 'light' : 'dark'}`}
        >I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </section>

      <section className="info">
        <h4 
          className={`info-title ${theme === 'dark' ? 'light' : 'dark'}`}
        >Interests</h4>
        <p 
          className={`info-text ${theme === 'dark' ? 'light' : 'dark'}`}
        >Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </section>
    </main>
  )
}

Main.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
}

Main.defaultProps = {
  theme: "light",
  toggleTheme: () => {}
}

export default Main;