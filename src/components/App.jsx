import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Success from './Success';

function App() {
    return <div> <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    </Router>
    </div>
}

export default App;