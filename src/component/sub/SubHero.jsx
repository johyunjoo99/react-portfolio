import React from 'react'
import { Link } from 'react-router-dom'

const SubHero = ({ page }) => {
  return (
    <section id="sub-hero" className={`hero${page.idx}`}>
        <div className="text">
            <div className="w1700">
                <div className="flex-box">
                    <h2>{page.title}</h2>
                    <div id="lnb">
                        <ul>
                            <li className="home">
                                <Link to="/">
                                    <i></i>
                                </Link>
                            </li>
                            <li className="local01">
                                <Link to={`/${page.link}`}>{page.title}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className={`img img${page.idx}`}></div>
    </section>
  )
}

export default SubHero