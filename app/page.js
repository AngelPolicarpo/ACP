"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import styles from "../styles/Page.module.css";
import "../styles/stars.css";

export default function Home() {
  useEffect(() => {
    const meuBotao = document.getElementById("meuBotao");
    const meuVideo = document.getElementById("meuVideo");

    const handleMouseEnter = () => {
      meuVideo.style.filter = "brightness(40%) grayscale(0%) blur(4px)";
    };

    const handleMouseLeave = () => {
      meuVideo.style.filter = "brightness(30%) grayscale(60%) blur(4px)";
    };

    meuBotao.addEventListener("mouseenter", handleMouseEnter);
    meuBotao.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      meuBotao.removeEventListener("mouseenter", handleMouseEnter);
      meuBotao.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <div className={styles.videoContainer}>
            <video
              id="meuVideo"
              src={"video.webm"}
              type="video/webm"
              className={styles.video}
              autoPlay
              muted
              loop
            ></video>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <span>Corpo perfeito</span> é arte e disciplina
              </div>
              <div className={styles.subtitle}>
                onde cada esforço revela nossa melhor versão
              </div>
              <button id="meuBotao" className={styles.button}>
                MATRICULE-SE
              </button>
            </div>
          </div>
        </section>
        <section className={styles.reviewsSection}>
          <h1>LEIA NOSSAS AVALIAÇÕES</h1>
          <p>
            Não acredite em nós, use como referência nossos clientes.
          </p>
          <div>
            <div>
              <div>
                <img
                  src="https://scontent.fgig29-1.fna.fbcdn.net/v/t39.30808-1/300370681_466741268801886_1866408964238933771_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DewTxXg5w3kQ7kNvgHz29xL&_nc_ht=scontent.fgig29-1.fna&oh=00_AYBBhSiWBXG4UFla820uv6VH58571noMaub4IJXZIXiwjw&oe=664B48A9"
                ></img>
                <div>
                  <div>
                    Academia Corpo Perfeito
                  </div>
                  <div>
                    desde 19 de agosto de 1997
                  </div>
                </div>
              </div>
              <div>
                <span className="starProfile on"></span>
                <span className="starProfile on"></span>
                <span className="starProfile on"></span>
                <span className="starProfile on"></span>
                <span className="starProfile half"></span>
              </div>
              <div>
                São mais de 400 avaliações no Google
              </div>
              <div>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJ3e_AOzx7mQARayujyFgBRVc"
                >
                  ESCREVA UM DEPOIMENTO
                </a>
              </div>
            </div>
          <Reviews />
        </div>
        </section>
        <section id="offers" className={styles.offersSection}>
          <h1 className={styles.offersTitleH1}>ESCOLHA SEU PLANO IDEAL</h1>
          <p className={styles.offersDescriptionP}>
            Os melhores equipamentos e infraestrutura com mensalidades
            acessíveis.
          </p>
          <article className={styles.offersArticle}>
            <div className={styles.offersContainer}>
              <div>
                <h2 className={styles.titleOffersH2}>
                  Plano <b>Exemplo</b>
                </h2>
                <p className={styles.descriptionOffersP}>Descrição do plano</p>
              </div>
              <div>
                <ul className={styles.offersUl}>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto longo para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto muito mais longo para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto extremamente muito mais longo para servir de exemplo
                    </div>
                  </li>
                </ul>
                <div className={styles.offersPriceDiv}>
                  <small>A PARTIR DE</small>
                  <strong className={styles.offersPriceStrong}>R$ 9,90*</strong>
                  <p className={styles.offersPriceP}>
                    <b>no 1º mês</b>, depois R$ 139,90/mês
                  </p>
                </div>
              </div>
              <button className={styles.offersButton}>COMEÇAR AGORA</button>
            </div>
            <div className={styles.offersContainer}>
              <div>
                <h2 className={styles.titleOffersH2}>
                  Plano <b>Exemplo</b>
                </h2>
                <p className={styles.descriptionOffersP}>Descrição do plano</p>
              </div>
              <div>
                <ul className={styles.offersUl}>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto longo para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto muito mais longo para servir de exemplo
                    </div>
                  </li>
                  <li className={styles.offersLi}>
                    <div className={styles.offersTextDiv}>
                      <img
                        className={styles.checkedSvg}
                        src="/images/checked.svg"
                      ></img>
                      Texto extremamente muito mais longo para servir de exemplo
                    </div>
                  </li>
                </ul>
                <div className={styles.offersPriceDiv}>
                  <small>A PARTIR DE</small>
                  <strong className={styles.offersPriceStrong}>R$ 9,90*</strong>
                  <p className={styles.offersPriceP}>
                    <b>no 1º mês</b>, depois R$ 139,90/mês
                  </p>
                </div>
              </div>
              <button className={styles.offersButton}>COMEÇAR AGORA</button>
            </div>
          </article>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.aboutImg}>
            <div className={styles.aboutContainer}>
              <h1>CONSTRUIDA PARA TRAZER OS MELHORES RESULTADOS </h1>
              <p>
                Com 27 anos de excelência, a <b>Academia Corpo Perfeito</b> é
                referência em saúde e bem-estar. Oferecemos aulas exclusivas,
                como o <b>Dance Mix</b>, e um <b>aplicativo</b> inovador para
                você planejar e acompanhar seus treinos. Nossa missão é inspirar
                e capacitar cada indivíduo a alcançar o corpo perfeito. Junte-se
                a nós e transforme sua vida hoje mesmo!
              </p>
            </div>
          </div>
        </section>
        <section className={styles.helpSection}>
          <div className={styles.helpImg}>
            <div className={styles.helpContainer}>
              <h1> Não encontrou o que procura? </h1>
              <div className={styles.helpButtonsContainer}>
                <a className={styles.helpBtn}>FALE CONOSCO</a>
                <a className={styles.helpBtn}>DÚVIDAS FREQUENTES</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
