import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Header, Container, Footer, Loading} from './components/index'
import Home from './components/pages/Home/Home'
import Product from './components/pages/Product/Product'

const App = () => {
    return(
        <>
            <Router>
                <Loading />
                <Header title="Restaurant Yassine" />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home title="Restaurant Yassine" />} />
                        <Route path='/product' element={<Product title="Restaurant Yassine" />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}

export default App