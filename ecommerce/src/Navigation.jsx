import {useState} from 'react'
export function Navigation({ toggleCart, quantity }) {
    const [isOpen, setIsOpen] = useState(false);
    function openNav() {
        setIsOpen(true);
    }
    function closeNav() {
        setIsOpen(false);
    }
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-container">
                    <div className="menu-icon"><img onClick={openNav} src="public/icon-menu.svg" /></div>
                    <div className="logo"><img src="public/logo.svg" /></div>
                </div>
                <div className="responsive">
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="nav-links-section" style={{display: isOpen ? "flex" : "none"}}>
                    <div className="nav-links-container" >
                        <div className="close">
                            <img src="public/icon-close.svg" onClick={closeNav}/>
                        </div>
                        <div className="nav-links">
                            <a href="#">Collections</a>
                            <a href="#">Men</a>
                            <a href="#">Women</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-icons">
                <div className="cart-wrapper" onClick={toggleCart}>
                    <img className='cart-icon' src="public/icon-cart.svg" />
                    <span className='cart-badge'>{quantity}</span>
                </div>
                <div className="profile-img"><img src="public/image-avatar.png" /></div>
            </div>
        </nav>
    )
}