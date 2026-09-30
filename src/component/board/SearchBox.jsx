import { useState } from 'react'
import Select from 'react-select'

const searchOptions = [
  { value: 'all', label: '전체' },
  { value: 'title', label: '제목' },
  { value: 'contents', label: '내용' },
]

const SearchBox = ({ 
  isFilterOpen, 
  setIsFilterOpen,
  searchType,
  setSearchType,
  inputKeyword,
  setInputKeyword
}) => {
  return (
    <div className="search-box">
      <Select
        className="select"
        classNamePrefix={"sort-select"}
        options={searchOptions}
        value={searchOptions.find(option => option.value === searchType)}
        onChange={(option) => setSearchType(option.value)}
        isSearchable={false}
      />
      <div className="input">
        <input 
          type="text" 
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          placeholder="검색어를 입력하세요." 
        />
        <button type="submit">
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