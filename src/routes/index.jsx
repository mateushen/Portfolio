import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
    )
}