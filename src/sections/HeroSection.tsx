export default function HeroSection() {
  return (
    <section className="hero" id="sobre">
      <div className="sobre-info">
        <h1 className="sobre-info-title">O que é Aja?</h1>
        <div className="sobre-info-content">
          <p>O Aja Lawspace é um espaço executivo compartilhado que oferece requinte e praticidade agregado a uma das melhores localizações comerciais da Bahia: CEO Salvador Shopping. Mais que um simples escritório virtual, o Aja Lawspace propõe conceito, espaço e o status necessários para o desenvolvimento na carreira de jovens advogados que buscam soluções efetivas e acessíveis para esse momento. O Aja Lawspace foi idealizado e equipado como local que visa potencializar o crescimento gradual, sendo um importante aliado ao sucesso do nosso público.</p>
          <p>Nossa missão é proporcionar a jovens advogados o espaço ideal para o início do sucesso de sua jornada na advocacia, com valor acessível.</p>
        </div>
        <div className="sobre-info-actions">
          <a className="btn btn-primary" href="#planos">Ver planos</a>
          <a className="btn btn-ghost" href="#contato">Falar com a equipe</a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Ambientes do escritório Aja Lawspace">
        <img className="hero-photo-main" src="/assets/espaco-01.jpg" alt="Sala de reuniões do Aja Lawspace com mesa de vidro e biblioteca" fetchPriority="high" />
        <img className="hero-photo-secondary" src="/assets/espaco-03.jpg" alt="Recepção do escritório Aja Lawspace" loading="lazy" />
        <img className="hero-photo-detail" src="/assets/espaco-02.jpg" alt="Sala de reuniões com poltronas e estantes" loading="lazy" />
        <div className="hero-photo-note"><span>Conheça o Aja</span><strong>Seu espaço profissional em Salvador</strong></div>
        <span className="hero-photo-count" aria-hidden="true">01 <i /> 03</span>
      </div>
    </section>
  );
}
