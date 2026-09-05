import React from 'react'

const ProjectMore = ({ total, activeIndex, isProjectActive }) => {
  return (
    <>
        <article className={
            [
                'more', 
                isProjectActive && total < activeIndex ? 'is-prev' : '',
                isProjectActive && total === activeIndex ? 'is-active' : ''
            ].join(' ')
        }>
            <div className="trigger" style={{ '--idx' : total }}>
                <div className="item" data-aos="fade-in" data-aos-anchor-placement="top-top" data-aos-once="false">
                    <div className="title">
                        <span className="label">{total < 10 ? `0${total + 1}` : total + 1}. VIEW MORE</span>
                        <span className="paging">[ {total + 1} / {total + 1} ]</span>
                    </div>
                    <div className="contents">
                        <div className="img">
                            <figure>
                                <img src="/img/project/project_img05.jpg" alt="" />
                            </figure>
                        </div>
                        <div className="text">
                            <div className="sec-title">
                                <h2>Want To See <br />More Of My Work?</h2>
                                <p>다양한 분야의 프로젝트와 작업 내용을 <br />더 자세히 확인해보세요.</p>
                            </div>
                            <div className="btns">
                                <a href="" target="_blank" rel="noreferrer" className="viewmore">
                                    <i></i>
                                    <span>전체 프로젝트 보러 가기</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default ProjectMore