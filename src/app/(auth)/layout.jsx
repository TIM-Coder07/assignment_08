import Navbar from '@/Component/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {children}
        </div>
    );
};

export default AuthLayout;