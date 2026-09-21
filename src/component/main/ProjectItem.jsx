import { useState, useRef, useEffect } from 'react'
import { BASE_URL } from '../../constants/constants'

import ProjectData from '../../data/projectData'
import ViewMore from '../common/ViewMore'
import ProjectMore from './ProjectMore'

const ProjectItem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const projectRef = useRef(null);

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

  const projectList = projectImages.map((item) => {
    const project = ProjectData.find((data) => data.id === item.id);

    return{
        ...project,
        img: item.img
    }
  })

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
                                    <div className="w1700">
                                        <div className="flex">
                                            <span className="label">{index < 10 ? `0${index + 1}` : index + 1}. {item.eng}</span>
                                            <span className="paging">[ {activeIndex + 1} / {projectList.length + 1} ]</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="contents">
                                    <div className="w1700">
                                        <div className="grid">
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
                                                <div className="sec-title">
                                                    <h2>{item.kor}</h2>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="btns">
                                                    {
                                                        item.link.map((el) => 
                                                            <ViewMore 
                                                                key={el.url}
                                                                href={el.url}
                                                                external
                                                                targetBlank
                                                            >
                                                                {el.label || '사이트 보러가기'}
                                                            </ViewMore> 
                                                        )
                                                    }
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
    </>
  )
}

export default ProjectItem