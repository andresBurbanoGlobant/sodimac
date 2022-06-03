import styles from './ProductCard.module.css'

const ProductCard = ({name, sku, price, image}) => {
  return (
    <li className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.card_image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.card_info}>
          <div className={styles.product_info}>
            <h2>{name}</h2>
            <p>{`sku: ${sku}`}</p>
          </div>
          <p className={styles.product_price}>{`$ ${price}`}</p>
        </div>
      </div>
    </li>
  )
}

export default ProductCard
