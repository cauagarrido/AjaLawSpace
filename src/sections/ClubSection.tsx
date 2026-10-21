export default function ClubSection() {
  return (
    <section id="clube">
      <div className="clube-box">
        <div>
          <p className="kicker club-kicker">Clube de</p>
          <h2>Midiajus</h2>
          <img className="clube-logo" src="/assets/midiajus.jpg" alt="Logo Midiajus" loading="lazy" />
          <a className="btn btn-primary club-button" href="https://www.instagram.com/midiajus.br/" target="_blank" rel="noreferrer">Entrar em contato</a>
        </div>
        <div className="clube-perks">
          <div className="clube-perk"><div className="dot" /><span>Um espaço que promove experiências e grandes possibilidades de excelentes parcerias jurídicas.</span></div>
        </div>
      </div>
    </section>
  );
}
