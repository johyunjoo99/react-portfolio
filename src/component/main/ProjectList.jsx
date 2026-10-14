import { useState, useRef, useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'

import ProjectData from '../../data/projectData'
import ViewMore from '../common/ViewMore'
import ProjectMore from './ProjectMore'

// 메인 노출용 대표 프로젝트 (id는 projectData와 매칭)
const projectImages = [
  {
    id: 'lg-hicaresolution',
    img: `${BASE_URL}img/project/project_img01.jpg`,
  },
  {
    id: 'paldo-global',
    img: `${BASE_URL}img/project/project_img02.jpg`,
  },
  {
    id: 'dong-a-st',
    img: `${BASE_URL}img/project/project_img03.jpg`,
  },
  {
    id: 'pyunghwa-holdings',
    img: `${BASE_URL}img/project/project_img04.jpg`,
  },
]

const projectList = projectImages
  .map((item) => {
    const project = ProjectData.find((data) => data.id === item.id);

    return project ? { ...project, img: item.img } : null;
  })
  .filter(Boolean);

const ProjectList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        const area = projectRef.current;

        if(!area) return;

        const areaTop = area.getBoundingClientRect().top;

        if(areaTop > 0){
            setIsProjectActive(false);
            return;
        }

        setIsProjectActive(true);

        let currentIndex = 0;

        area.querySelectorAll('.item').forEach((item, index) => {
            if(item.getBoundingClientRect().top <= 0){
                currentIndex = index;
            }
        });

        setActiveIndex(currentIndex);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
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
                                <div className="w1700">
                                    <div className="flex">
                                        <span className="label">{String(index + 1).padStart(2, '0')}. {item.eng}</span>
                                        <span className="paging" aria-hidden="true">[ {activeIndex + 1} / {projectList.length + 1} ]</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contents">
                                <div className="w1700">
                                    <div className="grid">
                                        <div className="skill">
                                            <ul>
                                                <li>[{item.environment}]</li>
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
                                            <div className="sec-title">
                                                <h2>{item.kor}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                            {/* 외부 사이트 링크는 상세 팝업에서 제공 (팝업을 닫으면 Work 목록으로 이동) */}
                                            <div className="btns">
                                                <ViewMore href={`/work/${item.id}`}>
                                                    프로젝트 상세 보기
                                                    <span className="blind"> : {item.kor}</span>
                                                </ViewMore>
                                            </div>
                                        </div>
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
  )
}

export default ProjectList
