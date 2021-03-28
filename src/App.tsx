import { useEffect, useState } from 'react'
import { FilterPanel, Grid, PageHeader, UserCard } from './components'
import { getAllUsers } from './apis'
import { User } from './types/user.type'
import './styles/main.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
  }, [])

  const handleOnReset = () => {
    // eslint-disable-next-line
    console.log('onReset...')
  }

  const handleOnSearch = (val: string) => {
    // eslint-disable-next-line
    console.log('onSearch', val)
  }

  return (
    <>
      <PageHeader title='Team Users' />
      <FilterPanel onReset={handleOnReset} onSearch={handleOnSearch} />
      <Grid>
        {users.map((user: User) => {
          const {
            name,
            email,
            phone,
            company: { name: companyName },
          } = user
          return (
            <UserCard
              key={user.id}
              name={name}
              email={email}
              company={companyName}
              phone={phone}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default App
