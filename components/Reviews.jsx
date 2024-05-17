'use client';
import {Carousel} from 'react-responsive-carousel';
import "../styles/carousel.css"
import styles from "../styles/Reviews.module.css"

const Reviews = () => {
  // Exemplo de dados de avaliações
  const reviewsData = [
    {
      id: 1,
      name: 'João Silva',
      date: '10 de maio de 2024',
      stars: 5,
      text: 'Buscamos relacionar as noções de língua, sujeito, texto e discurso no espaço virtual que contribuem para a interação dos sujeitos em Redes Sociais. Partindo do estudo de diversos autores que seguem os pressupostos da Análise de Discurso, as reflexões aqui abordadas buscam compreender esse espaço discursivo que as Redes Sociais oferecem ao sujeito (autor e leitor). A pesquisa realizada encontra-se mais especificamente no Facebook, fazendo uso de uma organização textual específica: o Textão, que, na nossa leitura, é lugar para diversas formas de expressão em que o sujeito encontra um espaço para significar o seu dizer. Para tanto, executaremos uma análise teórica, com base em Michel Pêcheux, Eni Orlandi, Cristiane Dias, entre outros, da utilização dessa ferramenta Textão, em Redes Sociais, como forma de significância do dizer dos sujeitos.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjU9AB4LXVHYLRgcPd4z9g9ut3VskgaaUGcIN0o99zKbKoY7ZcH6UQ=w36-h36-p-rp-mo-br100',
    },
    {
      id: 2,
      name: 'Maria Souza',
      date: '8 de maio de 2024',
      stars: 4,
      text: 'Gostei bastante, mas a entrega poderia ser mais rápida.',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjV7QfT7Q9gnPoT8Og4NMFfTf_PgE1OjEH5m-TquYfzAWRK7wfte=w36-h36-p-rp-mo-ba4-br100',
    },
    // Adicione mais avaliações conforme necessário
  ];

  return (
    <Carousel showArrows={true} showIndicators={false} showThumbs={false} showStatus={false}>
      {reviewsData.map(review => (
        <div key={review.id} className={styles.reviewContainer}>
            <div className={styles.test}>
                <div className={styles.carouselHeader}>
                    <img src={review.image} alt={review.name} className={styles.reviewImage} />
                    <div className={styles.profileDetails}>
                        <div className={styles.reviewName}>{review.name}</div>
                        <div className={styles.reviewDate}>{review.date}</div>
                    </div>
                </div>
            <div className={styles.reviewStars}>
                {[...Array(review.stars)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
                ))} 
            </div>
            <div className={styles.reviewText}>{review.text}</div>
        </div>
            
        </div>
      ))}
    </Carousel>
  );
};

export default Reviews;
