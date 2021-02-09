import React from 'react'
import Hero from '../components/hero/Hero'
import PageWrapper from '../layout/pagewrapper/PageWrapper'

interface HomeProps{

}

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <PageWrapper>
            <Hero/>
        </PageWrapper>
    )
}

export default Home
