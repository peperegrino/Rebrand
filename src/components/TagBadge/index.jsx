import './style.css';

const variants = {
  drama:    { bg: '#1a3a1a', border: '#00c030', text: '#00c030' },
  noir:     { bg: '#1a1a3a', border: '#6b7eff', text: '#6b7eff' },
  classico: { bg: '#2a1a0a', border: '#f5a623', text: '#f5a623' },
  terror:   { bg: '#3a1a1a', border: '#ff4444', text: '#ff4444' },
  default:  { bg: '#1e1e1e', border: '#555',    text: '#aaa'    },
};

export default function TagBadge({ label }) {
  const key = label?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const style = variants[key] || variants.default;
  return (
    <span
      className="tag-badge"
      style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.text }}
    >
      {label}
    </span>
  );
}
