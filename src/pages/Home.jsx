import React from 'react';
import Sidebar from '../components/Home/Sidebar';
import { Outlet } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row h-[98vh] gap-4 p-4">
            {/* Sidebar */}
            <div className="w-full md:w-1/6 h-full border border-gray-500 rounded-xl p-4 flex flex-col justify-between">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-full md:w-5/6 h-full border border-gray-500 rounded-xl p-4">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
