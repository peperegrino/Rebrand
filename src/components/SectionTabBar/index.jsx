import { useState } from 'react';
import './style.css';

const tabs = [
  { label: 'Filmes Hoje', id: 'filmes-hoje' },
  { label: 'Membros', id: 'membros' },
  { label: 'Críticas', id: 'criticas' },
  { label: 'Listas', id: 'listas' },
];

export default function SectionTabBar() {
  const [active, setActive] = useState(0);
  const handleClick = (i, id) => {
    setActive(i);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="section-tab-bar">
      <div className="section-tab-bar__inner">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`section-tab-bar__tab ${i === active ? 'section-tab-bar__tab--active' : ''}`}
            onClick={() => handleClick(i, tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
