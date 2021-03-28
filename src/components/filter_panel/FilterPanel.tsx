import React, { useState } from 'react'
import { Input } from '../../components'
import './filterPanel.css'

interface Props {
  onSearch: (val: string) => void
  onReset: () => void
}

const FilterPanel = (props: Props) => {
  const { onReset, onSearch } = props
  const [query, setQuery] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleOnSearch = () => {
    if (query.trim() !== '') {
      onSearch(query)
    }
  }

  const handleOnReset = () => {
    setQuery('')
    onReset()
  }

  return (
    <div className='app-container'>
      <div className='filter-panel__container'>
        <form onSubmit={handleFormSubmit}>
          <h3 className='filter-panel__title'>Search Panel</h3>
          <div className='filter-panel__inputs'>
            <Input
              placeholder='Search by email or name'
              name='query'
              onChange={handleOnChange}
              value={query}
            />
          </div>
        </form>
        <div className='filter-panel__actions'>
          <button
            type='submit'
            onClick={handleOnSearch}
            className='filter-panel__actions-btn search'
          >
            Search
          </button>
          <button onClick={handleOnReset} className='filter-panel__actions-btn reset'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
