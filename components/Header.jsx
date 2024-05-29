'use client';
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topcontainer}>
                <div className={styles.container}>
                    <div>
                        <img src="file.svg"></img>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.middleNav}>
                            <li className="li" href="#offers">PLANOS</li>
                            <li className="li">CONTATO</li>
                            <li className="li">APLICATIVO</li>
                            <li className="li">BLOG</li>
                            <li className="li BASDA">ENTRAR</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};