import React from 'react'
import hulk from './../hulk-1.jpg'
import venom from './../venom-1.jpg'
import venom2 from './../venom-2.jpg'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                  <h1 className="title">Mavel's Fearless</h1>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                    molestias earum eveniet.
                  </p>
                  <div className="search-bar">
                    <input type="search" placeholder="Search" />
                  </div>
                  <div className="sample-wallpaper">
                      <article className="wallpaper">
                        <img src={hulk} alt="Wallpaper #1" className="wallpaper" />
                      </article>
                      <article className="wallpaper">
                        <img src={venom} alt="Wallpaper #1" className="wallpaper" />
                      </article>
                      <article className="wallpaper">
                        <img src={venom2} alt="Wallpaper #1" className="wallpaper" />
                      </article>
                  </div>
                </div>
            </header>
        </div>
    )
}
export default Header