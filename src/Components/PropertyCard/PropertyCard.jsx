import { MapPin } from 'lucide-react'
import React from 'react'
import styles from './card.module.scss'

export default function PropertyCard({ id, title, address, image, category }) {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>
          <MapPin />
          {address}
        </p>
      </div>
    </article>
  )
}
