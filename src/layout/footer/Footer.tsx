import React from 'react'
import styles from './footer.module.css';

interface FooterProps{

}



const Footer: React.FC<FooterProps> = () => {
    return (
        <React.Fragment>
            <footer className={styles.footer}>
        <div className={styles.footer__center}>
            <section className={styles.footer__about}>
                <h4>about me</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloribus?</p>
                <p>Copyright &copy; 2021 All rights reserved</p>
            </section>
                    <section className={styles.social}>
                <h4>follow me</h4>
                <p>Let us be social</p>
                        <div className={styles.footer__social__icons}>
                            <svg className={styles.footer__social__icon}>
                        <use href="images/sprite.svg#icon-facebook"></use>
                    </svg>
                            <svg className={styles.footer__social__icon}>
                        <use href="images/sprite.svg#icon-instagram"></use>
                    </svg>
                            <svg className={styles.footer__social__icon}>
                        <use href="images/sprite.svg#icon-twitter"></use>
                    </svg>
                            <svg className={styles.footer__social__icon}>
                        <use href="images/sprite.svg#icon-linkedin2"></use>
                    </svg>
                </div>
            </section>
        </div>
    </footer>
        </React.Fragment>
    );
}

export default Footer
