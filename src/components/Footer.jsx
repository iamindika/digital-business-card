import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { 
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare 
} from "react-icons/fa"

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer container ${theme}`}>
      <a 
        href="#" 
        className="cta-link "
      >
        <FaTwitterSquare 
          className={`cta-icon ${theme === 'dark' ? 'light' : 'dark'}`}
        />
      </a>
      <a 
        href="#" 
        className="cta-link "
      >
        <FaFacebookSquare 
          className={`cta-icon ${theme === 'dark' ? 'light' : 'dark'}`}
        />
      </a>
      <a 
        href="#" 
        className="cta-link "
      >
        <FaInstagramSquare 
          className={`cta-icon ${theme === 'dark' ? 'light' : 'dark'}`}
        />
      </a>
      <a 
        href="#" 
        className="cta-link "
      >
        <FaGithubSquare 
          className={`cta-icon ${theme === 'dark' ? 'light' : 'dark'}`}
        />
      </a>
    </footer>
  )
}

export default Footer;