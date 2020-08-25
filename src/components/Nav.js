import React from 'react'
const styles = {
    navbar:{
        width:'100%',
        height:'8rem',
        backgroundColor:'#000000',
        color:'#ffffff',
        position:'fixed',
        left:'0',
        top:'0',
        zIndex:'99'
    },
    container:{
        width:'124rem',
        maxWidth:'100%',
        margin:'0rem auto'
    }
}
const Nav = () => {
    return(
        <div>
            <nav className={navbar}>
                <ul className={container}>
                   <li> <a href="#">Hulk</a></li>
                   {/* Current Active */}
                   <li><a className={logo-is-active} href="#">Marvel</a></li>
                   <li><a href="">Venom</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav