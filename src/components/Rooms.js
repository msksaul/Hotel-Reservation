import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'

export default function Rooms() {
  return (
    <Hero hero='roomsHero'>
      <Banner title='our rooms'>
        <Link to='/' className='btn-primary'>
          return home
        </Link> 
      </Banner>
    </Hero>
  )
}
