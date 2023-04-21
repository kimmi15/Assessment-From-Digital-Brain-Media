import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  return (
    <>
      <BrowserRouter>  {/*en}able single page application*/}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
