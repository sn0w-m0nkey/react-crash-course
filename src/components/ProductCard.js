import { useState } from 'react'
import styles from './ProductCard.module.css'

export function ProductCard({
  product,
  isFavorite,
  background = 'slategray',
  onPurchase,
  onFavorite,
}) {
  const [stockCount, setStockCount] = useState(product.stockCount)
  const [showMore, setShowMore] = useState(false)

  function handleClick() {
    setStockCount((prevStockCount) => prevStockCount - 1)
    onPurchase(product)
  }

  function handleTwoClicks() {
    // Call setStockCount twice, using functional update to ensure both are applied correctly
    setStockCount((prevStockCount) => prevStockCount - 1)
    setStockCount((prevStockCount) => prevStockCount - 1)
  }

  return (
    <article className={styles.Container} style={{ background }}>
      <button
        className={styles.Favorite}
        onClick={() => onFavorite(product.id)}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <h2>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} width={128} height={128} />

      <p>
        Specification:{' '}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'hide' : 'show'}
        </button>
      </p>
      <p>Specification:</p>
      {showMore && (
        <ul className={styles.Specification}>
          {product.specificiation.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      )}
      <Status stockCount={stockCount} />
      {/* {stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>
          Buy (From ${product.price})
        </button>
      )} */}
      {stockCount > 0 && (
        <>
          <p>Price: ${product.price}</p>
          <button onClick={handleClick}>Buy</button>
        </>
      )}
      {stockCount > 1 && <button onClick={handleTwoClicks}>Buy 2</button>}
    </article>
  )
}

function Status({ stockCount }) {
  const notAvailableTemplate = (
    <p className={styles.NotAvailableStatus}>Out of stock</p>
  )

  const availableTemplate = (
    <p className={styles.AvailableStatus}>In stock: {stockCount}</p>
  )

  return stockCount === 0 ? notAvailableTemplate : availableTemplate
}
