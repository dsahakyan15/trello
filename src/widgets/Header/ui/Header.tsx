import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h4>TrelloDi</h4>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>Desktop</li>
          <li>Sign Up</li>
          <li>User Page</li>
        </ul>
      </div>
    </div>
  )
}
export default Header