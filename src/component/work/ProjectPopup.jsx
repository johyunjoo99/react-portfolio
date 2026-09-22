import React from 'react'
import { BASE_URL } from '../../constants/constants'

import ProjectCardLayout from './ProjectCardLayout'
import ProjectListLayout from './ProjectListLayout'
import ViewMore from '../common/ViewMore'

const ProjectPopup = ({ project, popupClose }) => {
  return (
    <article style={{ '--pointColor' : project?.colorCode }}>
        <div className="head">
            <h3 className="logo">
                <img src={`${BASE_URL}${project?.logo}`} alt="" />
            </h3>
            <button className="popup-close" onClick={popupClose}>
              <i></i>
            </button>
        </div>
        <div className="body scroll-content">
            <div className="title">
                <span>{project?.eng}</span>
                <h4>{project?.kor}</h4>
                <p>{project?.description}</p>
            </div>
            <section>
                <div className="card-layout">
                    <ProjectCardLayout title="개발 환경">
                        {project?.environment}
                    </ProjectCardLayout>
                    <ProjectCardLayout title="사용 기술">
                        <ul>
                            {
                                project?.skill.map((item) => (
                                    <li key={item}>[{item}]</li>
                                ))
                            }
                        </ul>
                    </ProjectCardLayout>
                    <ProjectCardLayout title="작업 언어">
                        <ul>
                            {
                                project?.language.map((item) => (
                                    <li key={item}>[{item}]</li>
                                ))
                            }
                        </ul>
                    </ProjectCardLayout>
                </div>
            </section>
            <section>
                <ProjectListLayout
                    num="01"
                    title="기본 정보"
                >
                    <ul>
                        <li>
                            <dl>
                                <dt>사이트 유형</dt>
                                <dd>{project?.type}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>작업 기간</dt>
                                <dd>{project?.period.start} - {project?.period.end}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>담당 업무</dt>
                                <dd>{project?.detail.responsibility}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>참여도</dt>
                                <dd>
                                    <div className="gauge">
                                        <div style={{ "--width" : `${project?.detail.participation.main}%` }}>
                                            <div>
                                                <span>메인 {project?.detail.participation.main}%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ "--width" : `${project?.detail.participation.sub}%` }}>
                                                <span>서브 {project?.detail.participation.sub}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </ProjectListLayout>
                <ProjectListLayout
                    num="02"
                    title="주요 작업"
                >
                    <ul>
                        {
                            project?.detail.tasks.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </ProjectListLayout>
                {
                    project?.detail.features?.length > 0 && (
                        <ProjectListLayout
                            num="03"
                            title="작업 특징"
                        >
                            <ul>
                                {
                                    project?.detail.features.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </ProjectListLayout>
                    )
                }
            </section>
            <div className="btns">
                {
                    project?.link.map((item) => (
                        <ViewMore
                            key={item.url}
                            href={item.url}
                            external
                            targetBlank
                        >
                            {item.label || '사이트 보러가기'}
                        </ViewMore>
                    ))
                }                
            </div>
        </div>
    </article>
  )
}

export default ProjectPopup