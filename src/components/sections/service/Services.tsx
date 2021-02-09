import React from 'react';
import ServiceCard from '../../service-card/ServiceCard';
import styles from './services.module.css';

const Services = () => {
	return (
		<section className={`section ${styles.services}`}>
			<div className="section__title">
				<h1>services</h1>
			</div>
			<div className={`section__center ${styles.section__services}`}>
				<ServiceCard icon="icon-android" title="App Development">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, iste laborum tenetur
					exercitationem deserunt perspiciatis nam voluptatum ipsa qui, corporis porro!
				</ServiceCard>
				<ServiceCard icon="icon-embed2" title="Web Development">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, iste laborum tenetur
					exercitationem deserunt perspiciatis nam voluptatum ipsa qui, corporis porro!
				</ServiceCard>
				<ServiceCard icon="icon-pencil" title="UI/UX Design">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, iste laborum tenetur
					exercitationem deserunt perspiciatis nam voluptatum ipsa qui, corporis porro!
				</ServiceCard>
			</div>
		</section>
	);
};

export default Services;
