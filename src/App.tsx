import { useEffect, useState } from 'react'
import { FilterPanel, Grid, PageHeader, UserCard } from './components'
import { getAllUsers } from './apis'
import { User } from './types/user.type'
import './styles/main.css'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoadingUser] = useState(false)
  const [defaultList, setDefaultList] = useState([])

  useEffect(() => {
    getResult()
  }, [])

  const getResult = () => {
    setIsLoadingUser(true)
    getAllUsers()
      .then((data) => {
        setUsers(data)
        setDefaultList(data) // make a original copy to defaultList
      })
      .finally(() => {
        setIsLoadingUser(false)
      })
  }

  const handleOnReset = () => {
    setUsers(defaultList)
  }

  // remove whitespace and convert to lowerCase
  const processString = (str: string) => {
    const noWhiteSpaceStr = str.replace(/\s+/g, '')
    const lowerCaseStr = noWhiteSpaceStr.toLowerCase()
    return lowerCaseStr
  }

  const handleOnSearch = (val: string) => {
    // take defaultList and do the filters
    const processedQueryStr = processString(val)

    const searchResults = defaultList.filter((item: User) => {
      const processedNameStr = processString(item.name)
      if (processedNameStr.includes(processedQueryStr)) return true

      const processedEmailStr = processString(item.email)
      if (processedEmailStr.includes(processedQueryStr)) return true

      return false
    })

    setUsers(searchResults)
  }

  const renderContent = () => {
    if (isLoading) {
      return <h1>Loading...</h1>
    }

    if (!isLoading && users && !users.length) {
      return <h1>No Result Found</h1>
    }

    return users.map((user: User) => {
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
    })
  }

  return (
    <>
      <PageHeader title='Team Users' />
      <FilterPanel onReset={handleOnReset} onSearch={handleOnSearch} />
      <Grid>{renderContent()}</Grid>
    </>
  )
}

export default App
