import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar'

function App() {
  return (
    <div>
      <NavBar />
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default App
