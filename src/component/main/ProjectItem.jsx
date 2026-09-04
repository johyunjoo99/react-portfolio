import { useState, useRef, useEffect } from 'react'
import ProjectMore from './ProjectMore'

const ProjectItem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const projectRef = useRef(null);
  const projectList = [
    {
        id: 'lg-hicaresolution',
        kor: 'LG하이케어솔루션',
        eng: 'LG HICARESOLUTION',
        img: '/img/project/project_img01.jpg',
        description: <>제품별 케어 서비스와 혜택을 확인하고, <br />필요한 서비스를 신청할 수 있는 웹사이트입니다.</>,
        skill: [
            'JSP',
            'HTML5',
            'CSS3',
            'jQuery'
        ],
        link: [
            {
                label: '공식 사이트',
                url: 'https://www.hi-caresolution.com/user/main/',
            },{
                label: '접수 사이트',
                url: 'https://service.hi-caresolution.com/user/main/main.do',
            }
        ],
    },{
        id: 'paldo-global',
        kor: '팔도 글로벌',
        eng: 'PALDO GLOBAL',
        img: '/img/project/project_img02.jpg',
        description: <>다양한 제품과 콘텐츠를 소개하는 <br />글로벌 고객을 위한 영문·중문 웹사이트입니다.</>,
        skill: [
            'PHP',
            'HTML5',
            'CSS3',
            'jQuery'
        ],
        link: [
            {
                url: 'https://paldofood.com/en/',
            }
        ],
    },{
        id: 'dong-a-st',
        kor: '동아ST',
        eng: 'DONG-A ST',
        img: '/img/project/project_img03.jpg',
        description: <>신약개발을 위한 R&D 전략과 <br />주요 파이프라인을 소개하는 웹사이트입니다.</>,
        skill: [
            'ASP',
            'HTML5',
            'CSS3',
            'jQuery'
        ],
        link: [
            {
                url: 'http://rnd.donga-st.com/en/',
            }
        ],
    },{
        id: 'pyunghwa-holdings',
        kor: '평화홀딩스',
        eng: 'PYUNGHWA HOLDINGS',
        img: '/img/project/project_img04.jpg',
        description: <>계열사별 다양한 사업과 제품 정보를 <br />한곳에서 소개하는 통합 웹사이트입니다.</>,
        skill: [
            'ASP',
            'HTML5',
            'CSS3',
            'jQuery'
        ],
        link: [
            {
                url: 'https://www.ph.co.kr/kr/',
            }
        ],
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
        const area = projectRef.current;
        const items = area?.querySelectorAll('.item');

        if(!area || !items) return;

        const areaTop = area.getBoundingClientRect().top;

        if(areaTop > 0){
            setIsProjectActive(false);
            return;
        }

        setIsProjectActive(true);

        let currentIndex = 0;

        items.forEach((item, index) => {
            if(item.getBoundingClientRect().top <= 0){
                currentIndex = index;
            }
        });
        
        setActiveIndex(currentIndex);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
        <div className="area" ref={projectRef}>
            {
                projectList.map((item, index) => 
                    <article key={item.id} className={[
                        isProjectActive && index < activeIndex ? 'is-prev' : '',
                        isProjectActive && index === activeIndex ? 'is-active' : ''
                        ].join(' ')}>
                        <div className="trigger" style={{ '--idx' : index }}>
                            <div className="item">
                                <div className="title">
                                    <span className="label">{index < 10 ? `0${index + 1}` : index + 1}. {item.eng}</span>
                                    <span className="paging">[ {activeIndex + 1} / {projectList.length + 1} ]</span>
                                </div>
                                <div className="contents">
                                    <div className="skill">
                                        <ul>
                                            {
                                                item.skill.map((el) => 
                                                    <li key={el}>[{el}]</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="img">
                                        <figure>
                                            <img src={item.img} alt="" />
                                        </figure>
                                    </div>
                                    <div className="text">
                                        <h2>{item.kor}</h2>
                                        <p>{item.description}</p>
                                        <div className="btns">
                                            {
                                                item.link.map((el) => 
                                                    <a key={el.url} href={el.url} target="_blank" rel="noreferrer" className="viewmore">
                                                        <i></i>
                                                        <span>{el.label || '사이트 보러가기'}</span>
                                                    </a>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ) 
            }
            <ProjectMore activeIndex={activeIndex} isProjectActive={isProjectActive} total={projectList.length}/>
        </div>
    </>
  )
}

export default ProjectItem