import styles from './Input.module.css'

const Input = ({onChange}) => {
  return (
    <div className={styles.input_group}>
      <input 
        className={styles.input} 
        type="number" 
        placeholder="Digita el SKU"
        onChange={onChange}
      />
    </div>
  )
}

export default Input
