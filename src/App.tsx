import { useEffect, useRef, useState } from 'react'
import { FilterPanel, Grid, PageHeader, UserCard } from './components'
import { getAllUsers } from './apis'
import { User } from './types/user.type'
import './styles/main.css'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoadingUser] = useState(false)
  const [defaultList, setDefaultList] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  const usersRef = useRef(users)
  const activeIndexRef = useRef({})

  useEffect(() => {
    getResult()
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const getResult = () => {
    setIsLoadingUser(true)
    getAllUsers()
      .then((data) => {
        setUsers(data)
        setDefaultList(data) // make a original copy to defaultList
        usersRef.current = data
      })
      .finally(() => {
        setIsLoadingUser(false)
      })
  }

  function increment() {
    setActiveIndex((prev) => {
      const maxCount = usersRef.current.length - 1
      const newValue = prev === maxCount ? prev : prev + 1
      activeIndexRef.current = usersRef.current[newValue]
      return newValue
    })
  }

  function decrement() {
    setActiveIndex((prev) => {
      const newValue = prev === 0 ? prev : prev - 1
      activeIndexRef.current = usersRef.current[newValue]
      return newValue
    })
  }

  function sendEmailToTargetPerson() {
    const user = activeIndexRef.current as any
    alert(`Send email to: ${user.email}`)
  }

  function handleKeyDown(e: any) {
    if (!e.code) return

    // TODO: move this into custom hooks
    switch (e.code) {
      case 'ArrowUp':
        decrement()
        break

      case 'ArrowDown':
        increment()
        break

      case 'ArrowLeft':
        decrement()
        break

      case 'ArrowRight':
        increment()
        break

      case 'Enter':
        sendEmailToTargetPerson()
        break

      default:
        break
    }
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
    usersRef.current = searchResults

    setActiveIndex(0)
    activeIndexRef.current = 0
  }

  const renderContent = () => {
    if (isLoading) {
      return <h1>Loading...</h1>
    }

    if (!isLoading && users && !users.length) {
      return <h1>No Result Found</h1>
    }

    return users.map((user: User, index: number) => {
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
          isTarget={activeIndex === index}
        />
      )
    })
  }

  return (
    <>
      <PageHeader title='Team Users' />
      <FilterPanel onReset={handleOnReset} onSearch={handleOnSearch} />
      <div className='app-container'>
        <p className='box-wrapper'>
          Hi, I am not sure how do you want the interface to be navigate via keyboard.{' '}
          <br></br>
          However, you can move the active cursor by using keyboard arrow and press Enter
          to send an email to the target person
        </p>
      </div>

      <Grid>{renderContent()}</Grid>
    </>
  )
}

export default App
