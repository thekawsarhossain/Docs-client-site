import React from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import MakeAdmin from '../../components/DashboardLayout/MakeAdmin/MakeAdmin';

const makeAdmin = () => {
    return (
        <div>
            <DashboardLayout>
                <MakeAdmin/>
            </DashboardLayout>
        </div>
    );
};

export default makeAdmin;