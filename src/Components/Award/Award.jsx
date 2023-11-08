import React from 'react'
import awardImg from '../../assets/award-lugar.jpg'
import Counter from '../../utils/counter'
import styles from './award.module.scss'

export default function Award() {
  return (
    <section className={styles.wrapper}>
      <img src={awardImg} alt="Award winning real estate company in Dubai" />
      <div className={styles.content}>
        <h3>Award winning real estate company in Dubai</h3>
        <p>
          Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra
          scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis
          ornare magna.
        </p>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <p>Previous projects</p>
            <div>
              <Counter cuenta={34} />
              <span>+</span>
            </div>
          </div>
          <div className={styles.counter}>
            <p>Years Experience</p>
            <div>
              <Counter cuenta={20} />
              <span>y</span>
            </div>
          </div>
          <div className={styles.counter}>
            <p>Ongoing project</p>
            <div>
              <Counter cuenta={12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
