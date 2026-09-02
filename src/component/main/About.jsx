import React from 'react'

const About = () => {
  return (
    <>
        <section id="about">
            <div className="w1700">
                <div className="flex-layout">
                    <div className="title">
                        <h2>About</h2>
                    </div>
                    <div className="contents">
                        <div className="text">
                            <h3>주어진 디자인을 구현하는 것을 넘어, <br />사용자가 더 편리하게 이용할 수 있는 방법을 고민합니다.</h3>
                            <p>웹 에이전시에서 다양한 분야의 프로젝트를 담당하며 여러 디자인과 요구사항을 실제 웹으로 구현해왔습니다. <br />프로젝트마다 다른 환경과 목적을 마주하면서 단순히 주어진 화면을 만드는 것보다, 왜 이렇게 만들어야 하는지를 이해하는 것이 중요하다는 것을 배웠습니다.</p>
                            <p>작업할 때는 사용자에게 자연스러운 경험을 제공하면서도 이후의 수정과 운영을 고려한 구조를 고민합니다. <br />혼자 완성하는 결과물이 아닌, 다음 작업자가 이어서 다룰 수 있는 코드와 협업하기 좋은 환경을 만드는 것까지 퍼블리싱의 역할이라고 생각합니다.</p>
                        </div>
                        <div className="counter-box">
                            <div className="item">
                                <div className="counter">52</div>
                                <dl>
                                    <dt>Projects</dt>
                                    <dd>다양한 산업 분야의 프로젝트를 수행하며 <br />웹 환경에 맞는 UI를 구현해왔습니다.</dd>
                                </dl>
                            </div>
                            <div className="item">
                                <div className="counter">3.8<span> years</span></div>
                                <dl>
                                    <dt>Career</dt>
                                    <dd>3년 8개월간 웹 퍼블리셔로 근무하며 <br />다양한 웹 프로젝트의 실무 경험을 쌓았습니다.</dd>
                                </dl>
                            </div>
                            <div className="item">
                                <div className="counter">13</div>
                                <dl>
                                    <dt>Skills</dt>
                                    <dd>다양한 웹 기술과 디자인 툴을 활용하며 <br />새로운 기술을 지속적으로 학습합니다.</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About