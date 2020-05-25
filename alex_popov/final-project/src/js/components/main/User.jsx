import React from 'react';

import UserInformation from './UserInformation';
import UserSchedule from './UserSchedule';
import Footer from '../Footer/Footer.jsx';

class User extends React.Component {

    render() {
        return (
            <>
                <div className="container_main">
                    <UserInformation />
                    <UserSchedule />
                </div>
                <Footer footerClassName='footer footer-dark' />
            </>
        )
    }
}

export default User;