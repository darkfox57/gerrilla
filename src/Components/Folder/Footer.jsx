import React from 'react'
import Logo from '../../utils/Logo'
import styles from './footer.module.scss'

export default function Footer() {
  const quicklinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Projects', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  const legalLinks = [
    { name: 'Terms', link: '/' },
    { name: 'Conditions', link: '/' },
    { name: 'Policy', link: '/' },
  ]

  const socialMedia = [
    { name: 'Facebook', link: '/' },
    { name: 'Twitter', link: '/' },
    { name: 'Youtube', link: '/' },
    { name: 'Linkedin', link: '/' },
  ]

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <section className={styles.info}>
            <Logo />
            <div className={styles.infoItem}>
              <span>
                2118 Thornridge Cir.
                <br />
                Dubai, UAE 35624
              </span>
            </div>
            <div className={styles.infoItem}>
              <span>+33 415 65356 - 9</span>
            </div>
            <div className={styles.infoItem}>
              <span>contact@lugar.com</span>
            </div>
          </section>
          <section className={styles.menu}>
            <div>
              <h3>Quick links</h3>
              <ul>
                {quicklinks.map(({ name, link }, index) => (
                  <li key={index}>
                    <a href={link}></a>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Legal links</h3>
              <ul>
                {legalLinks.map(({ name, link }, index) => (
                  <li key={index}>
                    <a href={link}></a>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Social media</h3>
              <ul>
                {socialMedia.map(({ name, link }, index) => (
                  <li key={index}>
                    <a href={link}></a>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <span>Copyright @ 2022 Lugar Inc.</span>
      </footer>
    </>
  )
}
