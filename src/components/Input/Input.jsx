import styles from './Input.module.css'

const Input = ({onChange, value, inputAlert}) => {
  return (
    <div className={styles.input_group}>
      <div className={styles.input_warpper}>
        <input 
          className={styles.input} 
          type="number" 
          placeholder="Digita el SKU"
          onChange={onChange}
          value={value}
        />
      </div>
      { inputAlert 
        ? (
          <div className={styles.input_alert}>
            <span>El codigo debe tener de 4 a 7 digitos</span>
          </div>
        ) : null
      }
    </div>
  )
}

export default Input
