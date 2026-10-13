import { Link } from 'react-router-dom'

import AnimateText from './AnimateText'

const SubHero = ({ page }) => {
  return (
    <section id="sub-hero" className={`hero${page.num}`}>
        <div className="w1700">
            <div className="inner">
                <nav id="lnb" className={`lnb${page.num}`} aria-label="현재 위치">
                    <ul>
                        <li className="home">
                            <Link to="/">
                                <i aria-hidden="true"></i>
                                <span className="blind">Home</span>
                            </Link>
                        </li>
                        <li className="local01">
                            <Link to={page.link} aria-current="page">{page.title}</Link>
                        </li>
                    </ul>
                </nav>
                <div className="text">
                    <h2><AnimateText>{page.title}</AnimateText></h2>
                    {page.description && <p>{page.description}</p>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubHero
