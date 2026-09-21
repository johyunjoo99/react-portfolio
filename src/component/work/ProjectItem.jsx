import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/constants'

const ProjectItem = ({ ProjectData, popupRef, setSelectedProject }) => {
  return (
    ProjectData.map((item, idx) => (
        <tr key={item.id} onClick={() => {
            setSelectedProject(item);
            popupRef.current.popupOpen();
        }}>
            <td><span className="num">{idx < 9 ? `0${idx + 1}` : idx + 1}</span></td>
            <td>
                <i className="color" style={{ background : item.colorCode }}></i>
            </td>
            <td>
            <Link to="">{item.kor}</Link>
            </td>
            <td>
                <span className="num">{item.period.start} - {item.period.end}</span>
            </td>
            <td>
                <ul className="skill">
                    <li>[{item.environment}]</li>
                    {
                        item.skill.map((el) => (
                            <li key={el}>[{el}]</li>
                        ))
                    }
                </ul>
            </td>
            <td>
                <i className="arrow"></i>
            </td>
        </tr>
    ))
  )
}

export default ProjectItem