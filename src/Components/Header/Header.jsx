import React, { useEffect, useState } from 'react'
import Logo from '../../utils/Logo'
import styles from './header.module.scss'

export default function Header() {
  const [scroll, setScroll] = useState(false)

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about-me/' },
    { name: 'Projects', link: '/projects/' },
    { name: 'Contact', link: '/contact/' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScroll(true)
      if (window.scrollY <= 200) setScroll(false)
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.wrapper} ${scroll ? styles.scroll : ''}`}>
      <Logo />
      <nav>
        <ul>
          {menu.map(({ name, link }, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
