import styles from './footer.module.css';
import logo from './Logo.svg'

function Footer() {
    return (
        <footer className={styles.container}>
       
        <img src={logo} alt="logo"/>
        </footer>
    )
}

export default Footer;