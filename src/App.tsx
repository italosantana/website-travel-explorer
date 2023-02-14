import React from 'react'
import { Banner } from './components/Banner/Banner'
import './index.css';
import { Categories } from './components/Categories/Categories';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Termonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Categories />
      <Termonial />
      <Newsletter />
      <Footer />
    </React.Fragment>
  )
}

export default App
