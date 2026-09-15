import React from 'react'

import FilterData from '../../data/projectSearchFilter'

const SearchFilter = () => {
  return (
    <div className="filter-box">
        <fieldset>
            <legend>개발 환경</legend>
            <ul>
                {Object.entries(FilterData.environment).map(([key, value]) => (
                    <li key={key}>
                        <input
                            type="radio"
                            id={`environment-${key}`}
                            name="environment"
                            value={key}
                            defaultChecked={key === 'all'}
                        />
                        <label htmlFor={`environment-${key}`}>
                            <span>{value}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
        <fieldset>
            <legend>다국어</legend>
            <ul>
                {Object.entries(FilterData.language).map(([key, value]) => (
                    <li key={key}>
                        <input
                            type="checkbox"
                            id={`language-${key}`}
                            value={key}
                            defaultChecked={key === 'all'}
                        />
                        <label htmlFor={`language-${key}`}>
                            <span>{value}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
        <fieldset>
            <legend>대표 색상</legend>
            <ul>
                {Object.entries(FilterData.color).map(([key, value]) => (
                    <li key={key}>
                        <input
                            type="radio"
                            id={`color-${key}`}
                            name="color"
                            value={key}
                            defaultChecked={key === 'all'}
                        />
                        <label htmlFor={`color-${key}`}>
                            <span>{value}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </fieldset>
        <div className="buttons">
            <button type="reset">초기화<i></i></button>
            <button type="submit">적용<i></i></button>
        </div>
    </div>
  )
}

export default SearchFilter