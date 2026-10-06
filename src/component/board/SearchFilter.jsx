import { useRef, useEffect, useLayoutEffect } from 'react'

import FilterData from '../../data/projectSearchFilter'

const SearchFilter = ({ isFilterOpen, filters, setFilters }) => {
    const filterRef = useRef(null);
    
    useLayoutEffect(() => {
        if(!filterRef.current) return;

        const updateHeight = () => {
            filterRef.current.style.height = isFilterOpen 
            ? '0px' 
            : `${filterRef.current.scrollHeight}px`;
        }

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [isFilterOpen]);

    const handleRadioChange = (e) => {
        const {name, value} = e.target;

        setFilters(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleCheckBoxChange = (e) => {
        const {name, value, checked} = e.target;

        setFilters(prev => ({
            ...prev,
            [name]: checked ? [...prev[name], value] : prev[name].filter(item => item !== value),
        }))
    }

    const handleAllLanguageChange = (e) => {
        const {checked} = e.target;

        setFilters(prev => ({
            ...prev,
            language : checked ? Object.keys(FilterData.language) : [],
        }))
    }

    return (
    <div 
        ref={filterRef}
        className={`filter-box ${isFilterOpen ? 'is-open' : ''}`}
        style={{
            height: isFilterOpen ? '0px' : `${filterRef.current?.scrollHeight}px`
        }}
    >
        <div className="wrap">
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
                                checked={filters.environment === key}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor={`environment-${key}`}>
                                <span>{value}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </fieldset>
            <fieldset>
                <legend>작업 언어</legend>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="language-all"
                            value="all"
                            checked={
                                Object.keys(FilterData.language).every(
                                    key => filters.language.includes(key)
                                )
                            }
                            onChange={handleAllLanguageChange}
                        />
                        <label htmlFor="language-all">
                            <span>전체</span>
                        </label>
                    </li>
                    {Object.entries(FilterData.language).map(([key, value]) => (
                        <li key={key}>
                            <input
                                type="checkbox"
                                id={`language-${key}`}
                                name="language"
                                value={key}
                                checked={filters.language.includes(key)}
                                onChange={handleCheckBoxChange}
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
                                checked={filters.color === key}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor={`color-${key}`}>
                                <span>{value}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </fieldset>
            {/* <div className="buttons">
                <button type="reset">초기화<i></i></button>
                <button type="submit">적용<i></i></button>
            </div> */}
        </div>
    </div>
  )
}

export default SearchFilter