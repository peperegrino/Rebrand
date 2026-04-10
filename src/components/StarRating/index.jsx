import './style.css';

export default function StarRating({ rating = 0, max = 5 }) {
  return (
    <div className="star-rating" aria-label={`${rating} de ${max} estrelas`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`star-rating__star ${i < rating ? 'star-rating__star--filled' : ''}`}
        >★</span>
      ))}
    </div>
  );
}
