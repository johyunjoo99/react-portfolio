import React from 'react'
import { BASE_URL } from '../../constants/constants'

const ProjectPopup = () => {
  return (
    <article style={{ '--pointColor' : '#C6004D' }}>
        <div className="head">
            <h3 className="logo">
                <img src={`${BASE_URL}/img/project/logo_lg-hicare-solution.svg`} alt="" />
            </h3>
            <button className="popup-close">
              <i></i>
            </button>
        </div>
        <div className="body scroll-content">
            <div className="title">
                <span>LG HICARESOLUTION</span>
                <h4>LG하이케어솔루션</h4>
                <p>제품별 케어 서비스와 혜택을 확인하고, <br />필요한 서비스를 신청할 수 있는 웹사이트입니다.</p>
            </div>
            <section>
                <div className="card-layout">
                    <dl>
                        <dt>개발 환경</dt>
                        <dd className="eng">JSP</dd>
                    </dl>
                    <dl>
                        <dt>사용 기술</dt>
                        <dd className="eng">
                            <ul>
                                <li>[HTML5]</li>
                                <li>[CSS3]</li>
                                <li>[jQuery]</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>지원 언어</dt>
                        <dd className="eng">
                            <ul>
                                <li>[KOR]</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </section>
            <section>
                <div className="list-layout">
                    <div className="num">01</div> 
                    <div className="tit">
                        <h5>기본 정보</h5>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <dl>
                                    <dt>사이트 유형</dt>
                                    <dd>기업 사이트</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>작업 기간</dt>
                                    <dd>2022.11.18 - 2024.06.10</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>담당 업무</dt>
                                    <dd>웹 퍼블리싱</dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>참여도</dt>
                                    <dd>
                                        <div className="gauge">
                                            <div style={{ "--width" : "100%" }}>
                                                <div>
                                                    <span>메인 100%</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div style={{ "--width" : "100%" }}>
                                                    <span>서브 100%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list-layout">
                    <div className="num">02</div> 
                    <div className="tit">
                        <h5>주요 작업</h5>
                    </div>
                    <div className="content">
                        <ul>
                            <li>유지보수를 고려한 화면 구조 설계 및 퍼블리싱</li>
                            <li>반응형 웹 페이지 구축 및 디바이스별 레이아웃 대응</li>
                            <li>인터랙션 및 UI 동작 구현</li>
                            <li>시맨틱 마크업 및 웹 표준을 고려한 페이지 구성</li>
                            <li>크로스 브라우징을 고려한 스타일 및 기능 대응</li>
                            <li>PM, 디자이너, 개발자와 구현 방향을 조율하며 페이지 완성</li>
                        </ul>
                    </div>
                </div>
                <div className="list-layout">
                    <div className="num">03</div> 
                    <div className="tit">
                        <h5>작업 특징</h5>
                    </div>
                    <div className="content">
                        <ul>
                            <li>작업 중 기업·서비스 신청 통합 사이트가 2개 사이트로 분리되어 변경된 범위에 맞춰 퍼블리싱 대응</li>
                            <li>내부 개발 인력 부재로 퍼블리싱 완료 후 외부 개발자와 소통하며 개발 연계 작업 진행</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="btns">
                <a 
                    href="" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="viewmore"
                >
                    <i></i>
                    <span>공식 사이트</span>
                </a>
                <a 
                    href="" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="viewmore"
                >
                    <i></i>
                    <span>접수 사이트</span>
                </a>
            </div>
        </div>
    </article>
  )
}

export default ProjectPopup