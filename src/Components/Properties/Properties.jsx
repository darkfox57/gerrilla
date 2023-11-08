import axios from 'axios'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import PropertyCard from '../PropertyCard/PropertyCard'
import styles from './properties.module.scss'

export default function Properties() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [limit, setLimit] = useState(3)
  const [filter, setFilter] = useState('All')
  const categories = ['Apartment', 'House', 'Penthouse', 'Villa']

  const accessToken = 'TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk'

  const fetchData = () => {
    setIsLoading(true)
    const graphqlEndpoint =
      'https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm'
    const graphqlQuery = `
      {
        propertyCollection(limit: 6) {
          items {
            id
            title
            address
            category
            image {
              url
            }
          }
        }
      }
    `

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }

    axios
      .post(graphqlEndpoint, { query: graphqlQuery }, { headers })
      .then((response) => {
        setData(response.data.data.propertyCollection.items)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error)
        setIsLoading(false)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  const loadMore = () => {
    setLimit(limit + 3)
    fetchData()
  }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const filteredData =
    filter === 'All' ? data : data.filter((item) => item.category === filter)

  return (
    <section className={styles.wrapper}>
      <h3>Properties</h3>
      <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      <div className={styles.filter}>
        <span>
          <span onClick={() => handleFilterChange('All')}>All categories</span>
          <ChevronDown />
        </span>
        <ul>
          {categories.map((category, index) => (
            <option key={index} onClick={() => handleFilterChange(category)}>
              {category}
            </option>
          ))}
        </ul>
      </div>
      <div className={styles.properties}>
        {filteredData
          .slice(0, limit)
          .map(({ id, title, address, image, category }) => (
            <PropertyCard
              key={id}
              title={title}
              address={address}
              image={image.url}
              category={category}
            />
          ))}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button className="primary-btn" onClick={() => loadMore()}>
          <span>Load more</span>
        </button>
      )}
    </section>
  )
}
