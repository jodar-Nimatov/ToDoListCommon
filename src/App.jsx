import './style.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Faq from './pages/Faq/Faq';
import Counter from './pages/Counter/Counter';

function App () {
  // Айжамал эже сказала сделать навигацию поэтому будем работать с react-router-dom
    return (
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/counter' element={<Counter/>}/>
          </Route>
        </Routes>
    )
}

export default App