import { FC } from 'react'
import '../../styles/main.css'
import './grid.css'

const Grid: FC<{}> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props

  return (
    <div className='app-container'>
      <div className='grid__container'>{children}</div>
    </div>
  )
}

export default Grid
