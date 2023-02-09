import React from 'react'
import { Banner } from './components/Banner/Banner'
import './index.css';
import { Categories } from './components/Categories/Categories';
import { Newsletter } from './components/Newsletter/Newsletter';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Categories />
      <Newsletter />
    </React.Fragment>
  )
}

export default App
