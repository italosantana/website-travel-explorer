import React from 'react'
import { Banner } from './components/Banner/Banner'
import './index.css';
import { Categories } from './components/Categories/Categories';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/* <Banner /> */}
        {/* <Categories /> */}
        <Testimonial />
        <Newsletter />
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
