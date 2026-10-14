import { BASE_URL } from '../../constants/constants'

import ProjectCardLayout from './ProjectCardLayout'
import ProjectListLayout from './ProjectListLayout'
import ViewMore from '../common/ViewMore'

const ProjectPopup = ({ project, titleId, onClose }) => {
  const { detail } = project;
  const hasFeatures = detail.features?.length > 0;

  return (
    <article style={{ '--pointColor' : project.colorCode }}>
        <div className="head">
            {/* 프로젝트명이 아래 제목(h3)에 있으므로 로고는 장식 이미지로 처리 */}
            <div className="logo">
                <img src={`${BASE_URL}${project.logo}`} alt="" />
            </div>
            <button type="button" className="popup-close" aria-label="팝업 닫기" onClick={onClose}>
              <i aria-hidden="true"></i>
            </button>
        </div>
        {/* 키보드로도 내부 스크롤이 가능하도록 tabIndex 지정 */}
        <div className="body scroll-content" tabIndex={0}>
            <div className="title">
                <span>{project.eng}</span>
                <h3 id={titleId}>{project.kor}</h3>
                <p>{project.description}</p>
            </div>
            <section>
                <div className="card-layout">
                    <ProjectCardLayout title="개발 환경">
                        {project.environment}
                    </ProjectCardLayout>
                    <ProjectCardLayout title="사용 기술">
                        <ul>
                            {
                                project.skill.map((item) => (
                                    <li key={item}>[{item}]</li>
                                ))
                            }
                        </ul>
                    </ProjectCardLayout>
                    <ProjectCardLayout title="작업 언어">
                        <ul>
                            {
                                project.language.map((item) => (
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
                                <dd>{project.type}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>작업 기간</dt>
                                <dd>{project.period.start} - {project.period.end}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>담당 업무</dt>
                                <dd>{detail.responsibility}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>참여도</dt>
                                <dd>
                                    {/* 게이지 위 글자색 반전을 위해 같은 텍스트를 겹쳐 표시 (.black은 시각용 복제) */}
                                    <div className="gauge">
                                        <div style={{ "--width" : `${detail.participation.main}%` }}>
                                            <div>
                                                <span>메인 {detail.participation.main}%</span>
                                                <span className="black" aria-hidden="true">메인 {detail.participation.main}%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ "--width" : `${detail.participation.sub}%` }}>
                                                <span>서브 {detail.participation.sub}%</span>
                                                <span className="black" aria-hidden="true">서브 {detail.participation.sub}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </ProjectListLayout>
                {/* 프로젝트별 차별점(작업 특징)을 공통 업무(주요 작업)보다 먼저 노출 */}
                {
                    hasFeatures && (
                        <ProjectListLayout
                            num="02"
                            title="작업 특징"
                        >
                            <ul>
                                {
                                    detail.features.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </ProjectListLayout>
                    )
                }
                {/* 작업 특징이 없으면 주요 작업이 02번 */}
                <ProjectListLayout
                    num={hasFeatures ? '03' : '02'}
                    title="주요 작업"
                >
                    <ul>
                        {
                            detail.tasks.map((item) => (
                                <li key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </ProjectListLayout>
            </section>
            {
                project.link.length > 0 && (
                    <div className="btns">
                        {
                            project.link.map((item) => (
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
                )
            }
        </div>
    </article>
  )
}

export default ProjectPopup
