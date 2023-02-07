import React from 'react'
import { Banner } from './components/Banner/Banner'
import './index.css';
import { Categories } from './components/Categories/Categories';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Categories />
    </React.Fragment>
  )
}

export default App
