import { useRef, useLayoutEffect } from 'react'

import FilterData from '../../data/projectSearchFilter'

const SearchFilter = ({ isFilterOpen, filters, setFilters }) => {
    const filterRef = useRef(null);

    // 콘텐츠 높이(scrollHeight) 기준으로 펼침/접힘 높이 계산
    useLayoutEffect(() => {
        const filterBox = filterRef.current;

        if(!filterBox) return;

        const updateHeight = () => {
            filterBox.style.height = isFilterOpen
            ? `${filterBox.scrollHeight}px`
            : '0px';
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

    // 접혀 있을 때는 inert로 키보드 포커스 차단
    return (
    <div
        ref={filterRef}
        id="search-filter"
        className={`filter-box ${isFilterOpen ? 'is-open' : ''}`}
        inert={!isFilterOpen}
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
        </div>
    </div>
  )
}

export default SearchFilter
