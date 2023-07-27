import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}