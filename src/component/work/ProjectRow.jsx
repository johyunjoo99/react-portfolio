const ProjectRow = ({ project, num, onSelect }) => {
  return (
    // 마우스는 행 전체 클릭, 키보드는 제목 버튼으로 팝업 열기 (버튼 클릭이 tr로 전파됨)
    <tr onClick={() => onSelect(project)}>
        <td><span className="num">{String(num).padStart(2, '0')}</span></td>
        <td>
            <i className="color" style={{ background : project.colorCode }} aria-hidden="true"></i>
            <span className="blind">{project.color}</span>
        </td>
        <td>
            <button type="button" className="title" aria-haspopup="dialog">{project.kor}</button>
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
