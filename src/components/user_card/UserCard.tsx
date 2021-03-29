import './userCard.css'

interface Props {
  name: string
  email: string
  company: string
  phone: string
  isTarget?: boolean
}

const UserCard = (props: Props) => {
  const { name, email, company, phone, isTarget } = props

  const getStyle = () => {
    if (isTarget) return { border: '2px solid black' }
    return {}
  }

  return (
    <div className='usercard__container' style={getStyle()}>
      <h2 className='usercard__username'>{name}</h2>
      <div className='usercard__info'>
        <div className='usercard__info-left'>
          <div className='usercard__info-row'>
            <i className='icon fa fa-envelope'></i>
            <span>{email}</span>
          </div>
          <div className='usercard__info-row'>
            <i className='icon fa fa-building'></i>
            <span>{company}</span>
          </div>
          <div className='usercard__info-row'>
            <i className='icon fa fa-phone'></i>
            <span>{phone}</span>
          </div>
        </div>
        <div className='usercard__info-right'>
          <a href={`mailto:${email}`} className='usercard__contact-btn'>
            Contact by Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default UserCard
