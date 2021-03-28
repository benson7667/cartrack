import React from 'react'
import './input.css'

interface Props {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
  const { value, onChange } = props
  return (
    <>
      <input className='app__input' onChange={onChange} value={value} />
    </>
  )
}

export default Input
