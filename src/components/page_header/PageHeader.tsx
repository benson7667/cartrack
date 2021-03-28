import '../../styles/main.css'
import './pageHeader.css'

interface Props {
  title: string
}

const PageHeader = (props: Props) => {
  const { title } = props

  return (
    <header className='shadow-border'>
      <div className='app-container'>
        <h1 className='page-header__title'>{title}</h1>
      </div>
    </header>
  )
}

export default PageHeader
