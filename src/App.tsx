import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ModalCompiler } from './modals/compiler'
import { LandingPage } from './pages/landingPage'
import { useSelector } from 'react-redux'
import type { RootState } from './redux/store'
import { HomePage } from './pages/homePage'
import { BetsPage } from './pages/betsPage'
import { ProfilePage } from './pages/profilePage'

function App() {
  const user = useSelector((state:RootState) => state.users.currentAccount);

  return (
    <>
      <ModalCompiler/>
      <Routes>
        {user.name == '' ? <Route path='/' element={<LandingPage/>}/>
          : <Route path='/' element={<HomePage/>}/>  
        }
        <Route path='/bets' element={<BetsPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
