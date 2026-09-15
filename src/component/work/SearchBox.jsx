import React from 'react'

const SearchBox = () => {
  return (
    <div className="search-box">
        <div className="input">
            <input type="text" placeholder="검색어를 입력하세요." />
            <button>
            <i className="search"></i>
            </button>
        </div>
        <button className="filter" type="button">
            검색 필터<i></i>
        </button>
    </div>
  )
}

export default SearchBox