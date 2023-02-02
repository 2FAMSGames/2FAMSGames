import { Link } from 'react-router-dom'
import { FaItchIo, FaTwitter, FaGithubSquare, FaInstagram } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} />
            <nav className='header-nav'>
                <a className='header-nav__item'>
                    <FaTwitter />
                </a>
                <a className='header-nav__item'>
                    <FaInstagram />
                </a>
                <a className='header-nav__item'>
                    <FaGithubSquare />
                </a>
                <a className='header-nav__item'>
                    <FaItchIo />
                </a>
            </nav>
        </header>
    )
}

export default Header
