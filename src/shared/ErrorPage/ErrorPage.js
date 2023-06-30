
import React, { useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
import classes from './ErrorPage.module.css';
import { Sidebar } from '../layout/Sidebar/Sidebar';
const ErrorPage = (props) => {
    return <React.Fragment>
        <main>
            <Sidebar />
            <div className={classes['error-wrap']}>
                <h1>Oops!! could not found page.</h1>
            </div>
            {/* <Footer/> */}
        </main>
    </React.Fragment>
}
export default ErrorPage;