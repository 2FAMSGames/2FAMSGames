import { Link } from 'react-router-dom'
import { FaItchIo, FaTwitter, FaGithubSquare, FaInstagram, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} />
            <nav className='header-nav'>
                <a
                    className='header-nav__item'
                    href='https://twitter.com/2famsgames'
                    rel='noopener'
                    target='_blank'>
                    <FaTwitter />
                </a>
                <a
                    className='header-nav__item'
                    href='https://github.com/2famsGames'
                    rel='noopener'
                    target='_blank'>
                    <FaGithubSquare />
                </a>
                <a
                    className='header-nav__item'
                    href='https://2fams.itch.io/'
                    rel='noopener'
                    target='_blank'>
                    <FaItchIo />
                </a>
                <a
                    className='header-nav__item'
                    href='mailto:2famsgames@gmail.com'
                    rel='noopener'
                    target='_blank'>
                    <FaEnvelope />
                </a>
            </nav>
        </header>
    )
}

export default Header
