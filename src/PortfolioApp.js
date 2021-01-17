import React from 'react'
import { Hero } from './components/ui/Hero'
import { About } from './components/ui/About';
import { Projects } from './components/ui/Projects';
import { Contact } from './components/ui/Contact';
import { Footer } from './components/ui/Footer';


export const PortfolioApp = () => {

    return (
        <>
            <Hero />
            <main>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
