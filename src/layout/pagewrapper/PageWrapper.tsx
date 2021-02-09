import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './pagewrapper.module.css';

interface PageWrapperProps{
    
}



const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default PageWrapper
