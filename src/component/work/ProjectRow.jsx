import { Link, useNavigate } from 'react-router-dom'

const ProjectRow = ({ project, num }) => {
  const navigate = useNavigate();
  const to = `/work/${project.id}`;

  // 목록에서 열었는지 표시 → 팝업 닫을 때 뒤로가기(navigate(-1))로 처리
  const linkState = { fromList: true };

  // 행 전체 클릭으로도 팝업 열기 (제목 Link 클릭은 Link가 직접 처리하므로 제외)
  const handleRowClick = (e) => {
    if(e.target.closest('a')) return;

    navigate(to, { state: linkState });
  }

  return (
    <tr onClick={handleRowClick}>
        <td><span className="num">{String(num).padStart(2, '0')}</span></td>
        <td>
            <i className="color" style={{ background : project.colorCode }} aria-hidden="true"></i>
            <span className="blind">{project.color}</span>
        </td>
        <td>
            <Link to={to} state={linkState} className="title" aria-haspopup="dialog">{project.kor}</Link>
        </td>
        <td data-th="Period : ">
            <span className="num">{project.period.start} - {project.period.end}</span>
        </td>
        <td data-th="Skill : ">
            <ul className="skill">
                <li>[{project.environment}]</li>
                {
                    project.skill.map((el) => (
                        <li key={el}>[{el}]</li>
                    ))
                }
            </ul>
        </td>
        <td aria-hidden="true">
            <i className="arrow"></i>
        </td>
    </tr>
  )
}

export default ProjectRow
