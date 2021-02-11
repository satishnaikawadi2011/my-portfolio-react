import React from 'react';
import Socialicons from '../../components/social-icons/Socialicons';
import styles from './footer.module.css';

interface FooterProps {}

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
						<Socialicons color="white" />
					</section>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
