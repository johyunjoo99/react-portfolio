import { useState } from 'react'
import Select from 'react-select'

const sortOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'title-asc', label: '제목 A-Z' },
    { value: 'title-desc', label: '제목 Z-A' },
]

const BoardInfo = ({ Data, sort, setSort }) => {
  return (
    <div className="board-info">
        <p className="total">총 <strong>{Data.length}</strong>개</p>
        <Select
            classNamePrefix={"sort-select"}
            options={sortOptions}
            value={sortOptions.find(option => option.value === sort)}
            onChange={(option) => setSort(option.value)}
            isSearchable={false}
        />
    </div>
  )
}

export default BoardInfo