import React from 'react';
import { Outlet } from 'react-router-dom';

const Javascript = () => {
    return (
        <div>

            <h1 className="text-center">JavaScript</h1><hr />
            <Outlet />
        </div>
    );
}

export default Javascript;
