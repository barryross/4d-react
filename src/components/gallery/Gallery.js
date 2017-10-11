import React from 'react'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'
const Gallery =  () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
        <PortfolioFilters/>
        <PortfolioItems/>
 
    </section>
  )
}

export default Gallery
