import React from 'react'

import AboutCounter from './AboutCounter'

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
                        <AboutCounter/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About