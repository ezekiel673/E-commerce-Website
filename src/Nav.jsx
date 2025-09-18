import logo from '../public/logo.svg'
import cart from './assets/images/icon-cart.svg'
import avatar from './assets/images/image-avatar.png'

const Nav = () => {
    return(
        <nav style={navStyles}>
            <div className="main-nav" style={{display:'flex', alignItems:'center',
    justifyContent:'center', gap:'5em'}}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navs" style={ulStyles}>
                    <li><a href="#" style={aStyles}>Collections</a></li>
                    <li><a href="#" style={aStyles}>Men</a></li>
                    <li><a href="#" style={aStyles}>Women</a></li>
                    <li><a href="#" style={aStyles}>About</a></li>
                    <li><a href="#" style={aStyles}>Contact</a></li>
                </ul>
            </div>
            <div className="shop_profile" style={sideNavStyles}>
                <div className="shop">
                    <img src={cart} alt="cart" />
                </div>
                <div className="profile_menu">
                    <img src={avatar} alt="avatar" style={{width:'50px'}} />
                </div>
            </div>
        </nav>
    )
}

const navStyles = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
}

const ulStyles = {
    display:'flex',
    gap: '24px'
}

const aStyles = {
    color:'var(--dg_blue)',
    fontSize:'var(--Fs)'
}

const sideNavStyles = {
    display: 'flex',
    alignItems: 'center',
    placeSelf: 'flex-end',
    gap: '2.5em'

}


export default Nav