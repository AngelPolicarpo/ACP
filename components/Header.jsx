'use client';
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>      
                <nav className={styles.nav}>
                    <div className={styles.ul}>
                        <a className="li">LOGO</a>
                        <a className="li" href="#offers">PLANOS</a>
                        <a className="li">CONTATO</a>
                        <a className="li">APLICATIVO</a>
                        <a className="li">BLOG</a>
                        <a className="li">LOGIN</a>
                    </div>
                </nav>
            </div>

        </header>
    );
};