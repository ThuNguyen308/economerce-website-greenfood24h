import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layouts/DefaultLayout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout children={<Home />} />} />
                    <Route path="/posts" element={<DefaultLayout children={<Posts />} />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<DefaultLayout children={<About />} />} />
                    <Route path="/contact" element={<DefaultLayout children={<Contact />} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
