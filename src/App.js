import { Fragment } from 'react'
import { ProductList } from './components/ProductList'
import { ProductCard } from './components/ProductCard'
import './App.css'

function App() {
  const products = [
    {
      imgSrc: 'images/iphone.png',
      title: 'iPhone 15 Pro',
      specificiation: [
        'A17 Pro chip with 6-core GPU',
        '3x or 5x Telephoto camera',
        'Up to 29 hours video playback',
      ],
      price: 999,
      stockCount: 10,
    },
    {
      imgSrc: 'images/airpods.png',
      title: 'Airpods Pro 2',
      specificiation: [
        'Noise Cancellation',
        'Dust, sweat and water resistant',
        'Up to 6 hours of listening time',
      ],
      price: 249,
      stockCount: 0,
    },
    {
      imgSrc: 'images/apple-watch.png',
      title: 'Apple Watch 9',
      specificiation: [
        '45mm or 41mm case size',
        'Always-On Retina display',
        'Up to 18 hours normal use',
      ],
      price: 399,
      stockCount: 6,
    },
  ]

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`)
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => (
          <ProductCard
            product={product}
            onPurchase={handlePurchase}
            key={product.title}
          />
        ))}
      </ProductList>

      <h2>Products which cost up to $500</h2>

      {products
        .filter(({ price }) => price < 500)
        .map(({ title, price }) => (
          <Fragment key={title}>
            <hr className="ListDivider" />
            <p className="ListTitle">
              {title} - ${price}
            </p>
          </Fragment>
        ))}
    </div>
  )
}

export default App
