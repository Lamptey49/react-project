
import React from 'react'


const Nav = () => {
    
    return(
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="https://paseonline.co">Hulk</a>
                   {/* Current Active */}
                   <a  className="isactive" href="https://paseonline.co">Marvel</a>
                   <a href="https://paseonline.co">Venom</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav