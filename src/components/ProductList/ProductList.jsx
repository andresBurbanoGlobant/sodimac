import styles from './ProductList.module.css'

const ProductList = ({ children }) => {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  )
}

export default ProductList
