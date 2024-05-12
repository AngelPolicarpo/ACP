import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../styles/Page.module.css";

export default function Home() {
  return (
<>
  <Header />
  <main className={styles.main}>
    <section className={styles.section}>
      <video src={'video.mp4'} type="video/mp4" className={styles.video} autoPlay muted loop></video>
    </section>
    <section>

    </section>
    <section>
      
    </section>
  </main>
  <Footer />
</>
  );
}
