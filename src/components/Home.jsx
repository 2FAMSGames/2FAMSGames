import logo from '../assets/logo.png'
import team from '../data/team.js'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-header'>
                <img src={logo} className='home-header__logo' alt='logo' />
                <h3 className='home-header__subtitle'>An amateur indie studio</h3>
            </div>

            <div className='home__section home-description'>
                <p className='home-description__text'>
                    2FAMS is an upcoming video game studio formed at the University Rey Juan Carlos.
                    Our team of talented developers is dedicated to creating top-quality, engaging
                    games that players of all ages will love.
                    <br />
                    <br />
                    Our first title, [NOMBRE], is a collection of mini-games in the party game
                    style, perfect for a fun night in with friends or family. Join us on this
                    exciting journey and be a part of the 2FAMS gaming community!
                </p>
            </div>
            <div className='home__section home-project'>
                <h2 className='home__title'>Project</h2>
                <p>Aqui iran imagenes del proyecto junto + enlace a itchio etc etc</p>
            </div>
            <div className='home__section home-team'>
                <h2 className='home__title'>Team</h2>
                <div className='member-list'>
                    {team.map((e) => {
                        return (
                            <div className='member'>
                                <img className='member__img' src={e.img} />
                                <h3 className='member__name'>{e.name}</h3>
                                <h4 className='member__role'>{e.role}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
