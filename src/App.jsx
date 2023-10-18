import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './component/Shared/Layout'
import Dashbaord from './component/Dashbaord'
import Products from './component/Products'
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Dashbaord />} />
                  <Route path='Products' element={<Products/>} />
                  <Route path='Dashbaord' element={<Dashbaord/>} />
               
              </Route>
             
       
          </Routes>
      </Router>
  )
}

export default App