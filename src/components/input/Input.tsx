import React from 'react'
import './input.css'

interface Props {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Input = (props: Props) => {
  const { value, onChange, placeholder = '' } = props
  return (
    <>
      <input
        className='app__input'
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
