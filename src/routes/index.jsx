import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Social from '../pages/social';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/social" element={<Social />} />
        </Routes>
    )
}