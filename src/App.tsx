import { FilterPanel, Grid, PageHeader, UserCard } from './components'
import './styles/main.css'

function App() {
  const handleOnReset = () => {}

  const handleOnSearch = (val: string) => {
    // eslint-disable-next-line
    console.log(val)
  }

  return (
    <>
      <PageHeader title='Team Users' />
      <FilterPanel onReset={handleOnReset} onSearch={handleOnSearch} />
      <Grid>
        <UserCard
          company='Daimler South East Asia'
          email='benson.toh@daimler.com'
          name='Toh Ban Soon Toh Ban Soon Toh Ban Soon'
          phone='+6590449045'
        />
        <UserCard
          company='Daimler South East Asia'
          email='benson.toh@daimler.com'
          name='Benson Toh'
          phone='+6590449045'
        />
        <UserCard
          company='Daimler South East Asia'
          email='benson@daimler.com'
          name='Benson Toh Ban Soon'
          phone='+6590449045'
        />
        <UserCard
          company='Daimler South East Asia Daimler South East Asia Daimler South East Asia'
          email='benson.toh@daimler.com'
          name='Benson Toh'
          phone='+6590449045'
        />
        <UserCard
          company='Daimler South East Asia'
          email='benson.toh@daimler.com'
          name='Benson Toh'
          phone='+6590449045'
        />
      </Grid>
    </>
  )
}

export default App
