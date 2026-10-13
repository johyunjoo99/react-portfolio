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
        aria-label="검색 대상"
        options={searchOptions}
        value={searchOptions.find(option => option.value === searchType)}
        onChange={(option) => setSearchType(option.value)}
        isSearchable={false}
      />
      <div className="input">
        <label htmlFor="search-keyword" className="blind">검색어</label>
        <input
          type="text"
          id="search-keyword"
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          placeholder="검색어를 입력하세요."
        />
        <button type="submit">
          <i className="search" aria-hidden="true"></i>
          <span className="blind">검색</span>
        </button>
      </div>
      <button
        className={`filter ${isFilterOpen ? 'is-open' : ''}`}
        type="button"
        aria-expanded={isFilterOpen}
        aria-controls="search-filter"
        onClick={() => setIsFilterOpen(prev => !prev)}
      >
        검색 필터<i aria-hidden="true"></i>
      </button>
    </div>
  )
}

export default SearchBox
