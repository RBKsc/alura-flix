import HeaderLink from "../HeaderLInk/headerLink"
import styles from "./header.module.css"
import logo from "./Logo.svg"

function Header (){
    return (
        <header className={styles.head}>
            <section className={styles.containerlogo}>
            <img src={logo} alt="logo"/>
            </section>

            <nav>
                <HeaderLink url="/">
                    <button>Home</button>
                </HeaderLink>
                <HeaderLink url="./NuevoVideo">
                    <button>Nuevo Video</button>
                </HeaderLink>
            </nav>

            

        </header>
    )
}

export default Header