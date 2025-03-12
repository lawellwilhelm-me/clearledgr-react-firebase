import logoSmall from '../assets/images/logo-small.png'
import logoLong from '../assets/images/logo-long.png'


const Header = () => {
    return (
        <section className="header">
            <figure className="logo">
                <img src={logoSmall} alt="Clearldgr logo" className='logo-small' />
                <img src={logoLong} alt="Clearldgr logo" className='logo-long' />
            </figure>
            <a href="#footer" className="waitlist-btn">Join Waitlist</a>
        </section>
    )

}

export default Header