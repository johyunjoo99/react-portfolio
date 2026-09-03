import React from 'react'

import ProjectImg from '../../img/main/project_img01.jpg'

const Project = () => {
  return (
    <section id="project">
        <div className="w1700">
            <div className="area">
                <article>
                    <div className="trigger">
                        <div className="item">
                            <div className="title">
                                <span className="label">01. HICARESOLUTION</span>
                                <span className="paging">[ 1 / 5 ]</span>
                            </div>
                            <div className="contents">
                                <div className="skill">
                                    <ul>
                                        <li>[JSP]</li>
                                        <li>[HTML5]</li>
                                        <li>[CSS3]</li>
                                        <li>[jQuery]</li>
                                    </ul>
                                </div>
                                <div className="img">
                                    <figure>
                                        <img src={ProjectImg} alt="" />
                                    </figure>
                                </div>
                                <div className="text">
                                    <h2>LG하이케어솔루션</h2>
                                    <p>제품별 케어 서비스와 혜택을 확인하고, <br />필요한 서비스를 신청할 수 있는 웹사이트입니다.</p>
                                    <div className="btns">
                                        <a href="#" target="_blank" className="viewmore">
                                            <i></i>
                                            <span>공식 사이트</span>
                                        </a>
                                        <a href="#" target="_blank" className="viewmore">
                                            <i></i>
                                            <span>접수 사이트</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Project