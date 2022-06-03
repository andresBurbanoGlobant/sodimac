import styles from './ProductCard.module.css'

const ProductCard = ({name, sku, price, image}) => {
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>{sku}</p>
      <p>{price}</p>
      <p>{image}</p>
    </div>
  )
}

export default ProductCard
