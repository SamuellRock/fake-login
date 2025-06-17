import React from 'react';
import './LandingPage.css';

const services = [
  { title: 'Conta Digital', description: 'Abra e gerencie suas contas com facilidade.' },
  { title: 'Investimentos', description: 'Perfis inteligentes, para todos os perfis.' },
  { title: 'Cartão Premium', description: 'Benefícios exclusivos e cashback.' },
];

export default function LandingPage() {
  return (
    <div className="home-container">
      <header className="services-header">
        {services.map((s, idx) => (
          <div key={idx} className="service-card">
            <h2>{s.title}</h2>
            <p>{s.description}</p>
          </div>
        ))}
      </header>

      <section className="about-us">
        <h1>Quem Somos</h1>
        <p>
          Somos a Finança+ — inovação, simplicidade e segurança no seu controle financeiro. Nossa missão é empoderar você a tomar decisões com clareza e confiança.
        </p>
      </section>
    </div>
  );
}
