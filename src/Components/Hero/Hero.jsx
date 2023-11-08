import React from 'react'
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <h2>
        A home is
        <br />
        built with love
        <br />
        and dreams
      </h2>
      <p>Real estate farm that makes your dreams true</p>
      <div>
        <a href="#" className="primary-btn">
          <span>Our projects</span>
        </a>
        <a href="#" className="secondary-btn">
          Contact us
        </a>
      </div>
    </section>
  )
}
