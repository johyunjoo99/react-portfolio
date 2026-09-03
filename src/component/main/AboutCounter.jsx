import React from 'react'

import AboutNumber from './AboutNumber'

const AboutCounter = () => {
  const counterData = [
    {
        number: '52',
        title: 'Projects',
        suffix: '',
        description: <>다양한 산업 분야의 프로젝트를 수행하며 <br />웹 환경에 맞는 UI를 구현해왔습니다.</>
    },{
        number: '3.8',
        title: 'Career',
        suffix: ' years',
        description: <>3년 8개월간 웹 퍼블리셔로 근무하며 <br />다양한 웹 프로젝트의 실무 경험을 쌓았습니다.</>
    },{
        number: '13',
        title: 'Skills',
        suffix: '',
        description: <>다양한 웹 기술과 디자인 툴을 활용하며 <br />새로운 기술을 지속적으로 학습합니다.</>
    }
  ]

  return (
    <>
        <div className="counter-box">
            {
                counterData.map((item) => 
                    <article className="item" key={item.title}>
                        <div className="counter">
                            <AboutNumber number={item.number}/>
                            {item.suffix && (<span className="suffix">{item.suffix}</span>)}
                        </div>
                        <dl>
                            <dt>{item.title}</dt>
                            <dd>{item.description}</dd>
                        </dl>
                    </article>
                )
            }
        </div>
    </>
  )
}

export default AboutCounter