import styles from './Input.module.css'

const Input = () => {
  return (
    <div className={styles.input_group}>
      <input className={styles.input} type="number" placeholder="Digita el SKU"/>
    </div>
  )
}

export default Input
