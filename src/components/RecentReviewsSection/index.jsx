import ReviewCard from '../ReviewCard';
import './style.css';

const reviews = [
  {
    initials: 'MS', avatarColor: '#c0392b', username: 'm_ravel',
    film: 'Caché', rating: 5, likes: 47, date: 'há 2 horas',
    excerpt: 'Haneke constrói a suspense em camadas invisíveis. Cada cena revela e esconde ao mesmo tempo.',
  },
  {
    initials: 'PK', avatarColor: '#8e44ad', username: 'pierre_k',
    film: "L'Avventura", rating: 4, likes: 32, date: 'há 3 horas',
    excerpt: "L'Avventura permanece perturbadoramente moderna. Antonioni sabia exatamente o que estava fazendo.",
  },
  {
    initials: 'CL', avatarColor: '#2980b9', username: 'cinefile_luz',
    film: 'Mulholland Dr.', rating: 5, likes: 61, date: 'há 5 horas',
    excerpt: 'Lynch cria um labirinto emocional. Você nunca sabe se está sonhando ou se o sonho está te assistindo.',
  },
];

export default function RecentReviewsSection({ id }) {
  return (
    <section className="recent-reviews" id={id}>
      <div className="recent-reviews__inner">
        <h2 className="recent-reviews__title">Críticas Recentes</h2>
        <div className="recent-reviews__grid">
          {reviews.map((r) => (
            <ReviewCard key={r.username + r.film} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
