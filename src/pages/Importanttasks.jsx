import React from 'react';
import Cards from '../components/Home/Cards';
import './styles.css';

const ImportantTasks = () => {
    return (
        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            <Cards home={"false"} />
        </div>
    );
}

export default ImportantTasks;