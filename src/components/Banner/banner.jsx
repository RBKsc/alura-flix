import styles from "./banner.module.css"

function Banner (){
    return (
        <section className={styles.bannerContainer}>
            <figure className={styles.container}>
            <div className={styles.categoria}>Front End</div>
            <div className={styles.title}>Challenge React</div>
                <p className={styles.description}>Este challenge es una forma de aprendizaje. 
                            Es un mecanismo donde podrás comprometerte en la 
                            resolución de un problema para poder aplicar todos 
                            los conocimientos adquiridos en la formación React.
                </p>
                
            </figure>
            <div>
            <iframe 
            src="https://www.youtube.com/embed/ov7vA5HFe6w?si=aNuE-Wio0xFJQgNS" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> 
            
            </iframe>
            </div>
           
            </section>
    )
}

export default Banner