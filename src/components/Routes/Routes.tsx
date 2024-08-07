import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro';
import Dashboard from '../Dashboard/Dashboard';

function AppRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;