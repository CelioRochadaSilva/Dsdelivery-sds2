import './styles.css';
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcom} from './linkedin.svg';
import {ReactComponent as InstagramIcom} from './instagram.svg';

function Footer( ) {

    return(
        <footer className=" main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className=" footer-icons">
            <a href=" https://www.youtube.com/watch?v=PfYifUFmXk8" target="_new"> 
            <YoutubeIcon />          
            </a>

            <a href=" https://www.linkedin.com/school/devsuperior/" target="_new"> 
            <LinkedinIcom />           
            </a>

            <a href=" https://www.instagram.com/devsuperior.ig/?hl=pt" target="_new"> 
            <InstagramIcom />
            </a>

        </div>
        </footer>
    )
  }
  export default Footer;