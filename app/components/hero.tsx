import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        {/* Heading */}
        <h1 className="hero-title">
          Portfolio<br />
          <span>Kelompok 2</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          MAGANG BERDAMPAK SAINS DATA UNS 2026
        </p>

        {/* Bubble Tags */}
        <div className="hero-tags">
          <span>Data Scientist</span>
          <span>Data Engineer</span>
          <span>Data Analyst</span>
          <span>Machine Learning</span>
          <span>Business Intelligence</span>
        </div>
      </div>
    </section>
  );
}
