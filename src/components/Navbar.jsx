import { Container } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-center md:justify-between p-4'>
        <a href="#" className='flex items-center text-3xl font-bold md:text-xl'>
            <Container className='mr-2' />
            P
            <span className='text-accent'>DEV</span>
        </a>
        <ul className='hidden md:flex space-x-4'>
            <li>
                <a href="#Home" className='btn btn-sm btn-ghost'>Accueil</a>
            </li>
            <li>
                <a href="#Apropos" className='btn btn-sm btn-ghost'>A propos</a>
            </li>
            <li>
                <a href="#Competences" className='btn btn-sm btn-ghost'>Mes competences</a>
            </li>
            <li>
                <a href="#Projets" className='btn btn-sm btn-ghost'>Mes projets</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar