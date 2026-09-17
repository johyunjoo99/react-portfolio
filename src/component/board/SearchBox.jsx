import { useState } from 'react'
import Select from 'react-select'

const sortOptions = [
  { value: 'all', label: '전체' },
  { value: 'title', label: '제목' },
  { value: 'contents', label: '내용' },
]

const SearchBox = ({ isFilterOpen, setIsFilterOpen }) => {
  const [sort, setSort] = useState(sortOptions[0]);

  return (
    <div className="search-box">
      <Select
        classNamePrefix={"sort-select"}
        options={sortOptions}
        value={sort}
        onChange={setSort}
        isSearchable={false}
      />
      <div className="input">
        <input type="text" placeholder="검색어를 입력하세요." />
        <button>
          <i className="search"></i>
        </button>
      </div>
      <button 
        className={`filter ${isFilterOpen ? 'is-open' : ''}`} 
        type="button"
        onClick={() => setIsFilterOpen(prev => !prev)}
      >
        검색 필터<i></i>
      </button>
    </div>
  )
}

export default SearchBox