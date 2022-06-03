import styles from './NotFoundProduct.module.css'

const NotFoundProduct = ({clearSearch}) => {
  return (
    <div className={styles.card}>
      <h2>No se encontró ningún producto</h2>
      <div className={styles.button_wrapper}>
        <button
          onClick={clearSearch}
          className={styles.button}
        >
          Nueva Busqueda
        </button>
      </div>
    </div>
  )
}

export default NotFoundProduct
