import styles from './Input.module.css'

const Input = ({onChange, value}) => {
  return (
    <div className={styles.input_group}>
      <input 
        className={styles.input} 
        type="number" 
        placeholder="Digita el SKU"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
