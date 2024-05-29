'use client';
import styles from "../styles/Footer.module.css";
import Link from "next/link";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.linksContainer}>
          <span>EMPRESA</span>
          <div>          <Link href="/company">SOBRE A EMPRESA</Link>
          <Link href="/privacy">CENTRAL DE PRIVACIDADE</Link>
          <Link href="/careers">TRABALHE CONOSCO</Link>
          <Link href="/franchise">SEJA UM FRANQUEADO</Link></div>

        </div>
        <div className={styles.appsContainer}>
          <span>FACILITE OS TREINOS COM NOSSO APLICATIVO</span>
          <div className={styles.appLinks}>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="images/playstore.svg" alt="Google Play" className={styles.appBadge} />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img src="images/apple.svg" alt="App Store" className={styles.appBadge} />
            </a>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <span>SIGA NOSSAS REDES SOCIAIS</span>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="images/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.companyInfo}>
          <p>
          © 2023 Academia Corpo Perfeito. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
